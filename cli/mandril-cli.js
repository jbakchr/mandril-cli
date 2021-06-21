const MainScreen = require("./screens/main-screen");

class MandrilCLI {
  constructor() {
    this.screen = new MainScreen();
  }

  start() {
    this.screen.printScreen();
  }
}

module.exports = MandrilCLI;
