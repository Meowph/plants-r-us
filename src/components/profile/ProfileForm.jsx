import { useEffect, useState } from "react"
import { PatchNote  } from "../../services/profileNoteService.jsx"


export const ProfileForm = ({plant}) => {
  const [myPlant, setMyPlant] = useState({ })
  const [noteIdToEdit, setNoteIdToEdit] = useState(0)

  useEffect(() => {
    setMyPlant(plant);
    console.log(plant)
  }, [plant]);

 {/* Something to look at in the future...
//  const handleControlledInput = (e) => {
//   const note = {...newNote }
//  note[e.target.name] = e.target.value 
//  console.log(note)
//  setNewNote(note)
//  console.log(newNote)
*/}
 

  //Adds new note
  const handleSaveNote = (e) => {
    e.preventDefault()
    PatchNote(myPlant?.notes, myPlant?.id).then(() => { 
      setNoteIdToEdit(0); 
    })
  };

  const handleAddNote = (e) => {
    e.preventDefault()
    setNoteIdToEdit(0), setNoteIdToEdit(myPlant?.id)
  }

//() => {} anonymous function

    return (
    <div>
      <h4>Notes:</h4>
      <div>
        <div key={myPlant?.id}>
          <p>{myPlant?.notes}</p>
        </div>

      {myPlant?.id === noteIdToEdit ? (
        <form className="safe-form" onSubmit={(evt)=> {handleSaveNote(evt)}}>
          <textarea
            name="notes"
            placeholder="Got something fun to add?..."
            onChange={(e) => {
              const plantCopy = { ...myPlant };
              plantCopy.notes = e.target.value;
              setMyPlant(plantCopy);
            }}
            value={myPlant?.notes}
            required
          />
          <button type="submit">Save Note</button>
        </form>
      ) : (
        <button onClick={(evt) => {handleAddNote(evt)}}>Add Note</button>
      )}
      </div>
    </div>
  );
};

