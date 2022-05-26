import React, { useState } from 'react';
import './App.css';
import { Input } from './components/Input';
import { Todo } from './model';

const App: React.FC = () => {
  const [name, setName] = useState<string>('Nim');
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([])
  const changeName = () => {
    setName('Khan')
  }
  const addTodo = () : void => {
    if(todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo("");
    }
  }
  const updateTodo = (id: number): void => {
    const index = todos.findIndex(todo => todo.id === id);
    const currentTodos = [...todos];
    // currentTodos[index] = 
  }
  return (
    <div className="App">
      <header className="App-header">
        <Input todo={todo} setTodo={setTodo} />
        <button onClick={() => addTodo()}>Add todo</button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => changeName()}>changeName</button>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {name} {todo}
        </a>
      </header>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => updateTodo(todo.id)}>{todo.todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
