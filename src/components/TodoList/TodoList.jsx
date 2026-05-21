import {
  List,
  TaskItem,
  TaskCheckbox,
  TaskText,
  DeleteButton,
  EmptyMessage,
} from "./TodoList.styles";

const TodoList = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) return <EmptyMessage>No tasks.</EmptyMessage>;

  return (
    <List>
      {todos.map((todo, i) => (
        <TaskItem key={todo.id} isLast={i === todos.length - 1}>
          <TaskCheckbox
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <TaskText completed={todo.completed}>{todo.text}</TaskText>
          <DeleteButton onClick={() => onDelete(todo.id)}>
            Delete
          </DeleteButton>
        </TaskItem>
      ))}
    </List>
  );
};

export default TodoList;
