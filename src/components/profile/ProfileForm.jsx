
import { useEffect, useState } from "react"
import { PatchNote  } from "../../services/profileNoteService.jsx"


export const NoteForm = ({plant, otherPlant}) => {
  const [myPlant, setMyPlant] = useState({ })
  const [noteIdToEdit, setNoteIdToEdit] = useState(0)

  const [myOtherPlant, setMyOtherPlant] = useState({ })
  const [noteIdToOtherEdit, setNoteIdToOtherEdit] = useState(0)

  useEffect(() => {
    setMyPlant(plant);
    setMyOtherPlant(otherPlant)
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
    PatchNote(myPlant.notes, myPlant.id).then(() => { setNoteIdToEdit(0) })
    AnotherPatchNote(myOtherPlant.notes, myOtherPlant.id).then(() => { setNoteIdToOtherEdit(0)})
  };

  const handleAddNote = (e) => {
    e.preventDefault()
    setNoteIdToEdit(0), setNoteIdToEdit(myPlant.id)
    setNoteIdToOtherEdit(0), setNoteIdToOtherEdit(myOtherPlant.id) 
  }

//() => {} anonymous function

  return (
    <div>
      <h2>Notes</h2>

      { myPlant.id == noteIdToEdit ? <form onSubmit={ handleSaveNote }>
        <textarea
         name="notes"
         onChange={(e) => {
          const plantCopy = { ...myPlant };
          plantCopy.notes = e.target.value;
          setMyPlant(plantCopy);
        }}
          value={ myPlant.notes }
          required
        />
        <button type="submit"> Save Note </button>
      </form> : <button onClick={ (e) => { handleAddNote(e) }}> Add Note </button>}
      <div>
          <div key={myPlant.id}>
            <p>{myPlant.notes}</p>
          </div>
        
      </div>
    </div>
  );
};

