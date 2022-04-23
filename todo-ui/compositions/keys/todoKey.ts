import { InjectionKey } from '@nuxtjs/composition-api'
import { todoStore  } from '../useTodo'

// 配信する際に使うキー
export const todoKey: InjectionKey<todoStore> = Symbol('todoStore')