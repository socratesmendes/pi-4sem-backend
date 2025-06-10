import express from "express";
import data from "./dataRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("PI 4º semestre"));

    app.use(express.json(), data)
};

export default routes;