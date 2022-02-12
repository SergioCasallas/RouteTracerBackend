const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { urlencoded, json } = require("body-parser");
const cors = require("cors");

// !Server
const server = express();

// ! Base de datos

const { connection } = require("./db/db");

// !Middleware

server
  .use(
    morgan((tokens, req, res) => {
      const morganConfig = [
        `Remote Address: ${req.ip}` || req.connection.remoteAddress,
        `Method: ${tokens.method(req, res)}`,
        `URL: ${tokens.url(req, res)}`,
        `Params: ${JSON.stringify(req.params)}`,
        `Body: ${JSON.stringify(req.body)}`,
        `Status: ${tokens.status(req, res)}`,
        `Response Time: ${tokens["response-time"](req, res)}ms`,
      ];
      return morganConfig.join(` * `);
    })
  )
  .use(helmet())
  .use(cors())
  .use(urlencoded({ extended: true, limit: "50mb" }))
  .use(json({ limit: "50mb" }));
require("dotenv").config();

// ! Routes

server.use("/", require("./routes/Prueba"));

server.use("/delivery", require("./routes/Delivery"));
server.use("/collection", require("./routes/Collection"));

// !Listen
const PORT = process.env.EXPRESSPORT || 8001;
server.listen(PORT, () => {
  console.log(`listen in port ${PORT}`);
});
