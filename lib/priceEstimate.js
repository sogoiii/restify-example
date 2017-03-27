const restify = require('restify')
const { hostInfo, endpoints } = require('../config')
const { locations } = require('../data/locations')
const queryString = require('querystring')

const uberClient = restify.createJsonClient({
  url: hostInfo.baseUrl,
  headers: {
    'Accept-Language': 'en_US',
    'Content-Type': 'application/json',
    'Authorization': ['Token ', hostInfo.server_token].join('')
  }
});


var uberGet = function(options, callback){
   uberClient.get(options.url, function(err, req, res, data) {
    return callback(err, data);
  });
}


const getPrice = function(options, callback) {
  let url = [endpoints.price, '?' , queryString.stringify(options.queryObj)].join('')
  console.log(`Url --> ${url}`);
  return uberGet({ url }, callback)
}


const getPriceRequest = function(req, res, next) {

  if(typeof locations[req.params.location] === 'undefined') {
    res.send(400, {error: 'Please enter a known landmark [universal, ucla, santaMonicaPier, lax, disneyLand, chineseTheater]'})
  }

  let queryObj = {
    start_latitude: locations.dtla.latitude,
    start_longitude: locations.dtla.longitude,
    end_latitude: locations[req.params.name].latitude,
    end_longitude: locations[req.params.name].longitude
  }

  return getPrice({ queryObj }, function(err, result) {
    res.send(result)
    return next()
  })
}

module.exports = {
  getPriceRequest
}
