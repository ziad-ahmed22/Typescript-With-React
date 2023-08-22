import { createContext, useState } from "react";

type UserProviderProps = {
  children: React.ReactNode;
};

type AuthUser = {
  name: string;
  email: string;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

// export const UserContext = createContext({} as UserContextType);
// export const UserContext = createContext<UserContextType>(null!);
export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<null | AuthUser>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
