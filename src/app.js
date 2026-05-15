const express = require("express");
const app = express();

const jobRoutes = require("./routes/job.routes");
const errorMiddleware = require("./middleware/error.middleware");

app.use(express.json());

app.use("/api/jobs", jobRoutes);

// global error handler
app.use(errorMiddleware);

module.exports = app;