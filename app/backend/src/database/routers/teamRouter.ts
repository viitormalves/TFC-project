import { Router } from 'express';
import TeamsController from '../controller/teamsController';
import TeamsService from '../services/teamsService';
import Teams from '../models/TeamsModel';

const teamRouter = Router();
const teamService = new TeamsService(Teams);
const teamsController = new TeamsController(teamService);

teamRouter.get('/', teamsController.findAllTeams);

export default teamRouter;
