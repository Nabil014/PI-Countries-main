const axios = require('axios') //instalo e importo axios
const { Country } = require("../db");

const regularName = (str)=>{
    return str.normalize("NFC").replace(/[\u0300-\u036fÅ]/g, "")
}

const loadDB = async () => {
    const api = await axios.get("https://restcountries.com/v3/all")
    const data = api.data.map((elem) => {
        return {
            id: elem.cca3,
            name: regularName(elem.name.common),
            flag: elem.flags[1],
            continent: elem.continents[0],
            subregion: elem.subregion,
            capital: elem.capital ? elem.capital[0] : "No tiene capital",
            population: elem.population,
            area:elem.area
        }
    })
    await Country.bulkCreate(data) // lleno la BD con todos los paises
    console.log("Se ingresaron todos los paises")
}
module.exports = loadDB; // exporto la funcion para llamarla desde index