
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getById = async (req, res, next) => {
    const { id } = req.params // si llega el id por params
    try {
        const response = await Country.findByPk(id.toUpperCase())
        if (!response) {
            res.status(404).send(`El ID =${id} no corresponde a un pais`)
        }
        res.json(response)
    } catch (error) {
        next(error)
    }

}

const getCountry = async (req, res, next) => {
    const { name } = req.query // si llega el name por query
    try {
        if(!name){
            const response = await Country.findAll({
            })
            res.status(201).json(response);
        }
        const response = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: "%" + name + "%", 
                }
            }
        });
        if (response.length === 0) {
            res.status(404).send(`El nombre ${name}  no corresponde a ningun pais`)
        }
        res.json(response)
    } catch (error) {
        next(error)
    }

}
// const getCountries = async (req, res, next) => {
//     try {
//         const response = await Country.findAll({
//         })
//         res.status(201).json(response);

//     } catch (error) {
//         next(error)
//     }
// }

module.exports = {
    getById,
    // getCountries,
    getCountry
}