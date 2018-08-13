require('dotenv').config() 
const mongoose = require('mongoose')

mongoose.connect(process.env.API_URI)
    .then(() => {
        console.info(
            'House of home API connection established'
        )
    })
    .catch(err => {
        console.error(
            `House of home API connection failure: ${err.message}`
        )
    })

module.exports = mongoose