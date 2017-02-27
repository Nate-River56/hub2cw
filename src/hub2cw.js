
import aws from 'aws-sdk';
import hub from './hub_event.js';
import cw from './postcw.js';


exports.run = (event, context) => {

  let text = '';
  
  const enc_token = process.env.CHATWORK_API_TOKEN;
  let dec_token;
  
  const enc_room_id = process.env.CHATWORK_ROOM_ID;
  let dec_room_id;

  text = hub.getmsg(event);

  console.log(text);

  if(!text){
    context.done();
    return;
  }


  const kms = new aws.KMS();

  kms.decrypt({CiphertextBlob: new Buffer(enc_token, 'base64')},(err, data)=> {
    if (err){
      console.log('Decrypt error:', err);
      return callback(err);
    }
    dec_token = data.Plaintext.toString('ascii');

    kms.decrypt({CiphertextBlob: new Buffer(enc_room_id, 'base64')},(err, data)=> {
      if (err){
        console.log('Decrypt error:', err);
        return callback(err);
      }
      dec_room_id = data.Plaintext.toString('ascii');

      cw.message(
        dec_token,
        dec_room_id,
        text
      );
    });
  });
}

