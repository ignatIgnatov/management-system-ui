import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import * as userService from "../../services/userService";

const MyPage = () => {
  const { user } = useContext(AuthContext);

  const [currentUser, setCurrentUser] = useState([]);

  let id = user.id;
  let token = user.token;

  const navigate = useNavigate();

  useEffect(() => {
    userService.getUser(id, token).then((data) => {
      setCurrentUser(data);
    });
  }, []);

  const editProfile = () => {
    localStorage.setItem("id", id)
    navigate("/user/edit-profile");
    
  };

  const backToHome = () => {
    navigate("/")
  }

  return (
    <div>
      <header id="head" className="secondary"></header>

      <div className="container">
        <ol className="breadcrumb">
          <li>Users</li>
          <li className="active">My profile</li>
        </ol>

        <div className="row">
          <article className="col-xs-12 maincontent">
            <header className="page-header">
              <h1 className="page-title">My profile</h1>
            </header>

            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
              <div className="panel panel-default">
                <div className="panel-body">
                  <form>
                    <div className="row top-margin">
                      <div className="image">
                        <img src="" alt="pic here" />
                      </div>
                    </div>
                    <hr />
                    <div className="row top-margin">
                      <div className="col-sm-6">
                        <label htmlFor="firstName">
                          First Name: {currentUser.firstName}
                        </label>
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="lastName">
                          Last Name: {currentUser.lastName}
                        </label>
                      </div>
                    </div>
                    <div className="row top-margin">
                      <div className="col-sm-6">
                        <label htmlFor="age">Age: {currentUser.age}</label>
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="gender">
                          Gender: {currentUser.gender}
                        </label>
                      </div>
                    </div>
                    <div className="row top-margin">
                      <div className="col-sm-6">
                        <label htmlFor="city">City: {currentUser.city}</label>
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="address">
                          Address: {currentUser.address}
                        </label>
                      </div>
                    </div>
                    <div className="row top-margin">
                      <div className="col-sm-6">
                        <label htmlFor="education">
                          Educational stage: {currentUser.education}
                        </label>
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="workplace">
                          Workplace: {currentUser.workplace}
                        </label>
                      </div>
                    </div>
                    <div className="row top-margin">
                      <div className="col-sm-6">
                        <label htmlFor="facebook">
                          <i className="fa-brands fa-facebook"></i>{" "}
                          {currentUser.facebook}
                        </label>
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="gitHub">
                          <i className="fa-brands fa-github"></i>{" "}
                          {currentUser.github}
                        </label>
                      </div>
                    </div>
                    <hr />
                    <div className="top-margin">
                      <label htmlFor="username">
                        Username: {currentUser.username}
                      </label>
                    </div>
                    <div className="top-margin">
                      <label htmlFor="email">
                        Email Address: {currentUser.email}
                      </label>
                    </div>

                    <hr />

                    <div className="row">
                      <div className="col-lg-8">
                      <button
                          className="btn btn-default"
                          onClick={backToHome}
                        >
                          Back To Home
                        </button>
                      </div>
                      <div className="col-lg-4 text-right">
                        
                        <button
                          className="btn btn-action"
                          onClick={editProfile}
                        >
                          Edit Profile
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

export default MyPage;
