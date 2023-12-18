import TodoItem from './TodoItem';
import { useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import classes from './Todos.module.css';

const Todos: React.FC = () => {
  const todoCxt = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todoCxt.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todoCxt.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
