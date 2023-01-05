import TodoItem from "./TodoItem"
import styles from './Todos.module.css'
import { useContext } from 'react'
import { TodosContext } from "../store/todos-context"

// const Todos: React.FC<{ items: string[] }> = (props) => {
const Todos: React.FC = () => {

    const todosCtx = useContext(TodosContext)

    return (<ul className={styles.todos}>
        {todosCtx.items.map(item => 
            (<TodoItem key={item.id} text={item.text} id={item.id} removeItem={todosCtx.removeTodo.bind(null, item.id)}/>)
        )}
    </ul>
    )
}

export default Todos