import hub2cw from './hub2cw';

exports.handler = (event, context) => {
  console.log('Received event:', JSON.stringify(event, null, 2));
  hub2cw.run(event, context, () => {
    context.done();
  });
}
