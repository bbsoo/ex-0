import express from "express";
import helmet from "helmet";
import logger from "./logger";
import swaggerFile from "./swagger-output.json";
import swaggerUi from "swagger-ui-express";

const app = express();
const port = 3000;

app.use(helmet());

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerFile, { explorer: true })
);

app.get("/", (_, res) => {
    res.status(200).send("OK!");
});

app.listen(port, () => logger.info(`Running on port ${port}`));
