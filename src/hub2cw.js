
import hub from './hub_event.js';
import cw from './postcw.js';

export default hub2cw;

hub2cw.run = (event, context) => {

  let text = '';

  text = hub.getmsg(event);

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

