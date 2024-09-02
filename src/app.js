import express from "express";
import exphbs from "express-handlebars"; //motor de template html, todavía no se usa
import positionsRouter from "./routes/positions.router.js";

const app = express();
const PUERTO = 5055; // cambiar PORT segun protocolo/gps

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"));

// Express-Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

// Rutas
app.use("/", positionsRouter);

// Iniciamos servidor
app.listen(PUERTO, () => {
  console.log(`Escuchando a 'TraccarClient' en el puerto ${PUERTO}.`);
});
