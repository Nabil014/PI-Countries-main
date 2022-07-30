// import{
//     GET_ALL_COUNTRIES,
//     GET_BY_CONTINENT,
//     BY_ACTIVITY,
//     GET_ACTIVITY,
//     BY_ORDER,
//     BY_POBLATION,
//     GET_NAME_COUNTRY,

// } from '../actions/index'


const initialState = {
    countries: [],
    allCountries: [],
    activity: [],
    allActivities: [],
    detail: []
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
            // const activity = state.activity
            console.log(action.payload)
            const activityFilter = action.payload === 'All' ? allActivities.filter(e=>e.activities.length >0) : 
            allActivities.filter(c => c.activities.find((elem) => elem.name.toLowerCase() === action.payload))
            console.log(activityFilter)
            return {
                ...state,
                countries: activityFilter
            }

        case 'BY_ORDER':
            const stateCountry = state.countries
            const order = action.payload === "AZ" ?
                stateCountry.sort(function(x,y){
                    if(x.name > y.name) return 1
                    if(x.name < y.name) return -1
                    return 0

                }) :
                stateCountry.sort(function(x,y){
                    if(x.name >y.name) return -1
                    if(x.name< y.name) return 1
                    return 0
                })
            return{
                ...state,
                countries: order 
            }
        case 'BY_POBLATION':
            const countries = state.countries
            const filterPoblation = action.payload === 'asc'?
            countries.sort(function(x,y){
                return (x.population-y.population)
            }) :
            countries.sort(function(x,y){
                return (y.population-x.population)
            })
            return {
                ...state,
                countries: filterPoblation
            }
        case 'GET_NAME_COUNTRY':
            return {
                ...state,
                countries: action.payload
            }

        case 'POST_ACTIVITY':
            return{
                ...state
            }
        case 'GET_DETAILS':
            return{
                ...state,
                detail: action.payload
            }
        default: return state
    }
}

export default rootReducer;