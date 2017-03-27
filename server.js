const restify = require('restify')
const { getPriceRequest }  = require('./lib/priceEstimate')
const PORT = 8080

//checking to make sure I have required env vars
if(
  typeof process.env.CLIENT_ID === 'undefined' ||
  typeof process.env.SERVER_TOKEN === 'undefined' ||
  typeof process.env.SECRET === 'undefined'
) {
  console.log('Looks like you are missing required Environment variables. Please make sure you have set [CLIENT_ID, SERVER_TOKEN, SECRET]')
  process.exit(1)
}

const server = restify.createServer();
server.get('/getpriceto/:location', getPriceRequest);

server.listen(PORT, function() {
  console.log(`Welcome to the simple Restify example using the Uber API! Running on port ${PORT}`);
});
