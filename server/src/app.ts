import express from "express";
import apiRouter from "./routes";
import { errorHandler } from "./middlewares/ErrorHandler.middleware";

const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.json());
app.use("/api", apiRouter);

// Middleware para manejar otros errores
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
