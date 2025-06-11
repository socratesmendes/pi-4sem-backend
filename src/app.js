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
const corsOptions = {
  origin: [
    'http://localhost:3001',
    'http://127.0.0.1:3001',
    'http://localhost:3000',
    'http://127.0.0.1:3000'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Middleware para CORS
app.use(cors(corsOptions));

// Middleware para parsing JSON
app.use(express.json());

// Rotas
routes(app);

// Middlewares de erro
app.use(handler404);
app.use(errorHandler);

export default app;