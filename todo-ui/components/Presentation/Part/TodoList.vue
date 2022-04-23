<template>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-left text-h5">
          task
        </th>
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
          class="text-h6"
          :class="isLineThrough(index)"
        >
          {{ todo.title }}
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
    const { todos } = inject(todoKey) as todoStore

    // 消し取り線の表示処理
    const isLineThrough = (index: number) => (
      todos[index].isDone ? "text-decoration-line-through" : "none"
    )

    return { todos, isLineThrough }
  },
})
</script>
