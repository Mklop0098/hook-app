import { useState } from "react";
import { Link } from "react-router-dom";
import { SignInItem } from "../SinginItem";

type SignInFormProp = {
  onChange: (name: string, pass: string, secondPass: string) => void;
};

export const SignInForm: React.FC<SignInFormProp> = (props) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [secondPass, setSecondPass] = useState("");

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setName("");
    setPass("");
    setSecondPass("");
  };
  const setSecond = (value: string) => {
    setSecondPass(value);
  };
  const setNameUser = (value: string) => {
    setName(value);
  };
  const setPassUser = (value: string) => {
    setPass(value);
  };

  return (
    <form
      onSubmit={handleChange}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "150px",
        margin: "auto",
      }}
    >
      <SignInItem placeholder="Username" setInput={setNameUser} value={name} />
      <SignInItem placeholder="Password" setInput={setPassUser} value={pass} />
      <SignInItem
        placeholder="Re-enter Password"
        setInput={setSecond}
        value={secondPass}
      />
      <button onClick={() => props.onChange(name, pass, secondPass)}>
        Sign in
      </button>
      <Link to="/">
        <button>Home</button>
      </Link>
    </form>
  );
};
