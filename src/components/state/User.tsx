import { useState } from "react";

type UserType = {
  id: number;
  name: string;
};

const User = () => {
  const [user, setUser] = useState<null | UserType>(null);

  const handleLogIn = () => setUser({ id: 1, name: "Ziad" });
  const handleLogOut = () => setUser(null);

  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>Logout</button>

      <p>Your Name Is: {user?.id}</p>
      <p>Your E-mail Is: {user?.name}</p>

      {/* <p>{user?.id && `Your Name Is: ${user.id}`}</p>
      <p>{user?.name && `Your E-mail Is: ${user.name}`}</p> */}
    </div>
  );
};

export default User;

// =====================================
// another solution

// import { useState } from "react";

// type UserType = {
//   id: number;
//   name: string;
// };

// const User = () => {
//   const [user, setUser] = useState<UserType>({} as UserType);

//   const handleLogIn = () => setUser({ id: 1, name: "Ziad" });
//   const handleLogOut = () => setUser({} as UserType);

//   return (
//     <div>
//       <button onClick={handleLogIn}>Login</button>
//       <button onClick={handleLogOut}>Logout</button>

//       <p>{user?.id && `Your Name Is: ${user.id}`}</p>
//       <p>{user?.name && `Your E-mail Is: ${user.name}`}</p>
//     </div>
//   );
// };

// export default User;
