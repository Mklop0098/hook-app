import { Link } from "react-router-dom";
import { UserData } from "../../data/user";
import { LoginForm } from "../LoginForm";

export const Login: React.FC = () => {
  const handleLogin = (name: string, pass: string) => {
    if (name === "") {
      return alert("username is missing");
    }
    if (pass === "") {
      return alert("password is missing");
    }
    if (UserData.some((user) => user.username === name)) {
      if (UserData.some((user) => user.password === pass)) {
        return alert("login success");
      }
      return alert("Password incorrect");
    }
    return alert("Username is not exist");
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onChange={handleLogin} />
    </div>
  );
};
