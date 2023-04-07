import { Request, Response } from 'express';
import LeaderBoardService from '../services/leaderBoardService';

export default class leaderBoardController {
  constructor(private leaderBoardService: LeaderBoardService) {}

  makerLeaderBoardHome = async (_req: Request, res: Response) => {
    try {
      const leaderBoardHome = await this.leaderBoardService.makerLeaderBoardHome();
      res.status(200).json(leaderBoardHome);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  makerLeaderBoardAway = async (_req: Request, res: Response) => {
    try {
      const makerLeaderBoardAway = await this.leaderBoardService.makerLeaderBoardAway();
      res.status(200).json(makerLeaderBoardAway);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  makerLeaderBoardComplet = async (_req: Request, res: Response) => {
    try {
      const makerLeaderBoardComplet = await this.leaderBoardService.makerLeaderBoardComplet();
      res.status(200).json(makerLeaderBoardComplet);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}
