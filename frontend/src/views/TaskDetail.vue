<template>
  <div class="container mt-5">
    <h1 class="mb-4">Actualizar tarea</h1>
    <form @submit.prevent="handleUpdate()">
      <!-- Mostrar el título y la descripción de la tarea seleccionada -->
      <div class="mb-3">
        <label for="title" class="form-label">Título de la tarea a actualzar</label>
        <input
          type="text"
          id="title"
          v-model="currentTask.title"
          class="form-control"
          placeholder="Ingrese el título de la tarea"
        />
      </div>

      <div class="mb-3">
        <label for="description" class="form-label">Descripción de la tarea a actualizar</label>
        <textarea
          id="description"
          v-model="currentTask.description"
          class="form-control"
          placeholder="Ingrese la descripción de la tarea"
          rows="4"
        ></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Actualizar</button>
    </form>

    <button @click="handleDelete()" class="btn btn-danger mt-3" style="margin-left: 10px">
      Borrar
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Task } from '../types/Task'
import { deleteTask, getTask, updateTask } from '../services/taskService'

export default defineComponent({
  name: 'task',
  data() {
    return {
      currentTask: {} as Task, // Aquí se almacenará la tarea que vamos a editar
    }
  },
  methods: {
    async loadTask(id: string) {
      try {
        // Obtener la tarea desde la API usando el ID
        const { data } = await getTask(id)
        this.currentTask = data // Cargar los datos en currentTask
        console.log('Tarea obtenida', data)
      } catch (error) {
        console.error(error)
      }
    },
    async handleUpdate() {
      try {
        if (typeof this.$route.params.id === 'string') {
          // Actualizar la tarea con los datos modificados
          await updateTask(this.$route.params.id, this.currentTask)
          this.$router.push('/') // Redirigir a la lista de tareas
        }
      } catch (error) {
        console.error(error)
      }
    },
    async handleDelete() {
      try {
        if (typeof this.$route.params.id === 'string') {
          await deleteTask(this.$route.params.id)
          this.$router.push('/') // Redirigir a la lista de tareas
        }
      } catch (error) {
        console.error(error)
      }
    },
    mounted() {
      if (typeof this.$route.params.id === 'string') {
        // Cargar la tarea al montar el componente
        this.loadTask(this.$route.params.id)
      }
    },
  },
})
</script>
