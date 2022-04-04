import { SignInForm } from "../SignInForm";
import { UserData } from "../../data/user";

export const SignIn: React.FC = () => {
  const AddUser = (name: string, pass: string, secondPass: string) => {
    const user = {
      username: name,
      password: pass,
    };
    if (user.username === "") {
      alert("username missing");
      return;
    }
    if (user.password === "") {
      alert("password missing");
      return;
    }
    if (user.password !== secondPass) {
      alert("password doesn't match");
      return;
    }
    if (!UserData.some((user) => user.username === name)) {
      UserData.push(user);
      alert("Create success!");
    } else {
      alert("username already existed");
      return;
    }
    console.log(UserData);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <SignInForm onChange={AddUser} />
    </div>
  );
};
