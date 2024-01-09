import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Verification = () => {

  const { user } = useContext(AuthContext);

    setTimeout(() => {
      user.token 
        ? window.location.replace('/admin/usersList')
        : window.location.replace('/auth/login')
      }, 3000);
  return (
    <div>
      <header id="head">
        <div className="container">
          <div className="row">
            <h1 className="lead">
              Please, check your email to complete the registration!
            </h1>
            <p className="tagline">
              <br />
              Back to <Link to="/">home...</Link>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Verification;
