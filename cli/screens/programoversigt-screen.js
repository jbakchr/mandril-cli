const { prompt } = require("enquirer");

const Header = require("../components/header");

class ProgramoversigtScreen {
  constructor() {
    this.header = new Header("PROGRAMOVERSIGTEN");
  }

  printScreen() {
    this.header.printHeader();
  }

  async showPrompt() {
    const respone = await prompt({
      type: "select",
      name: "choice",
      message: "Jeg vælgeerr en ..",
      choices: ["Tilfældig", "Specifik"],
    });
    return respone;
  }

  showProgramoversigt() {
    console.log("Show programoversigt here");
  }
}

module.exports = ProgramoversigtScreen;
