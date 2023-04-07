import ITeamBoard from '../interfaces/ILeaderBoard';
import IMatch from '../interfaces/IMatches';

export default class LBAwayFunction {
  public static totalPoints(allMatches: IMatch[]): number {
    const victoryPoints = allMatches.filter((m) => m.awayTeamGoals > m.homeTeamGoals);
    const drawPoints = allMatches.filter((m) => m.homeTeamGoals === m.awayTeamGoals);
    return (victoryPoints.length * 3) + drawPoints.length;
  }

  public static totalGames(allMatches: IMatch[]):number {
    return allMatches.length;
  }

  public static totalVictories(allMatches: IMatch[]): number {
    const total = allMatches.filter((m) => m.awayTeamGoals > m.homeTeamGoals);
    return total.length;
  }

  public static totalDraws(allMatches: IMatch[]): number {
    const total = allMatches.filter((m) => m.homeTeamGoals === m.awayTeamGoals);
    return total.length;
  }

  public static totalLosses(allMatches: IMatch[]): number {
    const total = allMatches.filter((m) => m.awayTeamGoals < m.homeTeamGoals);
    return total.length;
  }

  public static goalsFavor(allMatches: IMatch[]): number {
    let total = 0;
    allMatches.forEach((m) => {
      total += m.awayTeamGoals;
    });
    return total;
  }

  public static goalsOwn(allMatches: IMatch[]): number {
    let total = 0;
    allMatches.forEach((m) => {
      total += m.homeTeamGoals;
    });
    return total;
  }

  public static goalsBalance(F: number, O: number): number {
    return F - O;
  }

  public static efficiency(points: number, games: number): string {
    const result = ((points / (games * 3)) * 100).toFixed(2);
    return result;
  }

  public static board(teamMatches: IMatch[]) {
    return {
      totalPoints: this.totalPoints(teamMatches),
      totalGames: this.totalGames(teamMatches),
      totalVictories: this.totalVictories(teamMatches),
      totalDraws: this.totalDraws(teamMatches),
      totalLosses: this.totalLosses(teamMatches),
      goalsFavor: this.goalsFavor(teamMatches),
      goalsOwn: this.goalsOwn(teamMatches),
      goalsBalance: this.goalsBalance(this.goalsFavor(teamMatches), this.goalsOwn(teamMatches)),
      efficiency: this.efficiency(this.totalPoints(teamMatches), this.totalGames(teamMatches)),
    };
  }

  public static orderBoard(teamMatches: ITeamBoard[]): ITeamBoard[] {
    const condicional = (a: ITeamBoard, b: ITeamBoard) => {
      if (a.totalPoints < b.totalPoints) return 1;
      if (a.totalPoints > b.totalPoints) return -1;
      if (a.goalsBalance < b.goalsBalance) return 1;
      if (a.goalsBalance > b.goalsBalance) return -1;
      if (a.goalsFavor < b.goalsFavor) return 1;
      if (a.goalsFavor > b.goalsFavor) return -1;

      return 0;
    };
    return teamMatches.sort(condicional);
  }
}
