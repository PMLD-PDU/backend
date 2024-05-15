import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    failOnErrors: true,
    openapi: "3.0.0",
    info: {
      title: "PDU API Documentation",
      description: "PDU Backend API Documentation",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
      {
        url: "https://bepdu.aliifam.com",
        description: "Production server",
      },
    ],
    security: [
      {
        JWTAuth: [],
      },
      {
        sensorKeyAuth: [],
      },
    ],
    components: {
      securitySchemes: {
        JWTAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
        sensorKeyAuth: {
          type: "apiKey",
          in: "header",
          name: "x-well-secret-token",
        },
      },
    },
  },
  apis: ["./src/router/*.routes.js"],
};

export const docs = swaggerJSDoc(options);
