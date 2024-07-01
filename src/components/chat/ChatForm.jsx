import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getChatById, updateChat } from "../../services/chatService.jsx"
import { Button } from "reactstrap"

export const ChatForm = () => {
  const [chat, setChat] = useState({});
  const { chatId } = useParams();


  useEffect(() => {
    getChatById(chatId).then((data) => {
      const chatObj = data;
      setChat(chatObj);
    });
  }, [chatId]);

  const handleSave = (event) => {
    event.preventDefault()
    const editedChat = {
        id: chat.id,
        userId: chat.userId,
        text: chat.text
    }
    updateChat(editedChat).then(() => {
        navigate(`/chat`)
    })
  }

  const navigate = useNavigate()


  return (
    <form className="form">
      <h2>Edit Chat</h2>
      <fieldset>
        <input
        className="edit"
          text="text"
          placeholder={chat.text}
          onChange={(event) => {
            const chatCopy = { ...chat };
            chatCopy.text = event.target.value;
            setChat(chatCopy);
          }}
        ></input>
      </fieldset>
      <fieldset>
        <Button onClick={handleSave}>Save Chat</Button>
      </fieldset>
    </form>
  );
};