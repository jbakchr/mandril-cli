const { prompt } = require("enquirer");

const Header = require("../components/header");

class MainScreen {
  constructor() {
    this.header = new Header("MANDRIL CLI");
  }

  printHeader() {
    this.header.printHeader();
  }

  async showPrompt() {
    const respone = await prompt({
      type: "select",
      name: "choice",
      message: "vælg..",
      choices: ["Programoversigt", "Citater"],
    });
    return respone;
  }
}

module.exports = MainScreen;
