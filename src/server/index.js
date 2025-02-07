var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const dotenv = require('dotenv');
const { error } = require('console');
dotenv.config();

const app = express();

app.use(express.static('dist'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
console.log(__dirname);



app.get('/', function (req, res) {
    res.send("This is the server API page, you may access its services via the client app.");
});


// POST Route

app.post('/api',async (req,res) => {
    var apikey = process.env.API_KEY;
   var inputUrl = req.body.url;

//console.log("The URL Test:", Inputurl); // Check if the URL  logged
 
if(!inputUrl){
    return res.status(400).json({message:'url is required'}) // missing url
}

try{

    const apiurl = `https://api.meaningcloud.com/sentiment-2.1?key=${apikey}&url=${encodeURIComponent(Inputurl)}&lang=en`;
    const fetch = (await import('node-fetch')).default;
    const response = await fetch(apiurl);

    if(!response.ok){
        throw new Error(`HTTP error status: ${response.status}`);
    }


    const apidata = await response.json();
    res.send(apidata);


}catch(e){
  res.status(500).json({message:'failed to fetch data',error:e.message});
}

});


// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


