"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_powershell_1 = __importDefault(require("node-powershell"));
var chalk_1 = __importDefault(require("chalk"));
var ps = new node_powershell_1.default({
    executionPolicy: 'Bypass',
    noProfile: true,
});
function Echo(_a) {
    var echo = _a.echo;
    ps.addCommand("echo " + echo);
    ps.invoke()
        .then(function (output) {
        console.log(chalk_1.default.green(output));
    })
        .catch(function (err) {
        console.log(chalk_1.default.red(err));
    });
}
exports.default = Echo;
