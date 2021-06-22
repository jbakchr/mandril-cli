const { prompt } = require("enquirer");

const Header = require("../components/header");
const programoversigtData = require("../../data/programoversigt-data.json");

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
    console.log(`\nPROGRAMOVERSIGT #${1}`);
    programoversigtData[0].oversigt.forEach((oversigt) => {
      console.log(oversigt);
    });
  }
}

module.exports = ProgramoversigtScreen;
