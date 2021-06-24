const clear = require("clear");

const MainScreen = require("./screens/main-screen");
const ProgramoversigtScreen = require("./screens/programoversigt-screen");

const afslutningData = require("../data/afslutning-data.json");

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
      case "hit me!":
      case "tilfældig":
        clear();
        this._screens[this.screensLength - 1].printHeader();
        this._screens[this.screensLength - 1].showProgramoversigt("random");
        console.log();
        this.showScreen(PROGRAMOVERSIGTEN_RANDOM_OPTIONS);
        break;
      case "giv mig min sko tilbage, røv! (aka 'gå tilbage')":
        clear();
        this._screens.pop();
        this._screens[this.screensLength - 1].printHeader();
        this.showScreen(MAIN_SCREEN_OPTIONS);
        break;
      case "ses vi?":
        const randomIndex = Math.floor(Math.random() * afslutningData.length);
        console.log(afslutningData[randomIndex].end);
    }
  }
}

module.exports = MandrilCLI;
