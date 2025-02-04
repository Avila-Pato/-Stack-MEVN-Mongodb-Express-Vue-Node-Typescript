import { Router } from "express";
import Task from "../model/Task";

const router = Router();

router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

//crear
router.post("/tasks", async (req, res) => {
  const { title, description } = req.body;
  const newTask = new Task({ title, description });
  const savesTask = await newTask.save();
  res.json(savesTask);
});

//Obtener por id
router.get("/tasks/:id", async (req, res) => {
  const tasks = await Task.findById(req.params.id);
  res.json();
});

//Borrar delete
router.delete("/tasks/:id", async (req, res) => {
  const tasks = await Task.findByIdAndDelete(req.params.id);
  res.json();
});

//actualizar
router.put("/tasks/:id", async (req, res) => {
  const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updateTask);
});

export default router;
