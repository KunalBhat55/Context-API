import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Hita apan set kelay
  const { setUser } = useContext(UserContext); // consume the context in your components will return the current context value.

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  }
  return (
    <div className="text-center text-lg">
      <h2>Login</h2>
      <input
        className="h-8 m-2 p-1"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="h-8 m-2 p-1"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button className="bg-blue-800 p-2 rounded-md text-gray-300" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
