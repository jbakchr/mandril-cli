const { prompt } = require("enquirer");

const Header = require("../components/header");

class MainScreen {
  constructor() {
    this.header = new Header("MANDRIL CLI");
  }

  printScreen() {
    this.header.printHeader();
  }

  async showPrompt(options) {
    const respone = await prompt(options);
    return respone;
  }
}

module.exports = MainScreen;
