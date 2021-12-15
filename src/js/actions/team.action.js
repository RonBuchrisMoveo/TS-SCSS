export function setTeams(teams) {
    return dispatch => {
        try {
            dispatch({
                type: 'SET_TEAMS',
                teams
            })
        } catch (err) {
            console.log('Cannot set teams', err)
        }
    }
}