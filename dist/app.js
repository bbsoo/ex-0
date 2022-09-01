"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const logger_1 = __importDefault(require("./logger"));
const swagger_output_json_1 = __importDefault(require("./swagger-output.json"));
const swaggerUi = require("swagger-ui-express");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, helmet_1.default)());
//Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger_output_json_1.default, { explorer: true }));
logger_1.default.info("It's PINO test");
logger_1.default.error("It's PINO test");
logger_1.default.warn("It's PINO test");
logger_1.default.fatal("It's PINO test");
/*
 #swagger.tags = ['/']
 #swagger.summary = '유저 phone 수정'
 #swagger.description = '유저 phone을 업데이트한다.'
 #swagger.security = [{
     "bearerAuth": []
 }]
 #swagger.requestBody = {
      required: true,
      content: {
          "application/json": {
              schema: {
                "type": "object",
                  "properties": {
                    "phone": {
                      "type": "string",
                      "required": false
                    }
                  }
              },
              example: {
                  "phone": "010-1111-2222",
              },
          },
      }
  }
  #swagger.responses[200] = {
      description: "유저 phone 수정 완료",
      content: {
          "application/json": {
              schema: {
                  "data": {
                      "phone": "010-0000-0000",
                  }
              },
              example: {
                  "data": {
                      "phone": "010-1111-2222",
                  }
              },
          }
      }
  }
*/
app.get("/", (_, res) => {
    res.status(200).send("OK!");
});
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=app.js.map