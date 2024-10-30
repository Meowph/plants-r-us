import { useEffect, useState } from "react"
import { AnotherPatchNote } from "../../services/profileNoteService.jsx"
import "./Profile.css"


export const DeadlyProfileForm = ({otherPlant}) => {

  const [myOtherPlant, setMyOtherPlant] = useState({ })
  const [noteIdToOtherEdit, setNoteIdToOtherEdit] = useState(0)

  useEffect(() => {
    setMyOtherPlant(otherPlant)
    console.log(otherPlant)
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
    AnotherPatchNote(myOtherPlant?.notes, otherPlant?.id).then(() => { setNoteIdToOtherEdit(0)})
  };

  const handleAddNote = (e) => {
    e.preventDefault()
    setNoteIdToOtherEdit(0), setNoteIdToOtherEdit(myOtherPlant?.id) 
  }

//() => {} anonymous function

    return (
    <div>
      <h4 style={{
        marginTop: '10px'
      }}>Notes:</h4>

      {myOtherPlant?.id === noteIdToOtherEdit ? (
        <form className="deadly-form" onSubmit={handleSaveNote}>
          <textarea
            name="notes"
            placeholder="Got something fun to add?..."
            onChange={(e) => {
              const plantCopy = { ...myOtherPlant };
              plantCopy.notes = e.target.value;
              setMyOtherPlant(plantCopy);
            }}
            value={myOtherPlant?.notes}
            required
          />
          <button type="submit">Save Note</button>
        </form>
      ) : (
        <button onClick={handleAddNote}>Add Note</button>
      )}
      <div>
        <div key={myOtherPlant?.id}>
          <p>{myOtherPlant?.notes}</p>
        </div>
      </div>
    </div>
  );
};

