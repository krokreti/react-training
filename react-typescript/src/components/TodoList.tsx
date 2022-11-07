import React from 'react';
//se nao improtar o react o tsx nao funciona

import './TodoList.css';

interface TodoListProps {
    items: {id: string, text: string}[];
    onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {    
    return <ul>
        {props.items.map(todo => (
            <li key={todo.id}>
                <span>{todo.text}</span>
                <button onClick={props.onDeleteTodo.bind(null, todo.id)}>DELETE</button>
                </li>
        ))}
    </ul>
};
//React.FC está indicando que esta nao é uma funcao normal, mas uma funcao de componente

export default TodoList;