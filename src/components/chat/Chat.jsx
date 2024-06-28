import { useEffect, useState } from "react"
import "./Chat.css"
import { Link } from "react-router-dom"
import { createNewChat, getAllChat } from "../../services/chatService.jsx";


export const Chat = ({ currentUser }) => {
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState({});


  useEffect(() => {
    getAllChat().then((chatArray) => {
      setChats(chatArray);
    });
  }, [message])


  const handleSave = (event) => {
    const chat = {
      userId: currentUser.id,
      text: message.text,
    };
    createNewChat(chat)
  }

  return (
  <div>
    <div className="chat">
      <div className="chat-display">
        <div className="chat-box">
          {chats.map((chat) => {
              if(chat.userId === currentUser.id) {
                  return (
                    <div className="message">
                      <Link to={`${chat.id}/ChatForm`}><button className="chat-button">Edit</button></Link>
                      <p><b>{chat.user.username}</b></p>
                      <p>{chat.text}</p>

                    </div>
                  );

              } else{
                  return (
                      <div className="message">
                        <p><b>{chat.user.username}</b></p>
                        <p>{chat.text}</p>
                      </div>
                    );
              }
          })}
        </div>
      </div>
      <div>
        <form>
          <fieldset>
            <input
              text="text"
              placeholder="What's on your mind?"
              onChange={(event) => {
                const messageCopy = { ...message };
                messageCopy.text = event.target.value;
                setMessage(messageCopy);
              }}
            ></input>
          </fieldset>
          <fieldset>
            <button className="button" onClick={handleSave}>Send Message</button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
);
};