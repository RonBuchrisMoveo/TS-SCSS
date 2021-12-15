const initialState = {
    teams: [],
}

export function teamReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case 'SET_TEAMS':
            newState = { ...state, teams: action.teams }
            break
        default:
    }
    return newState
}