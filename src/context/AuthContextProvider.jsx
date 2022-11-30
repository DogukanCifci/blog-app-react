import React, { createContext, useEffect, useState } from "react";
import { userObserver } from "../helpers/firebase";
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [currentUser, setCurrentUser] = useState("aaa");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    userObserver(setUser);
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, setUser, setCurrentUser, currentUser, toggle, setToggle }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
