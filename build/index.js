"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
var chalk_1 = __importDefault(require("chalk"));
var PowershellScripts_1 = __importDefault(require("./PowershellScripts"));
function Main() {
    inquirer_1.default.prompt([
        {
            type: 'list',
            name: 'selectedScript',
            message: 'Which script do you want to be run?',
            choices: PowershellScripts_1.default.map(function (_a) {
                var name = _a.name;
                return name;
            }),
        },
    ]).then(function (_a) {
        var selectedScript = _a.selectedScript;
        var findedScript = PowershellScripts_1.default.find(function (_a) {
            var name = _a.name;
            return name === selectedScript;
        });
        if (!findedScript) {
            return console.log(chalk_1.default.red('Script not found!'));
        }
        inquirer_1.default.prompt([findedScript.question]).then(function (scriptArg) {
            findedScript.script(scriptArg);
        });
    });
}
Main();
