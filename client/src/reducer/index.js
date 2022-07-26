
const initialState = {
    countries: [],
    allCountries: [],
    activity: [],
    allActivities: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
                allActivities: action.payload

            }
        case 'GET_BY_CONTINENT':
            const allCountries = state.allCountries
            const continentFilter = action.payload === 'All' ? allCountries : allCountries.filter((el) => el.continent === action.payload)

            return {
                ...state,
                countries: continentFilter
            }
        case 'GET_ACTIVITY':
            return {
                ...state,
                activity: action.payload,
            }
        case 'BY_ACTIVITY':
            const allActivities = state.allActivities
            const activity = state.activity
            console.log(action.payload)
            const activityFilter = action.payload === 'All' ? activity : 
            allActivities.filter(c => c.activities.find((elem) => elem.name.toLowerCase() === action.payload))
            console.log(activityFilter)
            return {
                ...state,
                countries: action.payload === 'All' ? allActivities : activityFilter
            }
        default: return state
    }
}

export default rootReducer;