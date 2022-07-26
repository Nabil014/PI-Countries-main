export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRY_BY_CONTINENT = 'GET_BY_CONTINENT'
export const BY_ACTIVITY = 'BY_ACTIVITY'
export const GET_ACTIVITY = 'GET_ACTIVITY'

const axios = require('axios');

export function getAllCountries() {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:3001/countries')
        return dispatch({
            type: "GET_ALL_COUNTRIES",
            payload: response.data
        })
    }
}

export function getCountryByContinent(payload) {

    return {
        type: "GET_BY_CONTINENT",
        payload
    }
}

export function postActivity(payload) {
    return async function () {
        try {
            const response = await axios.post('http://localhost:3001/activities', payload)
            return response

        } catch (error) {
            console.log(error)
        }
    }
}

export function byActivity (payload){
    console.log(payload)
    return {
        type: 'BY_ACTIVITY',
        payload
    }
}

export function getActivities() {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/activities')
        return dispatch({
            type: "GET_ACTIVITY",
            payload: response.data
        })
        } catch (error) {
            console.log(error)
        }
        
    }

}