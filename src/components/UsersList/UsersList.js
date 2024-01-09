import * as userService from "../../services/userService";
import UserRow from "./UserRow/UserRow";

import { useState, useEffect } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

const ViewAllUsers = () => {
  const { user } = useContext(AuthContext);

  const token = user.token;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAllUsers(token).then((data) => {
      setUsers(Object.values(data));
    });
  }, []);

  return (
    <div>
      <header id="head" className="secondary"></header>

      <div className="container">
        <ol className="breadcrumb">
          <li>Admin</li>
          <li className="active">All Users</li>
        </ol>
      </div>

      <div className="jumbotron top-space">
        <div className="container">
          <h3 className="text-center thin">All registred users</h3>

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Roles</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">City</th>
                <th scope="col">Address</th>
                <th scope="col">Education</th>
                <th scope="col">Workplace</th>
                <th scope="col">Facebook</th>
                <th scope="col">Github</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((x) => (
                <UserRow key={x.id} userRow={x} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewAllUsers;
