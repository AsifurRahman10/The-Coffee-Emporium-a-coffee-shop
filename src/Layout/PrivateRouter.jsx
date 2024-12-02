import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { Navigate } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return <p>Loading</p>;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
};
