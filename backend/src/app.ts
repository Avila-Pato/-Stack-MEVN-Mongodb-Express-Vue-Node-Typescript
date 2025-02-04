// src/app.ts
import express from "express";
import morgan from "morgan";
import cors from "cors";
import taskRoutes from "./routes"; // Importa las rutas

const app = express();

// Middlewares
app.use(morgan("dev")); // Registro de solicitudes HTTP
app.use(cors()); // Habilitar CORS
app.use(express.json()); // Parsear solicitudes JSON

// Rutas
app.use("/api", taskRoutes); // Prefijo "/api" para todas las rutas

export default app; // Exporta la instancia de Express
