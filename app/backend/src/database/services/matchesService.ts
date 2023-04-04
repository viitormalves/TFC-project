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
    const result = await this.matchesModel.findAll({
      where: { inProgress: progress },
      include: [
        { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });

    return result;
  }

  public async finishMatch(id: number) {
    const [affected] = await this.matchesModel.update({ inProgress: false }, { where: { id } });
    return affected;
  }
}
