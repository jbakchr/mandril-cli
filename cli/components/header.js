const figlet = require("figlet");

class Header {
  printHeader(text) {
    console.log(figlet.textSync(text));
  }
}

module.exports = Header;
