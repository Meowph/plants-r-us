export const getNoteByPlantId = (id) => {
  return fetch(`http://localhost:8088/userSafePlants/${id}`).then((res) => res.json());
};

export const AddNewNote = (newUserNote) => {
  return fetch(`http://localhost:8088/userSafePlants`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserNote)
  
  })}

export const UpdateNote = (updateUserNotes) => {
  return fetch(`http://localhost:8088/userSafePlants/${updatedUserNotes.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateUserNotes)
  
  })}

  export const DeleteNote=()=>{
    return fetch(`http://localhost:8088/userSafePlants/`,{ 
    method: "DELETE",
  })
  }

  //Pass note in as param... (changes one field in object)
  export const PatchNote = (myNote, userSafePlantId) => {
    return fetch(`http://localhost:8088/userSafePlants/${userSafePlantId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( { notes: myNote } )
    
    })}

    export const AnotherPatchNote = (myNote, userSafePlantId) => {
      return fetch(`http://localhost:8088/userDeadlyPlants/${userSafePlantId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( { notes: myNote } )
      
      })}