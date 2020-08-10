import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard"

import {
  appAuth,
  authProvider,
  facebookAuthProvider,
} from "../../config/firebase";
import bg from "../../images/bgs/3396825.jpg";
import { AuthContext } from "../../auth/authContext";
import { FileContext } from "../../auth/fileContext";

const SignIn = ({history}) => {
  const { currentUser } = useContext(AuthContext)
  const {setError} = useContext(FileContext)
  const handlelogin = useCallback(
    async (provider) => {
      try {
        await appAuth.signInWithPopup(provider)
        history.push("/");
      } catch (error) {
        setError(error.message)
      }
    },
    [history, setError]
  );
  if(currentUser){
   return  <Redirect to={Dashboard}/>
  }

  return (
    <div className="container-login100">
      <div className="row">
        <div id="signout-column" className="col-6  m-auto">
          <p className="text-white text-center">
            Welcome to Firegram, Please sign in
          </p>
          <div className="tile">
            <div className="tile-img-header">
              <img src={bg} className="img-fluid" alt="firegram bg"/>
            </div>
            <div className="tile-body">
              <button
                className="btn custom-btn btn-block btn-dark m-auto"
                onClick={() => handlelogin(authProvider)}
              >
                <i class="fab fa-google-plus-square mr-3"></i>
                Continue with Google
              </button>
              <p className="my-5 text-center m-auto">or</p>
              <button
                className="btn custom-btn custom-btn-primary btn-block m-auto"
                onClick={() => handlelogin(facebookAuthProvider)}
              >
                <i class="fab fa-facebook-square mr-3" ></i>
                Continue with facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(SignIn);
