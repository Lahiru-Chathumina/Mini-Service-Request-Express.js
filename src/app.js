const express = require("express");
const cors = require("cors");
const app = express();

const jobRoutes = require("./routes/job.routes");
const errorMiddleware = require("./middleware/error.middleware");

app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobRoutes);

// global error handler
app.use(errorMiddleware);

module.exports = app;