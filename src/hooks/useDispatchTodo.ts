import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo, addTodo } from "../features/todos/todoSlice";

export const useDispatchTodo = () => {
  const dispatch = useDispatch();
  const removeTodoDispatch = (id: string) => {
    dispatch(removeTodo(id));
  };

  const toggleTodoDispatch = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const addTodoDispatch = (title: any) => {
    dispatch(
      addTodo({
        id: Date.now().toString(),
        completed: false,
        title,
      })
    );
  };

  return { removeTodoDispatch, toggleTodoDispatch, addTodoDispatch };
};
