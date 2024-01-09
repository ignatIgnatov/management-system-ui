import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import * as userService from "../../services/userService";
import * as fileService from "../../services/fileService";

const StudentPage = () => {
  const { user } = useContext(AuthContext);

  const [currentUser, setCurrentUser] = useState([]);
  const [picture, setPicture] = useState([]);

  const navigate = useNavigate();

  let id = localStorage.getItem("id")
    ? localStorage.getItem("id")
    : user.id;

  useEffect(() => {
    userService.getUser(id, user.token).then((data) => {
      setCurrentUser(data);
    });
  }, []);

  useEffect(() => {
    fileService.getPicture(id, user.token).then((data) => {
      setPicture(data);
    });
  }, []);

  const cancelEdit = () => {
    localStorage.removeItem("id")
    user.authorities[0].authority === "ADMIN"
      ? navigate("/admin/usersList")
      : navigate("/user/my-profile");
  };

  const editSubmitHandler = (event) => {
    event.preventDefault();

    let {
      firstName,
      lastName,
      age,
      gender,
      city,
      address,
      education,
      workplace,
      facebook,
      github,
      username,
      email,
    } = Object.fromEntries(new FormData(event.currentTarget));

    userService
      .editUser(
        id,
        firstName,
        lastName,
        age,
        gender,
        city,
        address,
        education,
        workplace,
        facebook,
        github,
        username,
        email,
        user.token
      )
      .then((res) => {
        user.authorities[0].authority === "ADMIN"
          ? navigate("/admin/usersList")
          : navigate("/user/my-profile");
        localStorage.removeItem("id");
      });
  };

  const choicePicture = () => {
    navigate("/user/picture");
  };

  return (
    <div>
      <header id="head" className="secondary"></header>

      <div className="container">
        <ol className="breadcrumb">
          <li>Users</li>
          <li className="active">Edit page</li>
        </ol>

        <div className="row">
          <article className="col-xs-12 maincontent">
            <header className="page-header">
              <h1 className="page-title">Edit Page</h1>
            </header>

            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="row top-margin"></div>

                  <div className="image">
                    {picture ? (
                      <img src={picture.imgUrl} alt={picture.title} />
                    ) : (
                      <div>Loading...</div>
                    )}
                  </div>

                  <button
                    className="btn btn-default btn-picture"
                    onClick={choicePicture}
                  >
                    Edit Picture
                  </button>
                  <hr />

                  <form
                    onSubmit={editSubmitHandler}
                    encType="multipart/form-data"
                  >
                    <div className="row top-margin">
                      <div className="col-sm-6">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          className="form-control"
                          defaultValue={currentUser.firstName}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          className="form-control"
                          defaultValue={currentUser.lastName}
                        />
                      </div>
                    </div>
                    <div className="row top-margin">
                      <div className="col-sm-6">
                        <label htmlFor="age">Age</label>
                        <input
                          type="number"
                          name="age"
                          id="age"
                          className="form-control"
                          defaultValue={currentUser.age}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="gender">Gender</label>
                        <select
                          name="gender"
                          id="gender"
                          className="form-control"
                          defaultValue={currentUser.gender}
                        >
                          <option value=""> - Select - </option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="row top-margin">
                      <div className="col-sm-6">
                        <label htmlFor="city">City</label>
                        <select
                          name="city"
                          id="city"
                          className="form-control"
                          defaultValue={currentUser.city}
                        >
                          <option value=""> - Select - </option>
                          <option value="Russe">Russe</option>
                          <option value="Sofia">Sofia</option>
                        </select>
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="address">Address</label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          className="form-control"
                          defaultValue={currentUser.address}
                        />
                      </div>
                    </div>
                    <div className="row top-margin">
                      <div className="col-sm-6">
                        <label htmlFor="education">Educational stage</label>
                        <select
                          name="education"
                          id="education"
                          className="form-control"
                          defaultValue={currentUser.education}
                        >
                          <option value=""> - Select - </option>
                          <option value="Primary">Primary</option>
                          <option value="Secondary">Secondary</option>
                          <option value="Bachelor">Bachelor degree</option>
                          <option value="Master">Master degree</option>
                          <option value="Doctor">Doctoral degree</option>
                        </select>
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="workplace">Workplace</label>
                        <input
                          type="text"
                          name="workplace"
                          id="workplace"
                          className="form-control"
                          defaultValue={currentUser.workplace}
                        />
                      </div>
                    </div>
                    <div className="row top-margin">
                      <div className="col-sm-6">
                        <label htmlFor="facebook">
                          <i className="fa-brands fa-facebook"></i> Facebook
                        </label>
                        <input
                          type="text"
                          name="facebook"
                          id="facebook"
                          className="form-control"
                          defaultValue={currentUser.facebook}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="github">
                          <i className="fa-brands fa-github"></i> Git Hub
                        </label>
                        <input
                          type="text"
                          name="github"
                          id="github"
                          className="form-control"
                          defaultValue={currentUser.github}
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="top-margin">
                      <label htmlFor="username">
                        Username <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                        defaultValue={currentUser.username}
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
                        defaultValue={currentUser.email}
                      />
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-lg-8">
                        <button
                          className="btn btn-default"
                          onClick={cancelEdit}
                        >
                          Cancel
                        </button>
                      </div>
                      <div className="col-lg-4 text-right">
                        <button className="btn btn-action" type="submit">
                          Save Info
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

export default StudentPage;
