import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  function onChange(event) {
    setToDo(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    if (toDo === "") return;
    setToDo("");
    setToDos((currentArray) => [...currentArray, toDo]);
  }

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do ..."
        />
        <button>Add To Do</button>
      </form>
      <ul>
        {toDos.map((todo, key) => (
          <p key={key}> {todo} </p>
        ))}
      </ul>
    </div>
  );
}

export default App;
