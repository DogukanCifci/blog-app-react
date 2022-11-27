import React, { createContext, useEffect, useState } from "react";
import { userObserver } from "../helpers/firebase";
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [currentUser, setCurrentUser] = useState("aaa");
  useEffect(() => {
    userObserver(setUser);
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, setUser, setCurrentUser, currentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
