import hub from './hub_event.js';
import cw from './postcw.js';
import kms from './kms_descrypt.js';

exports.run = (event, context) => {

  const enc_token = process.env.CHATWORK_API_TOKEN;
  const enc_room_id = process.env.CHATWORK_ROOM_ID;

  Promise.all([
    kms.dec(enc_token),
    kms.dec(enc_room_id),
    hub.getmsg(event)
  ]).then((decVal)=> {
    cw.message(
      decVal[0], // Decrypted_token
      decVal[1], // Decrypted_room_id
      decVal[2]  // text
    );
  }, (reason)=> {
    console.log(reason);
    console.log("Not post to chatwork.");
    context.done();
  });
}
