import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { TodoId, Todo, TodosState } from "./todoTypes.d";

const initialState: TodosState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo<T extends TodosState, U extends PayloadAction<Todo>>(
      state: T,
      action: U
    ): void {
      if (!action.payload.title) return;
      state.list.push(action.payload);
    },
    removeTodo<T extends TodosState, U extends PayloadAction<string>>(
      state: T,
      action: U
    ) {
      const index = state.list.findIndex(({ id }) => id === action.payload);
      state.list.splice(index, 1);
    },
    toggleTodo<T extends TodosState, U extends PayloadAction<TodoId>>(
      state: T,
      action: U
    ) {
      const index = state.list.findIndex(({ id }) => id === action.payload);

      if (index) {
        state.list[index].completed = !state.list[index].completed;
      }
      if (index === 0) {
        state.list[index].completed = !state.list[index].completed;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export const selectTodos = (state: RootState) => state.todos.list;
export default todoSlice.reducer;
