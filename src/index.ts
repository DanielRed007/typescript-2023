
import express, { Application, Request, Response } from 'express';
import * as dotenv from "dotenv";

dotenv.config();

const app: Application = express();

const PORT: any = process.env.PORT;

app.use('/', (req: Request, res: Response): void => {
    res.send('Hello world!');
});

app.listen(PORT, (): void => {
    console.log('Server running on port:', PORT);
});