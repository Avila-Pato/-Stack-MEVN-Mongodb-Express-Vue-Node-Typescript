import { type Task } from '@/types/Task'
import { type AxiosResponse } from 'axios'
import axios from '@/utils/axios'

export const getTasks = async (): Promise<AxiosResponse<Task>> => await axios.get('/tasks')

export const getTask = async (id: string): Promise<AxiosResponse<Task>> =>
  await axios.get(`/tasks/${id}`)

export const createTask = async (task: Task): Promise<AxiosResponse<Task>> =>
  await axios.post('/tasks', task)

export const updateTask = async (id: string, newTask: Task): Promise<AxiosResponse<Task>> =>
  await axios.put(`/tasks/${id}`, newTask)

export const deleteTask = async (id: string): Promise<AxiosResponse<Task>> =>
  await axios.delete(`/tasks/${id}`)
