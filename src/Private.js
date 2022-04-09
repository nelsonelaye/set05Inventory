import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
	const { currentUser } = useContext(AuthContext);
	return <div>{currentUser ? children : <Navigate to="/" />}</div>;
};

export default Private;
