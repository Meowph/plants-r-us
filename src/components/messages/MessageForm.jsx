import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createNewMessage } from "./Message.jsx"

export const MessageForm = ({ currentUser }) => {
  const [message, createMessage] = useState({message: ""})

  const navigate = useNavigate()

  const handleSave = (event) => {
      event.preventDefault()

      if (message.message) {
          const newMessage = {
              userId: currentUser,
              message: message.message,
          }

          createNewMessage(newMessage).then(() => {
              navigate("/messages")
          })
      } else {
          window.alert("Please fill out ALL fields!")
      }
  }

  const handleInputChange = (event) => {
      const stateCopy = { ...message } 
      stateCopy[event.target.name] = event.target.value
      createMessage(stateCopy)
  }

  return (
      <form className="profile">
          <h2>New Message</h2>
          <fieldset>
              <div className="form-group">
                  <label>Message:</label>
                  <input 
                      type="text"
                      name="message"
                      value={message?.message}
                      onChange={handleInputChange}
                      required
                      className="form-control"/>
              </div>
              <div className="form-group">
                  <button className="form-btn btn-primary" 
                  onClick={handleSave}>Post message</button>
              </div>
          </fieldset>
      </form>
  )
}