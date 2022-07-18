
const { Activity } = require('../db')

const activityPost = async (req, res, next) => {
    const { name, difficulty, duration, season, countryId } = req.body
    // if (!name || !difficulty||!duration||!season|| countryId.length ===0) {
    //     console.log("Falta enviar datos")
    //    res.status(404).send("Falta enviar datos")
    // }
    try {
        if (name || difficulty || duration || season || countryId.length === 3) {
            const [activity, created] = await Activity.findOrCreate({
                where: {
                    name,
                    difficulty,
                    duration,
                    season
                }
            })
            console.log(created)
            await activity.setCountries(countryId)
            return res.json(activity)
        }
         
        
    } catch (error) {
        console.log(error);
        return res.send("Faltan datos")
    }

}

module.exports = { activityPost }