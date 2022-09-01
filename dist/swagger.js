const swaggerAutogen = require("swagger-autogen")();
const doc = {
    info: {
        version: "1.0.0",
        title: "Swagger Test",
        description: "Test Description", // by default: ''
    },
    host: "localhost:3000",
    basePath: "/",
    // schemes: [], // by default: ['http']
    // consumes: [], // by default: ['application/json']
    // produces: [], // by default: ['application/json']
    tags: [
        // by default: empty Array
        {
            name: "",
            description: "", // Tag description
        },
        // { ... }
    ],
    securityDefinitions: {},
    definitions: {},
    components: {}, // by default: empty object (OpenAPI 3.x)
};
const outputFile = "./src/swagger-output.json";
const endpointsFiles = ["./src/app.ts"];
/* NOTE: if you use the express Router, you must pass in the
    'endpointsFiles' only the root file where the route starts,
    such as index.js, app.js, routes.js, ... */
swaggerAutogen(outputFile, endpointsFiles, doc);
//# sourceMappingURL=swagger.js.map