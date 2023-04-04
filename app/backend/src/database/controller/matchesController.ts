import { Request, Response } from 'express';
import MatchesService from '../services/matchesService';
// import TeamsService from '../services/teamsService';

export default class MatchesController {
  constructor(
    private matchesService: MatchesService,
    // private teamsService: TeamsService,
  ) {}

  findAllMatches = async (req: Request, res: Response) => {
    try {
      const { inProgress } = req.query;
      if (inProgress) {
        const result = (inProgress === 'true');
        const findMatches = await this.matchesService.findMatchesProgress(result);
        return res.status(200).json(findMatches);
      }
      const allMatches = await this.matchesService.findAllMatches();
      res.status(200).json(allMatches);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  finishMatch = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await this.matchesService.finishMatch(Number(id));
      res.status(200).json({ message: 'Finished' });
    } catch (error) {
      res.status(500).json(error);
    }
  };
}
