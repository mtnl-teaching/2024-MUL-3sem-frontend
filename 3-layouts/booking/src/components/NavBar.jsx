import { Link } from "@tanstack/react-router";

export default function NavBar() {
  return (
    <div>
      <div>
        <h1>Header/NavBar</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </div>
      <hr />
    </div>
  );
}
