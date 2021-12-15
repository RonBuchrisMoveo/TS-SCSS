import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { IRootState } from '../interfaces/interface'
import { ITeam } from '../services/service';


export const TeamDetails = () => {
    const [team, setTeam] = useState<ITeam>()
    const teams = useSelector((state: IRootState) => state.teamModule.teams)
    const { teamname } = useParams<{teamname?:string}>()

    useEffect(() => {
        const team = teams.find((team: any) => (team.strTeam === teamname))
        setTeam(team)
    }, [])

    return (
        <div>
            <div>{team?.strTeam}</div>
            <div>
            <img src={`${team?.strTeamBadge}`} alt="" />
            </div>
        </div>
    )
}

