"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_powershell_1 = __importDefault(require("node-powershell"));
var inquirer_1 = __importDefault(require("inquirer"));
var chalk_1 = __importDefault(require("chalk"));
var ps = new node_powershell_1.default({
    executionPolicy: 'Bypass',
});
function Echo(_a) {
    var script = _a.script;
    ps.addCommand('Get-Service ' + script + '| ConvertTo-Json');
    ps.invoke()
        .then(function (output) {
        var servicesList = JSON.parse(output);
        inquirer_1.default.prompt([
            {
                type: 'list',
                name: 'selectedScript',
                message: 'Which script do you want to be run?',
                choices: servicesList.map(function (_a) {
                    var DisplayName = _a.DisplayName, UserName = _a.UserName, Status = _a.Status;
                    return DisplayName + " | " + UserName + " | " + Status;
                }),
            },
        ]).then(function (selectedService) {
            console.log(selectedService);
        });
    })
        .catch(function (err) {
        console.log(chalk_1.default.red(err));
    });
}
exports.default = Echo;
