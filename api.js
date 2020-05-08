// const express = require('express');
const axios = require('axios');

// API specific settings.
const API_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=xrp7NPZMKRQ3U8nmHM5UMXu2XwBKYXei&fl=pub_date&fl=headline&fl=abstract&fl=web_url&fl=source&begin_date=20110101';


module.exports = {
    getCompatibility: (query,page) => axios({
        method:"GET",
        url : API_URL,
        params: {
            q : query,
            page : page
        }
    })
}
