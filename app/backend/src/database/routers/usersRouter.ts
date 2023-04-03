import { Request, Response, Router } from 'express';
import UsersController from '../controller/usersController';
import UsersService from '../services/usersService';
import Users from '../models/UsersModel';
import validateLogin from '../middlewares/userValidation';
import authToken from '../middlewares/authToken';

const usersRouter = Router();
const usersService = new UsersService(Users);
const usersController = new UsersController(usersService);

usersRouter.get(
  '/role',
  authToken,
  (req: Request, res: Response) => usersController.findRole(req, res),
);
usersRouter.post('/', validateLogin, usersController.login);

export default usersRouter;
