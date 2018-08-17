const express = require('express');
const app = express();
var fetch = require("node-fetch");
var api_key = require('./keys')

app.set('port', (process.env.PORT || 3001));

/*use of CORS*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* Use this code below for production build*/
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

/*this is the GET protocol for serving up json query include ?q=*/
app.get('/api', function(req, res, next) {
    let serach_term = 'photos'
    let search_term = req.query.search;
    let url = 'http://api.flickr.com/services/feeds/photos_public.gne?api_key=' + api_key + '&tags=' + search_term + '&format=json&nojsoncallback=1';
    fetch(url)
    .then(function (response){
      response.json().then(function(json){
        res.json(json);
   })
  }).catch(function (error) {
      res.send(json);
  })
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
