import { useState } from "react";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = () => setIsLoggedIn(true);
  const handleLogOut = () => setIsLoggedIn(false);

  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      <p>You Are {isLoggedIn ? "Logged In" : "Logged Out"}</p>
    </div>
  );
};

export default Login;
