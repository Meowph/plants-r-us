  export const getUserProfile = (userId) => {
    return fetch(`http://localhost:8088/users/${userId}`).then((res) => res.json())
  }

  {/*---------------------------------------------------------------------------*/}
    
  export const AddPlantToProfile = (userSafePlant) => {
    return fetch(`http://localhost:8088/userSafePlants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userSafePlant)
    
    })}

  export const getUserSafePlants = () => {
    return fetch ('http://localhost:8088/userSafePlants?_expand=safePlant').then((res) => res.json())
  }

  export const DeleteSafePlant=(plantId)=>{
    return fetch(`http://localhost:8088/userSafePlants/${plantId}`,{ 
    method: "DELETE",
  })
  }

 {/*---------------------------------------------------------------------------*/}

  export const getUserDeadlyPlants = () => {
    return fetch ('http://localhost:8088/userDeadlyPlants?_expand=deadlyPlant').then((res) => res.json())
  }

  export const DeleteDeadlyPlant=(plantId)=>{
    return fetch(`http://localhost:8088/userDeadlyPlants/${plantId}`,{ 
    method: "DELETE",
  })
  }

  export const AddDeadlyPlantToProfile = (userDeadlyPlant) => {
    return fetch(`http://localhost:8088/userDeadlyPlants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDeadlyPlant)
    
    })}