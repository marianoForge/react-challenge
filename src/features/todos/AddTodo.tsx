import { useState } from "react";
import { useDispatchTodo } from "../../hooks/useDispatchTodo";
import "../../index.css";

export const AddTodo: React.FC = () => {
  const [title, setTitle] = useState("");
  const { addTodoDispatch } = useDispatchTodo();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setTitle("");

    addTodoDispatch(title);
  };

  return (
    <>
      <h2 className="form__title--h1">My Todo List</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoName" />
        <input
          type="text"
          name="todoName"
          value={title}
          placeholder="Add a new todo"
          onChange={(e) => setTitle(e.target.value)}
          maxLength={30}
          className="form__input"
        />

        <button className="form__button">Add Todo</button>
        {!title ? (
          <p className="form__message--error">Please Write a task</p>
        ) : null}
      </form>
    </>
  );
};
