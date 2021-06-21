const figlet = require("figlet");

class Header {
  constructor(headerText) {
    this.headerText = headerText;
  }

  printHeader() {
    console.log(figlet.textSync(this.headerText));
  }
}

module.exports = Header;
