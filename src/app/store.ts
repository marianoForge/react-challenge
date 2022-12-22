import { configureStore } from "@reduxjs/toolkit";
// Import our reducer from the sluce:
import todosReducer from "../features/todos/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
