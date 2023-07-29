import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'express-async-errors';
import carRouter from './routes/car.routes';

class App {
  public app: express.Express;
  private db = mongoose; // sei que poderia criar um interface pra acoplar diversos bancos, mas aqui só queria praticar

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes(): void {
    this.app.get('/live', (req: Request, res: Response) =>
      res.send('App is live...')
    );
    this.app.use('/cars', carRouter);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }

  public async connectDB(uri: string): Promise<void> {
    try {
      await this.db.connect(uri);
      console.log(`Good connection with database`);
    } catch (error) {
      console.log(`You have a trouble with the connection: ${error}`);
    }
  }
}

export default App;
