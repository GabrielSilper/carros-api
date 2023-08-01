import { Request, Response, Router } from 'express';
import CarController from '../controllers/car.controller';

const carRouter = Router();
const carController = new CarController();

carRouter.get('/', (req: Request, res: Response) =>
  carController.findAll(req, res)
);

carRouter.get('/brands', (req: Request, res: Response) =>
  carController.getAllBrands(req, res)
);

carRouter.get('/types', (req: Request, res: Response) =>
  carController.getAllTypes(req, res)
);

carRouter.get('/years', (req: Request, res: Response) =>
  carController.getAllYears(req, res)
);

carRouter.get('/:id', (req: Request, res: Response) =>
  carController.findById(req, res)
);

carRouter.post('/', (req: Request, res: Response) =>
  carController.create(req, res)
);

carRouter.patch('/:id', (req: Request, res: Response) =>
  carController.update(req, res)
);

carRouter.delete('/:id', (req: Request, res: Response) =>
  carController.delete(req, res)
);

export default carRouter;
