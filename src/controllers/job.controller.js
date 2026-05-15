const Job = require("../models/JobRequest");
const ApiError = require("../utils/ApiError");
const asyncHandler = require("../middleware/asyncHandler");

// GET all jobs
exports.getJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find(req.query);
  res.json(jobs);
});

// GET single job
exports.getJobById = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  res.json(job);
});

// CREATE job
exports.createJob = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    throw new ApiError(400, "Title and Description required");
  }

  const job = await Job.create(req.body);
  res.status(201).json(job);
});

// UPDATE status only
exports.updateJobStatus = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  job.status = req.body.status || job.status;
  await job.save();

  res.json(job);
});

// DELETE job
exports.deleteJob = asyncHandler(async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id);

  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  res.json({ message: "Deleted successfully" });
});