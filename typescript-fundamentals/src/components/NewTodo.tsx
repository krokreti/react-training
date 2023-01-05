import React, { useRef, useContext } from "react"
import { TodosContext } from "../store/todos-context";
import styles from './NewTodo.module.css'

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent)  => {
        event.preventDefault()

        const enteredText = todoTextInputRef.current!.value;
        // o ! indica q esse valor sempre vai ser usado, esta variavel vai ser acionada depois que o form for criado
        // , nunca será undefined ou null

        if (enteredText?.trim().length === 0 ) {
            //throw error
            return;
        }

        todosCtx.addTodo(enteredText);
    }

    return (
    <form onSubmit={submitHandler} className={styles.form}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={todoTextInputRef}/>
        <button>Add Todo</button>
    </form>
    )
}

export default NewTodo