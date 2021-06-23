const { prompt } = require("enquirer");

const Header = require("../components/header");

class MainScreen {
  constructor() {
    this.header = new Header("MANDRIL CLI");
  }

  printHeader() {
    this.header.printHeader();
  }

  async showPrompt(option) {
    const respone = await prompt(option);
    return respone;
  }
}

module.exports = MainScreen;
