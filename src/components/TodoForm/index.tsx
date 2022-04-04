import { useState } from "react";

type TodoProps = {
  onCreateTask: (value: string) => void;
};

export const TodoForm: React.FC<TodoProps> = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        name="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          props.onCreateTask(input);
        }}
      >
        Submit
      </button>
    </form>
  );
};
