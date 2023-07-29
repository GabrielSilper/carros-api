import { Request, Response, Router } from 'express';
import CarController from '../controllers/car.controller';

const carRouter = Router();
const carController = new CarController();

carRouter.get('/', (req: Request, res: Response) =>
  carController.findAll(req, res)
);

carRouter.post('/', (req: Request, res: Response) =>
  carController.create(req, res)
);

export default carRouter;
