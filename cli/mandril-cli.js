const clear = require("clear");

const MainScreen = require("./screens/main-screen");
const ProgramoversigtScreen = require("./screens/programoversigt-screen");

const {
  MAIN_SCREEN_OPTIONS,
  PROGRAMOVERSIGTEN_OPTIONS,
} = require("./prompt-options/prompt-options");

class MandrilCLI {
  _screens = [];

  constructor() {
    this._screens.push(new MainScreen());
  }

  start() {
    this.showScreen(MAIN_SCREEN_OPTIONS);
  }

  get screensLength() {
    return this._screens.length;
  }

  async showScreen(option) {
    clear();
    this._screens[this.screensLength - 1].printHeader();

    const { choice } = await this._screens[this.screensLength - 1].showPrompt(
      option
    );

    this.switchScreen(choice);
  }

  switchScreen(choice) {
    switch (choice.toLowerCase()) {
      case "programoversigt":
        const programOversigtScreen = new ProgramoversigtScreen();
        this._screens.push(programOversigtScreen);
        this.showScreen(PROGRAMOVERSIGTEN_OPTIONS);
        break;
      case "tilfældig":
        this._screens[this.screensLength - 1].showProgramoversigt();
      default:
        console.log("End");
    }
  }
}

module.exports = MandrilCLI;
