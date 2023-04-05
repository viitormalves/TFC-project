export default interface ITeamBoard {
  name?: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsBalance: number
  goalsFavor: number,
  goalsOwn: number,
  efficiency: string
}
