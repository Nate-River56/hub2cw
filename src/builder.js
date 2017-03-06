import fs from 'fs';
import handlebars from 'handlebars';

exports.push = (payload) => {
  const source = fs.readFileSync(
    '../templates/hub_push.hbs',
    'utf-8'
  );
  console.log(source);

  const template = handlebars.compile(source);

  const message = template(payload);
  console.log(message);

  return message;
}
