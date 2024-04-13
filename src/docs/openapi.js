import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    failOnErrors: true,
    openapi: "3.0.0",
    info: {
      title: "PDU API Documentation",
      description: "PDU API Documentation",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
      {
        url: "https://pdu-api.web.app",
        description: "Production server",
      },
    ],
  },
  apis: ["./src/router/*.routes.js"],
};

export const docs = swaggerJSDoc(options);
