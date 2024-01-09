import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();

  let messageCounter = 0;

  const sendMessage = (e) => {
    e.preventDefault();

    let { authorName, email, phoneNumber, message } = Object.fromEntries(
      new FormData(e.currentTarget)
    );

    fetch("http://localhost:8080/message/create", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ authorName, email, phoneNumber, message }),
    }).then((data) => {
      console.log(data);
      if (data.ok) {
        alert("Message sent...");
        navigate("/");
        messageCounter++;
        localStorage.setItem("newMessages", messageCounter);
      }
    });
  };

  return (
    <div>
      <header id="head" className="secondary"></header>
      <div className="container">
        <ol className="breadcrumb">
          <li>Home</li>
          <li className="active">Contact us</li>
        </ol>

        <div className="row">
          <article className="col-sm-9 maincontent">
            <header className="page-header">
              <h1 className="page-title">Contact us</h1>
            </header>

            <p>
              We’d love to hear from you. Interested in working together? Fill
              out the form below with some info about your project and I will
              get back to you as soon as I can. Please allow a couple days for
              me to respond.
            </p>
            <br />
            <form onSubmit={sendMessage} method="POST">
              <div className="row">
                <div className="col-sm-4">
                  <input
                    className="form-control"
                    type="text"
                    name="authorName"
                    placeholder="Name"
                  />
                </div>
                <div className="col-sm-4">
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-sm-4">
                  <input
                    className="form-control"
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm-12">
                  <textarea
                    placeholder="Type your message here..."
                    className="form-control"
                    name="message"
                    rows="9"
                  ></textarea>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm-6">
                  <label className="checkbox">
                    <input type="checkbox" /> Sign up for newsletter
                  </label>
                </div>
                <div className="col-sm-6 text-right">
                  <input
                    className="btn btn-action"
                    type="submit"
                    value="Send message"
                  />
                </div>
              </div>
            </form>
          </article>

          <aside className="col-sm-3 sidebar sidebar-right">
            <div className="widget">
              <h4>Address</h4>
              <address>write address...</address>
              <h4>Phone:</h4>
              <address>(+359) 888-888-888</address>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Contact;
