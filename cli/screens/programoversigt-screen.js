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

  showProgramoversigt(choice) {
    const num =
      choice === "random"
        ? Math.floor(Math.random() * programoversigtData.length)
        : choice;

    console.log(`\nPROGRAMOVERSIGT #${num + 1}`);
    console.log("--------------------------------");
    programoversigtData[num].oversigt.forEach((oversigt) => {
      console.log(oversigt);
    });
    console.log("--------------------------------");
  }
}

module.exports = ProgramoversigtScreen;
