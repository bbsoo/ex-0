import express from "express";
import helmet from "helmet";
import logger from "./config/logger";
import swaggerFile from "./config/swagger/swagger-output.json";
import swaggerUi from "swagger-ui-express";
import router from "./routes/index";

const app = express();
const port = 3000;

app.use(helmet());

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerFile)
);

app.get("/", router);

app.listen(port, () => logger.info(`Running on port ${port}`));
