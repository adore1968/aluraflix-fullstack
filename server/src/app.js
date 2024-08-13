import express from "express";
import cors from "cors";
import morgan from "morgan";
import categoriasRoutes from "./routes/categorias.routes.js";
import destacadosRoutes from "./routes/destacados.routes.js";
import videosRoutes from "./routes/videos.routes.js";
import apiRoutes from "./routes/api.routes.js";

const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());

app.use(morgan("dev"));

app.use("/api", apiRoutes);

app.use("/api/categorias", categoriasRoutes);

app.use("/api/destacados", destacadosRoutes);

app.use("/api/videos", videosRoutes);

export default app;
