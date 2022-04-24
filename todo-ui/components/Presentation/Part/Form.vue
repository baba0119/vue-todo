<template>
  <v-row
    align="center"
    justify="start"
  >
    <v-btn v-on:click="register">追加</v-btn>
    <v-col>
      <v-text-field
        label="Todo title"
        v-model="title"
        :counter="60"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from '@vue/composition-api'
import { todoKey } from '~/compositions/keys/todoKey'
import { todoStore } from '~/compositions/useTodo'

export default defineComponent({
  setup() {
    // 配信されている状態を受信
    const { todoRegister } = inject(todoKey) as todoStore

    // form内のテキストの格納
    const title = ref("")

    const register = () => {
      todoRegister(title.value)
      title.value = ""
    }

    return {
      title,
      register
    }
  },
})
</script>
