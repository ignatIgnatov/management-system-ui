import Message from "./Message";
import * as messageService from "../../services/messageService";

import { useState, useEffect } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

const AllMessages = () => {
  const { user } = useContext(AuthContext);

  const [messages, setMessages] = useState([]);

  if (localStorage.getItem("newMessages")) {
    localStorage.removeItem("newMessages");
  }

  useEffect(() => {
    messageService.getAllMessages(user.token).then((data) => {
      setMessages(Object.values(data));
    });
  }, []);

  return (
    <div>
      <header id="head" className="secondary"></header>

      <div className="container">
        <ol className="breadcrumb">
          <li>Admin</li>
          <li className="active">All Messages</li>
        </ol>
      </div>

      <div className="jumbotron top-space">
        <div className="container">
          <h3 className="text-center thin">All received messages</h3>

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Created</th>
                <th scope="col">Author Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Message</th>

                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {messages.map((x) => (
                <Message key={x.id} message={x} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllMessages;
