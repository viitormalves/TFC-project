import { Request, Response } from 'express';
import TeamsService from '../services/teamsService';

export default class TeamsController {
  constructor(private teamsService: TeamsService) {}

  findAllTeams = async (_req: Request, res: Response): Promise<void> => {
    try {
      const allTeams = await this.teamsService.findAllTeams();
      res.status(200).json(allTeams);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}
