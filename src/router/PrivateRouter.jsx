import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

const PrivateRouter = () => {
  const { user } = useContext(AuthContext);
  console.log("User Currently : ", user);
  return user.userName ? <Outlet /> : <Navigate to="/login" replace />;
};
export default PrivateRouter;
