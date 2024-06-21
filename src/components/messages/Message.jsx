export const getAllMessages = () => {
  return fetch("http://localhost:8088/messages")
  .then((response) => response.json())
}

export const getMessagesByUser = () => {
  return fetch("http://localhost:8088/messages?_expand=user&_embed=userMessages")
  .then((res) => res.json())
}

export const createNewMessage = (newMessage) => {
  return fetch(`http://localhost:8088/messages`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage)
  })
}


export const editMessage = (message) => {
  return fetch(`http://localhost:8088/messages/${message.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(message)
  })
}