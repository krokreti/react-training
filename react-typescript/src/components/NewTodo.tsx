import React, { useRef } from 'react';
import './NewTodo.css';

//tem q tipar ou usar uma interface para o props!
type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

//da pra usar two way databinding mas iremos usar ref
const NewTodo: React.FC<NewTodoProps> = props => {
    
    const textInputRef = useRef<HTMLInputElement>(null);
    //deve iniciar com null se nao tiver um valor predefinido

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        //se essa funcao fosse rodar antes do form ser chamado, deveria colocar um if(textInputRef.current) pra fazer a verificação
        //colocar o ! pra garantir pro typescript que nao virá valor nulo
        const enteredText = textInputRef.current!.value;
        //emitindo um valor \/
        props.onAddTodo(enteredText);
    };

    return (
        <form onSubmit={todoSubmitHandler}>
            <div className='form-control'>
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id='todo-text' ref={textInputRef}/>
            </div>
            <button type='submit'>ADD TODO</button>
        </form>
    );
};

export default NewTodo;