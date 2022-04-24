<template>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-left text-h6">
          task list
        </th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(todo, index) in todos"
        :key="todo.id"
      >
        <td>
          <v-checkbox v-model="todo.isDone" />
        </td>
        <td
          class="text-h7"
          :class="isLineThrough(index)"
        >
          {{ todo.title }}
        </td>
        <td>
          <v-btn v-on:click="() => todoDelete(index)">delete</v-btn>
        </td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script lang="ts">
import { defineComponent, inject } from '@vue/composition-api'
import { todoKey } from '~/compositions/keys/todoKey'
import { todoStore } from '~/compositions/useTodo'

export default defineComponent({
  setup() {
    // 配信されている状態を受信
    const { todos, todoDelete } = inject(todoKey) as todoStore

    // 消し取り線の表示処理
    const isLineThrough = (index: number) => (
      todos[index].isDone ? "text-decoration-line-through" : "none"
    )

    return {
      todos,
      todoDelete,
      isLineThrough
    }
  },
})
</script>
