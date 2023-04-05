import ITeamBoard from '../interfaces/ILeaderBoard';
import ITeam from '../interfaces/ITeam';
import Matches from '../models/MatchesModel';
import Teams from '../models/TeamsModel';
import LBHomeFunction from '../utils/leaderBoardHome.functions';

export default class LeaderBoardService {
  constructor(
    private matchesModel = Matches,
    private teamsModel = Teams,
  ) {}

  public async makerLeaderBoardHome() {
    const allTeams = await this.teamsModel.findAll();
    const allMatches = await this.matchesModel.findAll({ where: { inProgress: false } });

    const leaderboardHomeTeams = allTeams.reduce((acc: ITeamBoard[], curr: ITeam) => {
      const teamMatches = allMatches
        .filter((m) => m.homeTeamId === curr.id);
      const lBoard = LBHomeFunction.board(teamMatches);
      acc.push({ name: curr.teamName, ...lBoard });
      return acc;
    }, []);

    const result = LBHomeFunction.orderBoard(leaderboardHomeTeams);
    return result;
  }
}
