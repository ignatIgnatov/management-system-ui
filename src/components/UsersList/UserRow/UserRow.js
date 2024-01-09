import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

import * as userService from "../../../services/userService";

const UserCard = ({ userRow }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const id = userRow.id;
  const token = user.token;
  

  const updateHandler = () => {
    localStorage.setItem("id", id);
    navigate("/user/edit-profile")
  }

  const deleteHandler = () => {
   userService.deleteUser(id, token)
        .then(() => {
          window.location.reload();
        });
  }

  return (
    <>
      <tr>
        <th scope="row">{userRow.id}</th>
        <td>{userRow.firstName}</td>
        <td>{userRow.lastName}</td>
        <td>{userRow.username}</td>
        <td>{userRow.email}</td>
        <td>{userRow.authorities[0].authority}</td>
        <td>{userRow.age}</td>
        <td>{userRow.gender}</td>
        <td>{userRow.city}</td>
        <td>{userRow.address}</td>
        <td>{userRow.education}</td>
        <td>{userRow.workplace}</td>
        <td>{userRow.facebook}</td>
        <td>{userRow.github}</td>

        <td>
          <input
          onClick={updateHandler}
            className="btn btn-update"
            type="button"
            name="update"
            value="Update"
          />
        </td>
        <td>
          <input
            onClick={deleteHandler}
            className="btn btn-delete"
            type="button"
            name="delete"
            value="Delete"
          />
        </td>
      </tr>

      {/* <li className="col-md-3 col-sm-6 highlight">
      <div className="h-caption">
        <h4>
          <i className="fa fa-smile-o fa-5"></i>
          {user.firstName} {" "} {user.lastName}
        </h4>
      </div>
      <div className="h-body text-center">
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Roles: {" "} 
          {user.authorities[0].authority}
          </p>
        <Link className="button" to={`api/users/details/${user._id}`}>
        Details
      </Link>
      </div>
      
    </li> */}
    </>
  );
};

export default UserCard;
