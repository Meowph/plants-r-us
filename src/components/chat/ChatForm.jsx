import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getChatById, updateChat } from "../../services/chatService.jsx";
import { Button } from "reactstrap";

export const ChatForm = () => {
  const [chat, setChat] = useState({});
  const { chatId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getChatById(chatId).then((data) => {
      setChat(data);
    });
  }, [chatId]);

  const handleSave = (event) => {
    event.preventDefault();
    updateChat(chat).then(() => {
      navigate(`/chat`);
    });
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setChat((prevChat) => ({ ...prevChat, text: value }));
  };

  return (
    <form className="form">
      <h2>Edit Chat</h2>
      <fieldset>
        <input
          className="edit"
          type="text"
          value={chat.text || ""}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <Button onClick={handleSave}>Save Chat</Button>
      </fieldset>
    </form>
  );
};
