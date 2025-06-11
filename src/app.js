import express from "express";
import cors from "cors";
import dbConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import handler404 from "./middlewares/handler404.js";

const conexao = await dbConnect();

conexao.on("error", (erro) => {
  console.error("❌ Erro ao conectar ao MongoDB:", erro);
});

conexao.once("open", () => {
  console.log("✅ Conectado ao MongoDB com sucesso!")
});

const app = express();

// Configuração CORS
app.use(cors());

// Middleware para parsing JSON
app.use(express.json());

// Rotas
routes(app);

// Middlewares de erro
app.use(handler404);
app.use(errorHandler);

export default app;