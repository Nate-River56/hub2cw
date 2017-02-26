import fs from 'fs';
import handlebars from 'handlebars';

export default builder;

builder.push = (payload) => {
  let template = Handlebars.compile(
    fs.readFileSync(
    '../templates/hub_push.hbs',
    'utf-8'
    )
  );
  return template(payload);
}
