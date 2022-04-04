type TodoItemProp = {
  onDelete: () => void;
  taskName: string;
};

export const TodoItem: React.FC<TodoItemProp> = (props) => {
  const handleDeleteItem = () => {
    console.log(props.taskName);
    props.onDelete();
  };

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <span>{props.taskName}</span>
      <button onClick={handleDeleteItem}>Delete</button>
    </div>
  );
};
