import IMatch from '../interfaces/IMatches';
import Matches from '../models/MatchesModel';
import Teams from '../models/TeamsModel';

export default class MatchesService {
  constructor(private matchesModel = Matches) {}

  public async findAllMatches(): Promise<IMatch[]> {
    return this.matchesModel.findAll({
      include: [
        { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
  }

  public async findMatchesProgress(progress: boolean): Promise<IMatch[]> {
    return this.matchesModel.findAll({
      where: {
        inProgress: progress,
      },
      include: [
        { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
  }

//   public async findTeamById(id: number): Promise<IMatch | null> {
//     return this.matchesModel.findByPk(id);
//   }
}
