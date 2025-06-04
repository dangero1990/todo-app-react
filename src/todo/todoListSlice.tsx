import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { nanoid } from '@reduxjs/toolkit'

//Define a type for a todo
type TodoType = {
  id: string,
  content: string,
  status: boolean
}

// Define a type for the slice state
export interface TodoListState {
  list: TodoType[]
}

// Define the initial state using that type
const initialState: TodoListState = {
  list: []
}

export const todoListSlice = createSlice({
  name: 'todoList',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: TodoType = {
        id: nanoid(),
        content: action.payload,
        status: false
      }
      state.list.push(newTodo)
    },
    toggleStatus: state => {
      state
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state
    },
    clearTodos: state => {
      state = initialState;
    }
  }
})

export const { addTodo, toggleStatus, removeTodo, clearTodos } = todoListSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default todoListSlice.reducer