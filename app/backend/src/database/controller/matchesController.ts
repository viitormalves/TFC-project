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

  updateMatch = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = req.body;
      await this.matchesService.updateMatch(Number(id), result);
      res.status(200).json({ message: 'Update completed' });
    } catch (error) {
      res.status(500).json(error);
    }
  };

  insertMatch = async (req: Request, res: Response) => {
    try {
      const { homeTeamId, awayTeamId } = req.body;

      if (homeTeamId === awayTeamId) {
        return res.status(422).json({
          message: 'It is not possible to create a match with two equal teams',
        });
      }

      const validateHomeTeam = await this.teamsService.findTeamById(homeTeamId);
      const validateAwayTeam = await this.teamsService.findTeamById(awayTeamId);
      if (!validateAwayTeam || !validateHomeTeam) {
        return res.status(404).json({ message: 'There is no team with such id!' });
      }

      const recordMatch = await this.matchesService.insertMatch(req.body);
      return res.status(201).json(recordMatch);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}
