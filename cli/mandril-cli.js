const MainScreen = require("./screens/main-screen");

class MandrilCLI {
  constructor() {
    this.screen = new MainScreen();
  }

  async start() {
    this.screen.printScreen();
    const response = await this.screen.showPrompt({
      type: "select",
      name: "choice",
      message: "vælg..",
      choices: ["Programoversigt", "Citater"],
    });

    this.getUserChoice(response.choice);
  }

  getUserChoice(choice) {
    switch (choice.toLowerCase()) {
      case "programoversigt":
        console.log("set new screen");
        break;
      default:
        console.log("End");
    }
  }
}

module.exports = MandrilCLI;
