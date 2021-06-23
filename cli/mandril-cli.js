const clear = require("clear");

const MainScreen = require("./screens/main-screen");
const ProgramoversigtScreen = require("./screens/programoversigt-screen");

class MandrilCLI {
  constructor() {
    this.screen = new MainScreen();
  }

  start() {
    this.showScreen();
  }

  async showScreen() {
    clear();
    this.screen.printScreen();
    const { choice } = await this.screen.showPrompt();
    this.switchScreen(choice);
  }

  switchScreen(choice) {
    switch (choice.toLowerCase()) {
      case "programoversigt":
        this.screen = new ProgramoversigtScreen();
        this.showScreen();
        break;
      case "tilfældig":
        this.screen.showProgramoversigt();
      default:
        console.log("End");
    }
  }
}

module.exports = MandrilCLI;
