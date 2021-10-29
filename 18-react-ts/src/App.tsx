import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo></NewTodo>
      <Todos></Todos>
    </TodosContextProvider>
  );
}

export default App;
