<template>
  <div>
    <h1>Detalles de la Tarea</h1>
    <form @submit.prevent="handleUpdate()">
      <!-- Mostrar el título y la descripción de la tarea seleccionada -->
      <input type="text" v-model="currentTask.title" placeholder="" />
      <textarea v-model="currentTask.description" placeholder="Descripción de la tarea"></textarea>
      <button>Actualizar</button>
    </form>

    <button @click="handleDelete()">Borrar</button>
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
