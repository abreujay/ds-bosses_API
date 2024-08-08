const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Bosses Dark Souls 1 API',
        version: '1.0.0',
        description: 'API para obter informações sobre os bosses de Dark Souls 1',
      },
      servers: [
        {
          url: 'http://localhost:3000',
        },
      ],
    },
    apis: ['./swagger-docs.js'], 
  };
  
  const specs = swaggerJsDoc(options);
  
  module.exports = {
    swaggerUi,
    specs,
  };