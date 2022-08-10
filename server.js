import express from 'express';
import connection from './database/db.js';
import DefaultData from './default.js';
import route from './routes/route.js';
import cors from 'cors';
import dotenv from 'dotenv';



const app = express();
dotenv.config();
app.use(cors());
app.use('/', route);

if(process.env.NODE_ENV === 'production')
{
    app.use(express.static("client/build"));
}

const username= process.env.DB_USERNAME;
const password= process.env.DB_PASSWORD;

const url= process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@cluster0.t3fgp.mongodb.net/inshorts`;
connection(url);

app.listen(process.env.PORT || 8000, () => {
    console.log("Server started");
});

DefaultData();
