export const getAllMessages = () => {
  return fetch("http://localhost:8088/messages")
  .then((response) => response.json())
}

export const createMessage = () => {
  return fetch("http://localhost:8088/newMessage")
  .then((response) => response.json())
}