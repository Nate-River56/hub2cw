import hub from './hub_event.js';
import cw from './postcw.js';
import kms from './kms.js';

exports.run = (event, context) => {

  const enc_token = process.env.CHATWORK_API_TOKEN;
  const room_id = process.env.CHATWORK_ROOM_ID;

  Promise.all([
    kms.decrypt(enc_token),
    hub.getmsg(event)
  ]).then((decVal)=> {
    cw.message(
      decVal[0], // Decrypted_token
      room_id, // Decrypted_room_id
      decVal[1]  // text
    );
  }, (reason)=> {
    console.log(reason);
    console.log("Not post to chatwork.");
    context.done();
  });
}
