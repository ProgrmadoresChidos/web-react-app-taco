const { execSync } = require('child_process');

let resp = execSync('heroku config --app=la-app-del-taco-web');
resp = resp.toString();
const info = resp.split('\n');
let configVars = {};

configVars = info.reduce((resp, element, index) => {
  if (!!element && index) {
    let vars = element.split(':');
    vars = vars.map(el => el.trim());
    return {
      ...resp,
      [vars[0]]: vars[1],
    };
  }
  return resp;
}, {});

console.log(configVars);
