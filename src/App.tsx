import { AddTodo } from "./features/todos/AddTodo";
import { TodoList } from "./features/todos/TodoList";
import "./index.css";

const App: React.FC = () => {
  return (
    <>
      <div className="app-title__container">
        <h1 className="text-gray-700;">
          CHALLENGE: REACT - REDUX - TYPESCRIPT
        </h1>
      </div>
      <div className="app-components__container">
        <AddTodo />
        <TodoList />
      </div>
    </>
  );
};

export default App;
