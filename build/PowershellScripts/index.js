"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Echo_1 = __importDefault(require("./Echo"));
var GetServices_1 = __importDefault(require("./GetServices"));
var questions_1 = require("../questions");
exports.default = [
    {
        name: 'Echo',
        script: Echo_1.default,
        question: questions_1.QEcho,
    },
    {
        name: 'GetServices',
        script: GetServices_1.default,
        question: questions_1.QGetServices,
    },
];
