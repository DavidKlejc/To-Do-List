"use strict";
// import { config } from 'dotenv';
// config();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = process.env.PORT_NUMBER;
// const PORT = 5000;
console.log(PORT);
mongoose_1.default.connect(process.env.MONGO_URL).then(() => {
    console.log(`Listening on port ${PORT}`);
    app.listen(PORT);
});
