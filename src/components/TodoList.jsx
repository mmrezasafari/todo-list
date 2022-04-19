import { React } from "react";

function TodoList({ todoList, toggleDone, allTodo, activeTodo, completeTodo, clearComplete }) {
  return (
    <section className="todo-list-section">
      <nav>
        <div className="todo-list">
          <ul>
            {todoList.map((todo) => {
              return (
                <>
                  <li
                    className="todo-item"
                    onClick={toggleDone}
                    id={todo.id}
                  >
                    <span
                      className={`circle-check ${
                        todo.complete ? "bg-complete-color" : ""
                      }`}
                      id={todo.id}
                    ></span>
                    <div
                      className={`todo-text ${
                        todo.complete ? "text-decoration" : ""
                      }`}
                      id={todo.id}
                    >
                      {todo.task}
                    </div>
                  </li>
                  <hr />
                </>
              );
            })}
          </ul>
        </div>
      </nav>
      <footer>
        <span className="left-item">{todoList.length} item left</span>
        <nav>
          <ul>
            <li>
              <a href="#" onClick={allTodo}>All</a>
            </li>
            <li>
              <a href="#" onClick={activeTodo}>Active</a>
            </li>
            <li>
              <a href="#" onClick={completeTodo}>Completed</a>
            </li>
          </ul>
        </nav>
        <span onClick={clearComplete}>Clear Complete</span>
      </footer>
    </section>
  );
}

export default TodoList;
