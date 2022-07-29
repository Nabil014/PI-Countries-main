
const { Activity,Country } = require('../db')

const activityPost = async (req, res, next) => {
    const { name, difficulty, duration, season, countries } = req.body
    
    try {
        if (name || difficulty || duration || season || countries.length === 3) {
            const [activity, created] = await Activity.findOrCreate({
                where: {
                    name,
                    difficulty,
                    duration,
                    season
                },
                attributes: {
                    exclude: ['updatedAt', 'createdAt'],
                }
            })
            // console.log(created)
            await activity.setCountries(countries)
            return res.status(200).json(activity)
        }
         
        
    } catch (error) {
        console.log(error);
        next(error)
    }
}

const getActivities = async(req,res)=>{
    const activities = await Activity.findAll({include: Country});
    res.status(200).send(activities)
}

module.exports = { activityPost,getActivities }