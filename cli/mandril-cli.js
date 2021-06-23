const clear = require("clear");

const MainScreen = require("./screens/main-screen");
const ProgramoversigtScreen = require("./screens/programoversigt-screen");

class MandrilCLI {
  _screens = [];

  constructor() {
    this._screens.push(new MainScreen());
  }

  start() {
    this.showScreen();
  }

  async showScreen() {
    clear();
    this._screens[this._screens.length - 1].printScreen();
    const { choice } = await this._screens[
      this._screens.length - 1
    ].showPrompt();
    this.switchScreen(choice);
  }

  switchScreen(choice) {
    switch (choice.toLowerCase()) {
      case "programoversigt":
        const programOversigtScreen = new ProgramoversigtScreen();
        this._screens.push(programOversigtScreen);
        this.showScreen();
        break;
      case "tilfældig":
        this._screens[this._screens.length - 1].showProgramoversigt();
      default:
        console.log("End");
    }
  }
}

module.exports = MandrilCLI;
