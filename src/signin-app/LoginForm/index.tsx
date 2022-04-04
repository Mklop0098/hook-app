import { useState } from "react";
import { Link } from "react-router-dom";
import { SignInItem } from "../SinginItem";
import React from "react";

type LoginFormProps = {
  onChange: (name: string, pass: string) => void;
};

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const setNameUser = (value: string) => {
    setName(value);
  };
  const setPassword = (value: string) => {
    setPass(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setName("");
    setPass("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "150px",
        margin: "auto",
      }}
    >
      <SignInItem placeholder="Username" setInput={setNameUser} value={name} />
      <SignInItem placeholder="Password" setInput={setPassword} value={pass} />
      <button onClick={() => props.onChange(name, pass)}>Login</button>
      <Link to="/">
        <button>Home</button>
      </Link>
    </form>
  );
};
