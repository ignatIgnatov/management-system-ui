import { Link } from "react-router-dom";

const SuccessfulRegistration = () => {
  return (
    <div>
      <header id="head">
        <div className="container">
          <div className="row">
            <h1 className="lead">
              Successful registration!
            </h1>
            <h4 className="tagline">
              <br />
              Please <Link to="/login">login here...</Link>
            </h4>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SuccessfulRegistration;
