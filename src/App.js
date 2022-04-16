import style from "./assets/style/style.scss"
import AddBar from "./components/AddBar";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import bgLightImage from "./assets/images/bg-desktop-light.jpg"

function App() {
  return (
    <div className="App">
      <img className="bg-image" src={bgLightImage} />
      <div className="todo-container">
      <Header />
      <AddBar />
      <TodoList />
      </div>
    </div>
  );
}

export default App;
