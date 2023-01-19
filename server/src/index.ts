import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT_NUMBER;

app.use(
    cors({
        origin: "*",
    })
);

app.use(express.json());

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`Listening on port ${PORT}`);
    app.listen(PORT);
});