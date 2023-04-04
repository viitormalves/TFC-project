import { Request, Response } from 'express';
import MatchesService from '../services/matchesService';
import TeamsService from '../services/teamsService';

export default class MatchesController {
  constructor(
    private matchesService: MatchesService,
    private teamsService: TeamsService,
  ) {}

  findAllMatches = async (req: Request, res: Response) => {
    try {
      const { inProgress } = req.query;
      if (inProgress) {
        const trueMatches = await this.matchesService.findMatchesProgress(true);
        res.status(200).json(trueMatches);
      }

      const allMatches = await this.matchesService.findAllMatches();
      res.status(200).json(allMatches);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}
