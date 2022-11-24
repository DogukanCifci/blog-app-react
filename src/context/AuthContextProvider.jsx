import React, { createContext, useEffect, useState } from "react";
// import { userObserver } from "../helpers/firebase";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  /* useEffect(() => {
    setUser({ userName: "dogukan" });
  }, []);
 */
  /*  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);
 */
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
