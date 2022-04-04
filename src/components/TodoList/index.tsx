import { useState } from "react";
import { TodoItem } from "../tod";
import { TodoForm } from "../TodoForm";

type Task = {
  id: number;
  taskName: string;
};

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Task[]>([]);

  const handleDelete = (id: number) => {
    setTodos(todos.filter((value) => value.id !== id));
  };

  const handleInputChange = (taskName: string) => {
    const todo = {
      id: todos.length,
      taskName,
    };
    setTodos([todo, ...todos]);
  };

  return (
    <div>
      <h1>Hello</h1>
      <TodoForm onCreateTask={handleInputChange} />

      {todos.map((task) => (
        <TodoItem
          taskName={task.taskName}
          onDelete={() => handleDelete(task.id)}
        />
      ))}
    </div>
  );
};
