import React from "react";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../../app/store";

import { selectTodos } from "./todoSlice";

import { useDispatchTodo } from "../../hooks/useDispatchTodo";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const TodoList: React.FC = () => {
  const { removeTodoDispatch, toggleTodoDispatch } = useDispatchTodo();

  const todos = useTypedSelector(selectTodos);

  return (
    <div className="todo-list__container">
      {todos.map((todo) => (
        <div className="todo-list__checkbox-container" key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodoDispatch(todo.id)}
            className="todo-list__checkbox"
          />

          <div className="w-32">
            <p className="todo-list__title">{todo.title}</p>
          </div>
          <div className="todo-list__button-container">
            <button
              className="todo-list__button"
              onClick={() => removeTodoDispatch(todo.id)}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
