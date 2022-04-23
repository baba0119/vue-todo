<template>
  <v-row
    align="center"
    justify="start"
  >
    <v-btn>追加</v-btn>
    <v-col>
      <v-text-field
        label="Todo title"
        :counter="60"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, inject } from '@vue/composition-api'
import { todoKey } from '~/compositions/keys/todoKey'
import { todoStore } from '~/compositions/useTodo'

export default defineComponent({
  setup() {
    // 配信されている状態を受信
    const { todos } = inject(todoKey) as todoStore
  },
})
</script>
