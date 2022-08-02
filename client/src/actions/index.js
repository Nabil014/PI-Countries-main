import Swal from 'sweetalert'

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_BY_CONTINENT = 'GET_BY_CONTINENT'
export const BY_ACTIVITY = 'BY_ACTIVITY'
export const GET_ACTIVITY = 'GET_ACTIVITY'
export const BY_ORDER = 'BY_ORDER'
export const BY_POBLATION = 'BY_POBLATION'
export const GET_NAME_COUNTRY = 'GET_NAME_COUNTRY'
export const GET_DETAILS = 'GET_DETAILS'
export const ERRORS = 'ERRORS'

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
// CON PROMISES
// export const getAllCountries = () => {
//   return function (dispatch) {
//     axios.get("http://localhost:3001/countries")
//       .then((response) => {
//         dispatch({
//           type: 'GET_ALL_COUNTRIES',
//           payload: response.data,
//         }); 
//       });
//   };
// };
    

  


export function getByContinent(payload) {

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

export function byActivity(payload) {
    return {
        type: 'BY_ACTIVITY',
        payload
    }
}

export function byOrder(payload) {
    return {
        type: 'BY_ORDER',
        payload
    }
}
export function byPoblation(payload) {
    return {
        type: 'BY_POBLATION',
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

export function getNameCountry(name) {
    return async function (dispatch) {
        try {
            let response = await axios.get('http://localhost:3001/countries?name=' + name)
            return dispatch({
                type: 'GET_NAME_COUNTRY',
                payload: response.data
            })
        } catch (error) {
            // alert('Pais no encontrado')
            Swal('Pais no encontrado','','error')
        }
    }
}

export function getDetail (id){
    return async function(dispatch){
       try {
        let response = await axios.get('http://localhost:3001/countries/'+id)
        return dispatch({
            type: 'GET_DETAILS',
            payload: response.data
        })
       } catch (error) {
        console.log(error)
       }
        
    }
}
// USANDO FETCH
// export const getDetail = (id) => {
//     return async (dispatch) => {
//         return fetch("http://localhost:3001/countries/" + id)
//       .then((response) => response.json())
//       .then((response) => {
//          dispatch({
//           type: 'GET_DETAILS',
//           payload: response
//         })
//       });
//   };
// };

