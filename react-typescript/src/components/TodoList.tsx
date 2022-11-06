import React from 'react';
//se nao improtar o react o tsx nao funciona

interface TodoListProps {
    items: {id: string, text: string}[];
}

const TodoList: React.FC<TodoListProps> = props => {    
    return <ul>
        {props.items.map(todo => (
            <li key={todo.id}>{todo.text}</li>
        ))}
    </ul>
};
//React.FC está indicando que esta nao é uma funcao normal, mas uma funcao de componente

export default TodoList;