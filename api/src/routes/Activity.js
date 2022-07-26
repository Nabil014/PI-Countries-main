
const { Activity,Country } = require('../db')

const activityPost = async (req, res, next) => {
    const { name, difficulty, duration, season, countryId } = req.body
    
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
            return res.status(200).json(activity)
        }
         
        
    } catch (error) {
        console.log(error);
        return res.send("Faltan datos")
    }
}

const getActivities = async(req,res)=>{
    const activities = await Activity.findAll({include: Country});
    res.status(200).send(activities)
}

module.exports = { activityPost,getActivities }