const express = require("express");
const router = express.Router();

const controller = require("../controllers/job.controller");

router.get("/", controller.getJobs);
router.get("/:id", controller.getJobById);
router.post("/", controller.createJob);
router.patch("/:id", controller.updateJobStatus);
router.delete("/:id", controller.deleteJob);

module.exports = router;