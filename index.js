import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from "./database/db.js";
import Routes from "./routes/route.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/', Routes);
app.use('/uploads', express.static('upload'));

const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


Connection(username, password);

if(process.env.NODE_ENV=="Prodcution"){
    app.use(express.static("client/build"));
}

app.listen(PORT, () => {
    console.log('Server Running on port Number 8000');
})