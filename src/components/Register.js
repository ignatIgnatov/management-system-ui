import { Link } from "react-router-dom";

import * as authService from "../services/authService";

import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Register = () => {
  const { user } = useContext(AuthContext);

  let navigate = useNavigate();

  const registerSubmitHandler = (e) => {
    e.preventDefault();

    let { firstName, lastName, username, email, password, confirmPassword } =
      Object.fromEntries(new FormData(e.currentTarget));

    authService
      .register(firstName, lastName, username, email, password, confirmPassword)
      .then(() => {

        user.token
        ?  navigate("/admin/usersList")
        : navigate("/verification")
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <header id="head" className="secondary"></header>

      <div className="container">
        <ol className="breadcrumb">
          <li>Home</li>
          <li className="active">Registration</li>
        </ol>

        <div className="row">
          <article className="col-xs-12 maincontent">
            <header className="page-header">
              <h1 className="page-title">Registration</h1>
            </header>

            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
              <div className="panel panel-default">
                <div className="panel-body">
                  <h3 className="thin text-center">Register a new account</h3>
                  <p className="text-center text-muted">
                    Already have an account?{" "}
                    <Link to="/auth/login">Login here!</Link>{" "}
                  </p>
                  <hr />

                  <form onSubmit={registerSubmitHandler} method="POST">
                    <div className="row top-margin">
                      <div className="col-sm-6">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          className="form-control"
                        />
                      </div>
                    </div>
                    {/* ------------------------------------------------------------------------------- */}
                    <div className="row top-margin radio">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="role"
                          id="student"
                        />{" "}
                        <label className="form-check-label" htmlFor="student">
                          Student
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="role"
                          id="company"
                        />{" "}
                        <label className="form-check-label" htmlFor="company">
                          Company
                        </label>
                      </div>
                    </div>
                    {/* ------------------------------------------------------------------------------- */}
                    <div className="top-margin">
                      <label htmlFor="username">
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                      />
                    </div>
                    <div className="top-margin">
                      <label htmlFor="email">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                      />
                    </div>

                    <div className="row top-margin">
                      <div className="col-sm-6">
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
                      <div className="col-sm-6">
                        <label htmlFor="confirmPassword">
                          Confirm Password{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          name="confirmPassword"
                          id="confirmPassword"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <hr />

                    <div className="row">
                      <div className="col-lg-8">
                        <label className="checkbox">
                          <input type="checkbox" />
                          I've read the{" "}
                          <a href="page_terms.html">Terms and Conditions</a>
                        </label>
                      </div>
                      <div className="col-lg-4 text-right">
                        <button className="btn btn-action" type="submit">
                          Register
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

export default Register;
