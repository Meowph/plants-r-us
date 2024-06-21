import { useState, useEffect, react } from "react"
import { Button } from 'reactstrap'
import { getAllMessages } from "../../services/messageService.jsx"


export const MessageList = ({currentUser}) => {
  const [allMessages, setAllMessages] = useState([])


  useEffect(() => {
    getAllMessages().then((messages)=>{setAllMessages(messages)})
  }, [])

  return <article className="messages" > Current Messages:
      {allMessages.map(message => {
        return <div className=""><p> On {message.timeStamp}, {message.userId} said: {message.message}</p></div>
      })}
    </article>
  
}

export default (newMessage) => {
  return (
    <Button color="blue">New Message</Button>
  );
};