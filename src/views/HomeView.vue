<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'
import { storeToRefs } from 'pinia'

const todoStore = useTodoStore()
const { newTodo, todos } = storeToRefs(todoStore)
const { addTodo, removeTodo } = todoStore
</script>

<template>
  <div class="">
    <h1 class="text-2xl font-bold mb-4 text-[#00bd7e]">Todo List</h1>
    <div class="flex gap-2 mb-4">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        class="border p-2 rounded w-full text-black outline-none"
        placeholder="Add new"
      />
      <button
        @click="addTodo"
        class="bg-[#00bd7e] hover:bg-[#236d54] transition-all text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
    <ul>
      <li
        v-for="(todo, index) in todos"
        :key="index"
        class="flex justify-between items-center border-b py-2 select-none"
      >
        <label class="flex items-center space-x-2 cursor-pointer">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ 'line-through text-[#00bd7e88]': todo.done }">{{ todo.text }}</span>
        </label>
        <button @click="removeTodo(index)" class="text-red-500">Delete</button>
      </li>
    </ul>
  </div>
</template>
