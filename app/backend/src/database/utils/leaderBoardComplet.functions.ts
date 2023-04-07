import ITeamBoard from '../interfaces/ILeaderBoard';

export default class LBComplet {
  public static e(points: number, games: number): string {
    const result = ((points / (games * 3)) * 100).toFixed(2);
    return result;
  }

  public static gB(F: number, O: number): number {
    return F - O;
  }

  public static maker(mh: ITeamBoard, ma: ITeamBoard) {
    const obj = { name: mh.name,
      totalPoints: ma.totalPoints + mh.totalPoints,
      totalGames: ma.totalGames + mh.totalGames,
      totalVictories: ma.totalVictories + mh.totalVictories,
      totalDraws: ma.totalDraws + mh.totalDraws,
      totalLosses: ma.totalLosses + mh.totalLosses,
      goalsFavor: ma.goalsFavor + mh.goalsFavor,
      goalsOwn: ma.goalsOwn + mh.goalsOwn,
      goalsBalance: this.gB((ma.goalsFavor + mh.goalsFavor), (ma.goalsOwn + mh.goalsOwn)),
      efficiency: this.e((ma.totalPoints + mh.totalPoints), (ma.totalGames + mh.totalGames)),
    };
    return obj;
  }

  public static board(homeMatches: ITeamBoard[], awayMatches: ITeamBoard[]): ITeamBoard[] {
    const result: ITeamBoard[] = [];
    homeMatches.forEach((mh) => {
      awayMatches.forEach((ma) => {
        if (mh.name === ma.name) {
          const obj = this.maker(mh, ma);
          result.push(obj);
        }
      });
    });
    return result as ITeamBoard[];
  }
}
