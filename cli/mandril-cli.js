const clear = require("clear");

const MainScreen = require("./screens/main-screen");
const ProgramoversigtScreen = require("./screens/programoversigt-screen");

const {
  MAIN_SCREEN_OPTIONS,
  PROGRAMOVERSIGTEN__MAIN_OPTIONS,
  PROGRAMOVERSIGTEN_RANDOM_OPTIONS,
} = require("./prompt-options/prompt-options");

class MandrilCLI {
  _screens = [];

  constructor() {
    this._screens.push(new MainScreen());
  }

  start() {
    clear();
    this._screens[this.screensLength - 1].printHeader();
    this.showScreen(MAIN_SCREEN_OPTIONS);
  }

  get screensLength() {
    return this._screens.length;
  }

  async showScreen(option) {
    const { choice } = await this._screens[this.screensLength - 1].showPrompt(
      option
    );

    this.switchScreen(choice);
  }

  switchScreen(choice) {
    switch (choice.toLowerCase()) {
      case "eeenn programoversigt!":
        clear();
        const programOversigtScreen = new ProgramoversigtScreen();
        this._screens.push(programOversigtScreen);
        this._screens[this.screensLength - 1].printHeader();
        this.showScreen(PROGRAMOVERSIGTEN__MAIN_OPTIONS);
        break;
      case "tilfældig":
        clear();
        this._screens[this.screensLength - 1].printHeader();
        this._screens[this.screensLength - 1].showProgramoversigt();
        console.log();
        this.showScreen(PROGRAMOVERSIGTEN_RANDOM_OPTIONS);
        break;
      default:
        console.log("End");
    }
  }
}

module.exports = MandrilCLI;
