import { ref } from 'vue'
import { defineStore } from 'pinia'

export type Todo = {
  text: string
  done: boolean
}

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([])
  const newTodo = ref('')

  const addTodo = () => {
    if (newTodo.value.trim()) {
      todos.value.push({ text: newTodo.value.trim(), done: false })
      newTodo.value = ''
    }
  }

  const removeTodo = (index: number) => {
    todos.value.splice(index, 1)
  }

  return { todos, newTodo, addTodo, removeTodo }
})
