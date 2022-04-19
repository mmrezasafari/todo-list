
function AddBar({ state, onChange, onClick, keyDown }) {
  return (
    <section className="add-bar-section">
      <div className="add-bar-div">
        <input
          type="text"
          className="add-input"
          placeholder="create new todo..."
          value={state}
          onChange={onChange}
          onKeyDown={keyDown}
        />
        <button type="button" className="add-button" onClick={onClick}>
          ADD !
        </button>
      </div>
    </section>
  );
}

export default AddBar;
