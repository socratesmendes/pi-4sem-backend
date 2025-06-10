import express from "express";
import DataController from "../controllers/dataController.js";

const routes = express.Router();

routes.get("/data", DataController.listData);
routes.get("/data/period", DataController.findDataByDateRange);
routes.get("/data/stats", DataController.getDataStatsByDateRange);
routes.get("/data/:id", DataController.findDataById);
routes.post("/data", DataController.createData);
routes.put("/data/:id", DataController.updateDataById);
routes.delete("/data/:id", DataController.deleteDataById);

export default routes;