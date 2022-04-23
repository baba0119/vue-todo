<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, provide } from '@vue/composition-api'
import useTodo from '@/compositions/useTodo'
import { todoKey } from '~/compositions/keys/todoKey'

export default defineComponent({
  setup() {
    provide(todoKey, useTodo())
    return {}
  },
})
</script>
