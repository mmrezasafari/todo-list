function AddBar() {
  return (
    <section className="add-bar-section">
      <div className="add-bar-div">
        <input type="text" className="add-input" placeholder="create new todo..." />
        <button type="button" className="add-button">ADD!</button>
      </div>
    </section>
  );
}

export default AddBar ;