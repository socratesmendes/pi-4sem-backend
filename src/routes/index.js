import express from "express";
import data from "./dataRoutes.js";
import analytics from "./analyticsRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Smart Energy API - Análise de Consumo Energético"));
    
    app.use(express.json(), data, analytics);
};

export default routes;