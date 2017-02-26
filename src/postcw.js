import request from 'superagent';

exports.message = (api_token, room_id, msg) => {
  request
    .post(endpoint(room_id))
    .set('X-ChatWorkToken', api_token)
    .send(`body=${encodeURIComponent(msg)}`)
    .end((err, res) => {
      if (!err && res.statusCode == 200){
        console.log("Post Success!!");
      } else {
        console.log("Post Failed");
        console.log(err);
      }
    })
}

const endpoint = (room_id) => {
  return `https://api.chatwork.com/v2/rooms/${room_id}/messages`
}

