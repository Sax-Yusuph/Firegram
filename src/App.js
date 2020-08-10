import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./comps/layout/Dashboard";
import SignIn from "./comps/layout/Signin";
import PrivateRoute from "./comps/layout/PrivateRoute";
import AuthContextProvider from "./auth/authContext";
import FileContextProvider from "./auth/fileContext";

function App() {
  return (
    <AuthContextProvider>
      <FileContextProvider>
        <Router>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={SignIn} />
        </Router>
      </FileContextProvider>
    </AuthContextProvider>
  );
}

export default App;
