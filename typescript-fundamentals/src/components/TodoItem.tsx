import styles from './TodoItem.module.css'
// const TodoItem: React.FC<{ todo: Todo }> = (props) => {
const TodoItem: React.FC<{ text: string, id: string, removeItem: () => void }> = (props) => {
    return <li className={styles.item} onClick={props.removeItem}>{props.text}</li>
};

export default TodoItem;