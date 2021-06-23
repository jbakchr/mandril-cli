const { prompt } = require("enquirer");

const Header = require("../components/header");
const programoversigtData = require("../../data/programoversigt-data.json");

class ProgramoversigtScreen {
  constructor() {
    this.header = new Header("PROGRAMOVERSIGTEN");
  }

  printHeader() {
    this.header.printHeader();
  }

  async showPrompt(option) {
    const respone = await prompt(option);
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
