import aws from 'aws-sdk';

exports.decrypt = (enc_token) =>{
  return new Promise((resolve, reject) => {
    const kms = new aws.KMS();
    kms.decrypt({CiphertextBlob: new Buffer(enc_token, 'base64')}, (err, data) => {
      if(err){
          console.log("Decript error.");
          reject(err);
      }
      const dec_token = data.Plaintext.toString('ascii');
      resolve(dec_token);
    })
  });
}
