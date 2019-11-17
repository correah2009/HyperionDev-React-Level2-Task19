//create the server
const express = require('express');
const app = express();
const fetch = require("node-fetch");
const dotenv = require('dotenv');
const helmet = require('helmet')

const Util = require('./util/utilities');

//Process file
dotenv.config();

//parse body of requests req
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//use helmet
app.use(helmet())


//post (/search)
app.post('/search', (req, res) => {

    console.log("Searching...");
    //if type then values are "channel" "playlist" "video"
    //if video duration videoDuration "long" "medium" "short"
    //fetch inside the URL api
    // req.search_input

    //create the query
    console.log("request.body", req.body);
    const query = {
        q: req.body.q,
        type: req.body.type,
        key: process.env.API_KEY,
        part: "snippet",
        maxResults: "10"
    }

    //build the url query
    console.log("query", Util.encodeQueryData(query));
    const url = `https://www.googleapis.com/youtube/v3/search?${Util.encodeQueryData(query)}`;
    console.log("url",url);
    fetch(url, {
        method: 'GET', 
        headers: {
        'Content-Type': 'application/json',
 //     'Authorization' : `Bearer ${process.env.ACCESS_TOKEN}`
        }
    }).then(youtube => youtube.json())
    .then(data => res.send(data))
    .catch(error => console.log(error));
    
    //with response headers and errors

})

app.use(function(err, req, res, next) {
    console.log(err.stack)
    res.status(500).send('Something broke!')
})


//body parsers

//helmet for security

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});