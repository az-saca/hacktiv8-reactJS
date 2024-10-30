import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div className="container">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>TODO</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "true" : "false"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
