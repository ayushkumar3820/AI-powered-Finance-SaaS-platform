import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Server is running');
});

export default app;