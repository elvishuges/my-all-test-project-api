import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import databaseConnection from "./config/databaseConnection.js";
import router from "./routes/route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;
const allowedOrigins = process.env.CORS_ALLOWED_ORIGINS?.split(",") || [];

app.use(
  cors({
    origin: function (origin, callback) {
      // Permite requisições sem origem (ex: Postman) ou que estejam na lista
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // se precisar enviar cookies/autenticação
  })
);
//databaseConnection(DATABASE_URL, DATABASE_NAME);
app.use(express.json());
app.use("/api", express.static("uploads"));
app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Server Running Successfully");
});

app.listen(PORT, () => {
  console.log(`Server Listening at http://localhost:${PORT}`);
});
