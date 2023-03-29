import { Router } from 'express';
import UsersController from '../controller/usersController';
import UsersService from '../services/usersService';
import Users from '../models/UsersModel';
import validateLogin from '../middlewares/userValidation';

const usersRouter = Router();
const usersService = new UsersService(Users);
const usersController = new UsersController(usersService);

usersRouter.post('/', validateLogin, usersController.login);

export default usersRouter;
