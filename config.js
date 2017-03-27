module.exports = {
  hostInfo: {
    baseUrl: 'https://api.uber.com',
    clientId: process.env.CLIENT_ID,
    server_token : process.env.SERVER_TOKEN,
    secret : process.env.SECRET
  },
  endpoints: {
    products: '/v1/products?',
    time: '/v1/estimates/time?',
    price: '/v1.2/estimates/price'
  }
}
