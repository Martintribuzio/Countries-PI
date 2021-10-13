const { TouristActivity, Op } = require('../db.js')

const getActivities = async (req, res) => {
  try {
    const activities = await TouristActivity.findAll()
    res.status(200).json(activities.map(el => el.toJSON()))
  } catch (error) {
    res.json(error.message)
  }
}

module.exports = getActivities
