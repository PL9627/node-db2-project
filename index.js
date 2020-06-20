const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const carRouter = require("./routers/car-router");
const welcomeRouter = require("./routers/welcome-router");

const server = express();
const port = process.env.PORT || 3200;

server.use(helmet());
server.use(express.json());
server.use(cors);

server.use("/", welcomeRouter);
server.use("/cars", carRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

server.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
