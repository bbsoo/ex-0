import express from "express";
import helmet from "helmet";
import logger from "./logger";
import swaggerFile from './swagger-output.json';
const swaggerUi = require("swagger-ui-express");


const app = express();
const port = 3000;


app.use(helmet());
//Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile, { explorer: true }));

logger.info("It's PINO test");
logger.error("It's PINO test");
logger.warn("It's PINO test");
logger.fatal("It's PINO test");



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
