import React, { useState } from 'react';

import {Todo} from './models/todo';
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";


function App() {
  // const [todos, setTodos] = useState<{id: string, text: string}[]>([]);  aqui se fosse tipar pela propria declaraçao
  const [todos, setTodos] = useState<Todo[]>([]);
  //coloca-se o nome handler quando é uma função que executa apartir de um evento
  
  const todoAddHandler = (text: string) => {
    setTodos( prevTodos => [
        ...prevTodos,
        { id: Math.random().toString(), text: text }
      ]
    );
    console.log(text);
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}></TodoList>
    </div>
  );
}

export default App;
