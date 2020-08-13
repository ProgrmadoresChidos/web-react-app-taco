const { execSync } = require('child_process');
const { writeFileSync } = require('fs');

// let resp = execSync('heroku config --app=la-app-del-taco-web');
let resp = execSync('heroku config --app=nestor-webserver-curso-node');
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

let file = '';
const keys = Object.keys(configVars);
keys.forEach((key, index,) => {
  file = `${file}${key}=${configVars[key]}`;
  if (index !== keys.length - 1) {
    file = `${file}\n`;
  }
});
try {
  writeFileSync('.env', file);
} catch (error) {
  throw error;
}
console.log('Se escribio .env correctamente');