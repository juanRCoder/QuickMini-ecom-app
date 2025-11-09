import express from "express";
import cors from "cors"
import * as dotenv from "dotenv";
import apiRouter from "@server/routes";
import { errorHandler } from "@server/middlewares/errorHandler.middleware";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json());
app.use("/api", apiRouter);

// Middleware para manejar otros errores
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/api`);
});
