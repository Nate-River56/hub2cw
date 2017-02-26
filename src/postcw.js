import request from 'superagent';

export default post;

const post = (api_token, room_id, msg) => {
  return new Promise((resolve, reject) => {
    request
      .post(endpoint(room_id))
      .set('X-ChatWorkToken', api_token)
      .send(`body=${encodeURIComponent(msg)}`)
      .end((err, res) => {
        if (!err && res.statusCode == 200){
          resolve(res);
        } else {
          console.log(res);
          console.log(err);
          reject(err);
        }
      })
  })
}

const endpoint = (room_id) => {
  return `https://api.chatwork.com/v2/rooms/${roomid}/messages`
}

