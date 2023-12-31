import express from "express";
import bodyParser from "body-parser";
import {logger} from "./src/logger/winston";

const port = 8000;
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    try {
        res.end('<h1>Hello winston!</h1>');
        throw new Error('Error test winston');
    } catch (err) {
        logger.error(err);
    }
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});