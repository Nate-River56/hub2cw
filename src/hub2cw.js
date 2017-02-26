
import hub from './hub_event.js';
import cw from './postcw.js';

exports.run = (event, context) => {

  let text = '';

  text = hub.getmsg(event);

  console.log(text);

  if(!text){
    context.done();
    return;
  }

  cw.message(
    process.env.CHATWORK_API_TOKEN,
    process.env.CHATWORK_ROOM_ID,
    text
  );

}

