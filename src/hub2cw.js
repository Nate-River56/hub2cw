import hub from './hub_event.js';
import cw from './postcw.js';
import kms from './kms_descrypt.js';

exports.run = (event, context) => {

  let text = '';

  const enc_token = process.env.CHATWORK_API_TOKEN;
  const enc_room_id = process.env.CHATWORK_ROOM_ID;

  text = hub.getmsg(event);

  if(!text){
    context.done();
    return;
  }

  Promise.all([
    kms.dec(enc_token),
    kms.dec(enc_room_id)
  ]).then((decVal)=> {
    cw.message(
      decVal[0], // Decrypted_token
      decVal[1], // Decrypted_room_id
      text
    );
  }, (reason)=> {
    console.log(reason);
    console.log("Not post to chatwork.");
    context.done();
  });
}
