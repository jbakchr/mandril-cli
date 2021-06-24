const clear = require("clear");
const chalk = require("chalk");

const MainScreen = require("./screens/main-screen");
const ProgramoversigtScreen = require("./screens/programoversigt-screen");

const advarselsData = require("../data/advarsel-data.json");
const afslutningData = require("../data/afslutning-data.json");

const {
  MAIN_SCREEN_OPTIONS,
  PROGRAMOVERSIGTEN_MAIN_OPTIONS,
  PROGRAMOVERSIGTEN_RANDOM_OPTIONS,
} = require("./prompt-options/prompt-options");

class MandrilCLI {
  _screens = [];
  _warning = "";

  constructor() {
    this._screens.push(new MainScreen());
    this._warning =
      advarselsData[Math.floor(Math.random() * advarselsData.length)];
  }

  start() {
    clear();
    this._screens[this.screensLength - 1].printHeader();
    this.printWarning();
    this.showScreen(MAIN_SCREEN_OPTIONS);
  }

  get warning() {
    return this._warning.advarsel;
  }

  printWarning() {
    console.log(`${chalk.bold.white("ADVARSEL!")}\n${this.warning}\n`);
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
        this.showScreen(PROGRAMOVERSIGTEN_MAIN_OPTIONS);
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
        this.printWarning();
        this.showScreen(MAIN_SCREEN_OPTIONS);
        break;
      case "ses vi?":
        const randomIndex = Math.floor(Math.random() * afslutningData.length);
        console.log(afslutningData[randomIndex].end);
    }
  }
}

module.exports = MandrilCLI;
