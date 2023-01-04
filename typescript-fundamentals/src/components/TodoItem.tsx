
// const TodoItem: React.FC<{ todo: Todo }> = (props) => {
const TodoItem: React.FC<{ text: string }> = (props) => {
    return <li>{props.text}</li>
};

export default TodoItem;