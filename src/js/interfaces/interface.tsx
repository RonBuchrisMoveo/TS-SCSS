export interface ITeamName{
    teamname?:String
}

export interface IRootState {
    [x: string]: any;
    teams: Object
  }