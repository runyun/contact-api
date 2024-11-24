const { schema } = require('../models/contact-schema');

const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contact API',
    description: ''
  },
//   host: 'localhost:3000',
  host: 'https://cse341-contact-api.onrender.com',
  schema: ['http', 'https']
};

const outputFile = './swagger-output.json';
const routes = ['./server.js'];

swaggerAutogen(outputFile, routes, doc);