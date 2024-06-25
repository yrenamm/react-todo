import React from 'react';

const todoList = [
  { id: 1, title: 'Complete assignment' },
  { id: 2, title: 'Read a book' },
  { id: 3, title: 'Go for a walk' },
  { id: 4, title: 'Buy groceries' },
  { id: 5, title: 'Call a friend' }
];

const App = () => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}


export default App;