import $ from "jquery"

function TodoList() {
  return (
    <section className="todo-list-section">
      <nav>
        <div className="todo-list">
          <ul>
            <li className="todo-item" aria-checked="false">
              <span className="circle-check"></span>
              <div className="todo-text">hello world</div>
            </li>
            <hr />
          </ul>
        </div>
      </nav>
      <footer>
        <span className="left-item">5 item left</span>
        <nav>
          <ul>
            <li><a href="#">All</a></li>
            <li><a href="#">Active</a></li>
            <li><a href="#">Completed</a></li>
          </ul>
        </nav>
        <span>Clear Complete</span>
      </footer>
    </section>
  );
}

export default TodoList;
