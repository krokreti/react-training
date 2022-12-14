import React, { useState } from 'react'
import Todo from "../models/todo"

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

//nesse context fica a definiçao dos tipos
export const TodosContext = React.createContext<TodosContextObj>({
    // aqui fica a definiçao concreta dos objetos/funcoes
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
})

const TodosContextProvider: React.FC = (props) => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
      const newTodo = new Todo(todoText);
  
      setTodos((prevTodos) => {
        return prevTodos.concat(newTodo);
      });
    }
      
    const removeTodoHandler = (id: string) => {
      setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.id !== id);
      })
    }

    const contextValue:TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    };

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider;