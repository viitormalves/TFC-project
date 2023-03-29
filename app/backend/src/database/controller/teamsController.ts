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

  findTeamById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const teamData = await this.teamsService.findTeamById(Number(id));
      res.status(200).json(teamData);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}
