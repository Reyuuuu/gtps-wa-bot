const fs = require("fs");
const chalk = require("chalk");
const { doesNotThrow } = require("assert");

// Other
global.owner = ["6287831305832", ""];
global.staff = ["6287831305832"];
global.footer = "Dignity by akbarr.dev";
global.sessionName = "dignity";
global.prefa = ["", "/", "!", "."]; // "" = no prefix

global.thumb = fs.readFileSync("./assets/image/dignity.jpg");


let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
