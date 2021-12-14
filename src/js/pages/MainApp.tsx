import React, { useEffect, useState } from 'react'
import { TeamList } from '../cmps/TeamList'
import { ILeague, ITeam, leagueService } from '../services/service'

export const MainApp = () => {
    const [leagues, setLeagues] = useState<ILeague[]>([])
    const [teams, setTeams] = useState<ITeam[]>([])

    useEffect(() => {
        (async ()=> {
            const allLeagues:ILeague[] = await leagueService.getLeagues();
            setLeagues(allLeagues)
        })();
    }, [])

    const getTeams = async (league: String) => {
        const teams:ITeam[] = await leagueService.getTeams(league)
        setTeams(teams)
    }

    return (
        <div className='main-app leagues-container flex column '>
            <div className="leagues-name flex space-between">
                {leagues.map((league, idx) => (
                    <div className='league flex center btn' onClick={() => getTeams(league['strLeague'])} key={idx}>
                        {league['strLeague']}
                    </div>)
                )}
            </div>
            <div className="teams-container">
                {teams.length ? <TeamList teams={teams} /> : ''}
            </div>
        </div>
    )
}
