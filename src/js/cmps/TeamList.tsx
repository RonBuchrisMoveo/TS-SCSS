import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTeams } from '../actions/team.action';
import { ITeam } from '../services/service'

export const TeamList = (props: { teams: ITeam[] }) => {
    const dispatch = useDispatch()
    const { teams }= props

    useEffect(() => {
        dispatch(setTeams(teams))
    }, [])

    if (!teams) return <div>No Teams</div>
    return (
        <div className='teams-container flex wrap center'>
            {teams.map((team: ITeam, idx: number) => (
                <div className="team flex column center" key={idx}>
                    <Link to={`/details/${team['strTeam']}`} >
                        {/* <Link key={idx} to={{ pathname: `/details/${team['strTeam']}`, state: { team } }} > */}
                        <div className="team-name">
                            {team['strTeam']}
                        </div>
                        <div className='team-logo'>
                            <img src={team['strTeamBadge']} alt='' />
                        </div>
                </Link>
                    </div>

            ))
            }
        </div>
    )
}
