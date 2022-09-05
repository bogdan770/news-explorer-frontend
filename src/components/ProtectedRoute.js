import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ loggedInSavedNews, children, ...props }) => {
  if (loggedInSavedNews) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
