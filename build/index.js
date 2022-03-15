"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 9000;
var one = 1;
var two = 2;
app.get("/", function (req, res) { return res.send("1 + 2 = ".concat(one + two)); });
app.listen(port);
console.log("[app]: http://localhost:".concat(port));
