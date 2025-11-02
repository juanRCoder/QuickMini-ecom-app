import express from "express";
import apiRouter from "./routes";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api", apiRouter);

// Middleware para manejar otros errores
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/api`);
});
