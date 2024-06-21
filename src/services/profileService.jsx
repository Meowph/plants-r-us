export const AddPlantToProfile = (userSafePlant) => {
  return fetch(`http://localhost:8088/userSafePlants`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userSafePlant)
  
  })}

  export const getUserProfile = (userId) => {
    return fetch(`http://localhost:8088/users/${userId}?`).then((res) => res.json())}

  export const getUserSafePlants = () => {
    return fetch ("http://localhost:8088/userSafePlants?_expand=safePlants").then((res) => res.json())
  }