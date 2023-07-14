import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

const isAuthenticated = () => {
  return true
};

const ProtectedRoute = ({ children }: Props) => {
  return isAuthenticated() ? children : <Navigate to="/unauthorize" />;
};

export default ProtectedRoute;
