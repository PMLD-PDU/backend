import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    failOnErrors: true,
    openapi: "3.0.0",
    info: {
      title: "PDU API Documentation",
      version: "1.0.0",
    },
  },
  apis: ["./src/router/*.routes.js"],
};

export const docs = swaggerJSDoc(options);
