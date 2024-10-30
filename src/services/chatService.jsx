export const getAllChat = () => {
  return fetch(`http://localhost:8088/messages?_expand=user`).then((res) => res.json())
}

export const createNewChat = (chat) => {
  return fetch(`http://localhost:8088/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chat),
    });
}

export const getChatById = (chat) => {
  return fetch(
      `http://localhost:8088/messages/${chat}?_expand=user`
    ).then((res) => res.json());
}

export const updateChat = (chat) => {
  return fetch(`http://localhost:8088/messages/${chat.id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(chat)
})
}