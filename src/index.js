import express from 'express'; // Best practice
import { PORT } from './config.js';

const app = express();

app.get('/',(req, res) => {
    res.send('Hello World! using Express JS')
})

app.listen(PORT,() => {
    console.log(`Example app listening on port ${PORT}`);
})