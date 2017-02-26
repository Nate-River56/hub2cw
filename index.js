var aws = require('aws-sdk');
var hub2cw = require('./lib/hub2cw')

exports.handler = function(event, context){
  console.log('Received event:', JSON.stringify(event, null, 2));
  hub2cw.run(event, context, function(){
    context.done();
  });
}
