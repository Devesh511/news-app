// const express = require('express');
// const path = require('path');
// const hbs = require('hbs');
// require('dotenv').config()
// const port = process.env.PORT || 3000;

// const app = express()
// app.use(express.json());
const AstrologyAPI = require('./api')
const API_KEY = 'xrp7NPZMKRQ3U8nmHM5UMXu2XwBKYXei';
const asyncApiCall = async () => {
    const response = await AstrologyAPI.getCompatibility('election','1')
    console.log(response.data.response.docs)
    // console.log(response.data)
}

asyncApiCall()