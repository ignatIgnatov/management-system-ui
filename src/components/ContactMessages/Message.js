import * as messageService from "../../services/messageService";

import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

const Message = ({ message }) => {
  const { user } = useContext(AuthContext);

  const deleteHandler = () => {
    messageService.deleteMessage(message.id, user.token).then(() => {
      window.location.reload();
    });
  };

  return (
    <>
      <tr>
        <th scope="row">{message.id}</th>
        <td>{message.created}</td>
        <td>{message.authorName}</td>
        <td>{message.email}</td>
        <td>{message.phoneNumber}</td>
        <td>{message.message}</td>
        <td>
          <input
              // onClick={replyHandler}
            className="btn btn-update"
            type="button"
            name="update"
            value="Reply"
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
    </>
  );
};

export default Message;
