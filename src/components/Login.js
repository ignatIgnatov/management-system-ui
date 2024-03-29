import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

import * as authService from "../services/authService";

const Login = () => {
  const navigate = useNavigate();
  const { user, login } = useContext(AuthContext);

  const onLoginHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");
    let password = formData.get("password");

    authService
      .login(email, password)
      .then((authData) => {
        if (authData.email) {
          alert("You are logged in...");
          login(authData);
          navigate("/");
        }
      })
      .catch((error) => {
        //TODO: show notification
        console.error(error);
      });
  };

  return (
    <div>
      <header id="head" className="secondary"></header>
      <div className="container">
        <ol className="breadcrumb">
          <li>Home</li>
          <li className="active">User access</li>
        </ol>

        <div className="row">
          <article className="col-xs-12 maincontent">
            <header className="page-header">
              <h1 className="page-title">Sign in</h1>
            </header>

            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
              <div className="panel panel-default">
                <div className="panel-body">
                  <h3 className="thin text-center">Sign in to your account</h3>
                  <p className="text-center text-muted">
                    Don't have an account?{" "}
                    <Link to="/auth/register">Register here!</Link>
                  </p>
                  <hr />

                  <form onSubmit={onLoginHandler} method="POST">
                    <div className="top-margin">
                      <label htmlFor="username">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                      />
                    </div>
                    <div className="top-margin">
                      <label htmlFor="password">
                        Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                      />
                    </div>

                    <hr />

                    <div className="row">
                      <div className="col-lg-8">
                        <b>
                          <a href="">Forgot password?</a>
                        </b>
                      </div>
                      <div className="col-lg-4 text-right">
                        <button className="btn btn-action" type="submit">
                          Sign in
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Login;
