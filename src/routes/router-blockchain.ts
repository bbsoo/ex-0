import { Router } from "express";
import logger from "../config/logger";

const test = async (req, res) => {
    logger.info('enter bc');
}



export = {
    test
};