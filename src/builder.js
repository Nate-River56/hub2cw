import fs from 'fs';
import handlebars from 'handlebars';

exports.push = (payload) => {
  // const source = fs.readFileSync(
  //   '../templates/hub_push.hbs',
  //   'utf-8'
  //   );
  // console.log(source);
  
  const source = `-- Push event --
CompareURL: {{compare}}
{{#commits}}
[info][title]{{message}}[/title]URL: {{url}}
Commiter: {{committer.username}} ({{committer.name}})
[hr]{{#if added}}Added:[code]{{#added}}{{this}}
{{/added}}[/code]
{{/if}}{{#if modified}}Modified:[code]{{#modified}}{{this}}
{{/modified}}[/code]
{{/if}}{{#if removed}}Removed:[code]{{#removed}}{{this}}
{{/removed}}[/code]
{{/if}}[/info]{{/commits}}
`;

  const template = handlebars.compile(source);

  const message = template(payload);
  console.log(message);

  // var message = "Hello, world!!";

  return message;
}
