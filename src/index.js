import express from 'express'; // Best practice
import { PORT } from './config.js';
import userRoutes from './routes/user.routes.js'

const app = express();

app.use(express.json())
app.get('/',(req, res) => {
    res.send('Hello World! using Express JS')
})

app.use(userRoutes);

app.listen(PORT,() => {
    console.log(`Example app listening on port ${PORT}`);
})