require('dotenv').config();

module.exports = {
    API_KEY: process.env.API_KEY || 'c2d4c4987ea5526041859218dad27eb0',
    API_URL: process.env.API_URL || 'http://api.weatherstack.com/current',
    DEFAULT_CITY: process.env.DEFAULT_CITY || 'Москва'
}