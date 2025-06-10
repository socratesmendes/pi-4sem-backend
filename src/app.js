import express from "express";
import dbConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";

const conexao = await dbConnect();

conexao.on("error", (erro) => {
  console.error("❌ Erro ao conectar ao MongoDB:", erro);
});

conexao.once("open", () => {
  console.log("✅ Conectado ao MongoDB com sucesso!")
});

const app = express();
routes(app);
app.use(errorHandler);

export default app;