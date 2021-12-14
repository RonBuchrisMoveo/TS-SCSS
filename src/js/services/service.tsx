import axios from 'axios'

export const leagueService = {
    getLeagues,
    getRandomInt,
    getTeams,
}

export interface ILeague {
       idLeague: String,
    strLeague: String,
    strLeagueAlternate: String,
    strSport: String,
}

export interface ITeam {
    strTeamBadge: string,
    strTeam: String,
}

async function getLeagues() {
    const { data } = await axios.get('https://www.thesportsdb.com/api/v1/json/2/all_leagues.php')
    const leagues: ILeague[] = data.leagues
    const footballLeagues: ILeague[] = getLeaguesBySport(leagues)
    const fiveLeagues = _getFiveLeagues(footballLeagues)
    return fiveLeagues
}

function getLeaguesBySport(leagues: ILeague[]) {
    const footballLeagues: ILeague[] = leagues.filter((league) =>league.strSport==='Soccer' )
    return footballLeagues

}

function _getFiveLeagues(leagues: ILeague[]): ILeague[] {
    const fiveLeagues:ILeague[] = [];
    for (let i = 0; i < 5; i++) {
        const num: number = getRandomInt(0, leagues.length)
        const league:ILeague = leagues[num]
        fiveLeagues.push(league)
        leagues.splice(num, 1)
    }
    return fiveLeagues

}


async function getTeams(league: String) {
    const { data } = await axios.get(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${league}`)
    return data.teams

}

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}