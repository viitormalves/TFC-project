import { Router } from 'express';
import Matches from '../models/MatchesModel';
import Teams from '../models/TeamsModel';
import LeaderBoardService from '../services/leaderBoardService';
import LeaderBoardController from '../controller/leaderBoardController';

const leaderBoardRouter = Router();

const leaderBoardService = new LeaderBoardService(Matches, Teams);
const leaderBoardController = new LeaderBoardController(leaderBoardService);

leaderBoardRouter.get('/home', leaderBoardController.makerLeaderBoardHome);

export default leaderBoardRouter;