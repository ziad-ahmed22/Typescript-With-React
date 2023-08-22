import { useContext } from "react";
import { UserContext } from "./UserContext";

const Userrr = () => {
  const context = useContext(UserContext);

  const handleLogIn = () => {
    if (context) {
      context.setUser({
        name: "Ziad",
        email: "ziad@example.com",
      });
    }
  };
  const handleLogOut = () => {
    if (context) {
      context.setUser(null);
    }
  };

  // const handleLogIn = () => {
  //     context.setUser({
  //       name: "Ziad",
  //       email: "ziad@example.com",
  //     });
  // };
  // const handleLogOut = () => {
  //     context.setUser(null);
  // };

  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>Logout</button>

      {/* <p>Your Name Is: {context.user?.name}</p>
      <p>Your E-Mail Is: {context.user?.email}</p> */}

      <p>Your Name Is: {context?.user?.name}</p>
      <p>Your E-Mail Is: {context?.user?.email}</p>
    </div>
  );
};

export default Userrr;
