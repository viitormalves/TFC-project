import ITeam from '../interfaces/ITeam';
import Teams from '../models/TeamsModel';

export default class TeamsService {
  constructor(private teamsModel = Teams) {}

  public async findAllTeams(): Promise<ITeam[]> {
    return this.teamsModel.findAll();
  }

  public async findTeamById(id: number): Promise<ITeam | null> {
    return this.teamsModel.findByPk(id);
  }
}
