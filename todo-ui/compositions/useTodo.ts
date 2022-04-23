import { reactive, computed } from '@nuxtjs/composition-api'

type todoModel = {
  id: number
  title: string
  isDone: boolean
}

const countIncrement = (): () => number => {
  let count: number = 1
  return () => count++
}

const useTodo = () => {
  // 状態の定義
  const todos = reactive([]) as todoModel[]

  // サンプルデータ
  const sampleTodos: todoModel[] = [
    {
      id: 1,
      title: "ラーメン食べる",
      isDone: false
    },
    {
      id: 2,
      title: "住処の机を作る",
      isDone: false
    },
    {
      id: 3,
      title: "珈琲を飲む",
      isDone: true
    }
  ]

  // todoの登録
  const todoRegister = (title: string) => {
    const counter = countIncrement()
    const todo: todoModel = {
      id: counter(),
      title: title,
      isDone: false
    }
    todos.push(todo)
  }

  // todoの削除
  const todoDelete = (index: number) => {
    todos.splice(index, 1)
  }

  // 完了/未完の変更
  const todoToggle = (index: number) => {
    const afterTodo: todoModel = {
      id: todos[index].id,
      title: todos[index].title,
      isDone: !todos[index].isDone
    }
    todos.splice(index, 1, afterTodo)
  }

  return {
    sampleTodos,
    todos,
    todoRegister,
    todoDelete,
    todoToggle
  }
}

export default useTodo