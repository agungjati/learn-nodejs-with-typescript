"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var App = express_1.default();
App.get("/", function (req, res) {
    res.send("Hello world !");
});
App.listen(3000, function () {
    console.log("Example app listening on port 3000 !");
});
