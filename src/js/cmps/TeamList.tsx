import { ITeam } from '../services/service'

export const TeamList = (props:{teams:ITeam[]}) => {
    const {teams}=props 
    if (!teams) return <div>No Teams</div>
    return (
        <div className='teams-container flex wrap center'>
            {teams.map((team:ITeam, idx: number) => (
                <div className="team flex column center" key={idx}>
                    <div className="team-name">
                        {team['strTeam']}
                    </div>
                    <div className='team-logo'>
                        <img src={team['strTeamBadge']} alt=''/>
                    </div>
                </div>

            ))
            }
        </div>
    )
}
