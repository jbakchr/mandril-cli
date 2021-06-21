const Header = require("../components/header");

class MainScreen {
  constructor() {
    this.header = new Header("MANDRIL CLI");
  }

  printScreen() {
    this.header.printHeader();
  }
}

module.exports = MainScreen;
