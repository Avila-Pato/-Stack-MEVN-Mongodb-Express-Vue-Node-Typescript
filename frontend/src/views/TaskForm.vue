<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { Task } from '../types/Task'
import { createTask } from '../services/taskService'

const router = useRouter()
const task = ref<Task>({
  title: '',
  description: '',
  id: null,
  done: false,
})

const saveTask = async () => {
  try {
    const res = await createTask(task.value)
    router.push({ name: 'tasks' })
    console.log('tarea creada correctamente', res)
  } catch (error) {
    console.error('Error al guardar la tarea:', error)
  }
}
</script>

<template>
  <div>
    <h1 class="card-title my-3 text-center">Create a Task</h1>
    <form @submit.prevent="saveTask">
      <input
        class="form-control mb-3"
        type="text"
        placeholder="Escribe un título"
        v-model="task.title"
        autofocus
      />
      <textarea
        class="form-control mb-3"
        rows="3"
        placeholder="Escribe una descripción"
        v-model="task.description"
      ></textarea>
      <button class="btn btn-primary w-100" :disabled="!task.title || !task.description">
        Guardar
      </button>
    </form>
  </div>
</template>
