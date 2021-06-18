const Header = require("./components/header");

class MandrilCLI {
  constructor() {}

  start() {
    this.printMainScreen();
  }

  printMainScreen() {
    const header = new Header();
    header.printHeader("Mandril CLI");
  }
}

module.exports = MandrilCLI;
