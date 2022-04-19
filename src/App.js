import style from "./assets/style/style.scss";
import { useState } from "react";
import AddBar from "./components/AddBar";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import bgLightImage from "./assets/images/bg-desktop-light.jpg";


function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [copyTodoList, setCopyTodoList] = useState([]);


  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    if (todo) {
      setTodoList((oldValue) => [
        ...oldValue,
        {
          id: todoList.length + 1,
          task: todo,
          complete: false,
        },
      ]);
      setCopyTodoList((oldValue) => [
        ...oldValue,
        {
          id: copyTodoList.length + 1,
          task: todo,
          complete: false,
        },
      ]);
    }
    setTodo("") ;
  };

  const handleKeyDown = (e) => {
    if(e.keyCode === 13){
      handleOnClick(e) ;
    }
  }

  const handleToggleDone = (e) => {
    e.preventDefault();
    let mapped = todoList.map((item) => {
      return item.id == e.target.id
        ? { ...item, complete: !item.complete }
        : { ...item };
    });
    setTodoList(mapped);
    setCopyTodoList(mapped);
  };

  const handleAllTodo = (e) => {
    e.preventDefault();
    setTodoList(copyTodoList);
  };

  const handleActiveTodo = (e) => {
    e.preventDefault();
    let activeTodo = todoList.filter((item) => item.complete === false);
    setTodoList(activeTodo);
  };

  const handleCompleteTodo = (e) => {
    e.preventDefault();
    let completeTodo = todoList.filter((item) => item.complete === true);
    setTodoList(completeTodo);
  };

  const handleClearComplete = (e) => {
    e.preventDefault();
    setTodoList([]);
  };

  return (
    <div className="App">
      <img className="bg-image" src={bgLightImage} alt="bg-img" />
      <div className="todo-container">
        <Header/>
        <AddBar
          state={todo}
          onChange={handleOnChange}
          onClick={handleOnClick}
          keyDown={handleKeyDown}
        />
        <TodoList
          todoList={todoList}
          toggleDone={handleToggleDone}
          allTodo={handleAllTodo}
          activeTodo={handleActiveTodo}
          completeTodo={handleCompleteTodo}
          clearComplete={handleClearComplete}
        />
      </div>
    </div>
  );
}

export default App;
