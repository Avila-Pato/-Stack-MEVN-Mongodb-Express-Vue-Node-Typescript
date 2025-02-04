import { Router } from "express";
const router = Router();

router.get("/tasks", (req, res) => {
  res.send("Getting tasks");
});

router.post("/tasks", (req, res) => {
  res.send("Creating tasks");
});

router.get("/tasks/:id", (req, res) => {
  res.send("get 1 tasks");
});

router.delete("/tasks/:id", (req, res) => {
  res.send("deleted tasks");
});

router.put("/tasks/:id", (req, res) => {
  res.send("creating tasks");
});

export default router;
