import * as fileService from "../../services/fileService";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const ChoisePicture = () => {
  const { user } = useContext(AuthContext);

  let navigate = useNavigate();

  const submitPicture = (e) => {
    e.preventDefault();

    let img = Object.fromEntries(new FormData(e.currentTarget));

    let data = Object.values(img)[0];

    const file = new FormData();
    file.append("image", data);

    const id = localStorage.getItem("id");

    fileService
      .uploadPicture(file, id, user.token)
      .then((res) => {
      
        if (res.ok) {
          alert("File uploaded successfully.");
          navigate(`/user/edit-profile/`)
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <header id="head" className="secondary"></header>

      <div className="container">
        <ol className="breadcrumb">
          <li>Users</li>
          <li className="active">Picture</li>
        </ol>
        <div className="row">
          <article className="col-xs-12 maincontent">
            <header className="page-header">
              <h1 className="page-title">Picture</h1>
            </header>
            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="row top-margin"></div>
                  
                  <form onSubmit={submitPicture}>
                    <input
                      className="btn btn-default btn-picture"
                      type="file"
                      id="upload-image"
                      name="image"
                    />

                    <button
                      className="btn btn-primary btn-picture"
                      type="subimt"
                    >
                      Add Picture
                    </button>
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

export default ChoisePicture;
