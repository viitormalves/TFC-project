export default interface IMatch extends IGoals {
  id?: number,
  homeTeamId: number,
  awayTeamId: number,
  inProgress?: boolean,
}

export interface IGoals {
  homeTeamGoals: number,
  awayTeamGoals: number,
}
