import { Link } from "react-router-dom";

export const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/login/:id">
        <button>Login</button>
      </Link>
      <Link to="/signing/:id">
        <button>Sign in</button>
      </Link>
    </div>
  );
};
