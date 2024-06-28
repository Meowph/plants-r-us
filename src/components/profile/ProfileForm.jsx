import { useEffect, useState } from "react"
import { AnotherPatchNote, PatchNote  } from "../../services/profileNoteService.jsx"


export const ProfileForm = ({plant}) => {
  const [myPlant, setMyPlant] = useState({ })
  const [noteIdToEdit, setNoteIdToEdit] = useState(0)

  useEffect(() => {
    setMyPlant(plant);
    console.log(plant)
  }, []);

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
    PatchNote(myPlant?.notes, plant?.id).then(() => { setNoteIdToEdit(0) })
  };

  const handleAddNote = (e) => {
    e.preventDefault()
    setNoteIdToEdit(0), setNoteIdToEdit(myPlant?.id)
  }

//() => {} anonymous function

    return (
    <div>
      <h2>Notes</h2>

      {myPlant?.id === noteIdToEdit ? (
        <form onSubmit={handleSaveNote}>
          <textarea
            name="notes"
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
        <button onClick={handleAddNote}>Add Note</button>
      )}
      <div>
        <div key={myPlant?.id}>
          <p>{myPlant?.notes}</p>
        </div>
      </div>
    </div>
  );
};

