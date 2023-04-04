import { Router } from 'express';
import MatchesController from '../controller/matchesController';
import MatchesService from '../services/matchesService';
import Matches from '../models/MatchesModel';
import TeamsService from '../services/teamsService';
import Teams from '../models/TeamsModel';

const matchesRouter = Router();

const teamService = new TeamsService(Teams);
const matchesService = new MatchesService(Matches);
const matchesController = new MatchesController(matchesService, teamService);

matchesRouter.get('/', matchesController.findAllMatches);

export default matchesRouter;
