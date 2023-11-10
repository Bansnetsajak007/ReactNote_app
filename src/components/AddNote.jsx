/*
  Project planning
  1.Simple note app UI
  2.Add Note functionality
  3.Delete Note functionality
  4.Search Note functionality

*/


import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// child component
function NoteCard(props) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Note:{props.u_id}</Card.Title>
        <Card.Text>
          {props.message}
        </Card.Text>
        <Button variant="primary" onClick={props.onDelete}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

//parent component
function AddNote() {

  const [note , setNote] = useState('');

  const [notes, setNotes] = useState([]);

  const handleChange = (event) => {
    setNote(event.target.value);
  };

  const handleAddNote = () => {
    if(note.trim() !== "" ){
      const newNotesArray = [...notes,note] ;
      setNotes(newNotesArray); //creates a new array containing all the previous notes (...notes) and adds the current note to it
      localStorage.setItem("Notes", JSON.stringify(newNotesArray));
      setNote('');
    }
  };

  //function to delete note
  const deleteNote = (indexToDelete) => {
    const updateNotes = notes.filter((_, index) => index !== indexToDelete)
    setNotes(updateNotes);
    localStorage.setItem("Notes", JSON.stringify(updateNotes));  //store the notes after deletion
  }

  //retrieve notes from local storage on component mount (initial rendering of component in the DOM)
  useEffect(() => {
    const storedNotes = localStorage.getItem("Notes");
    if (storedNotes) {
      // JSON.stringify(storedNotes);
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  
  return (
    <Form>

    <div className="d-flex align-items-center justify-content-center">
    <h2 className='mt-5'>Welcome to Note App</h2>
    </div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='font-weight-bold'>Add Your Notes</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder='your notes here...' onChange={handleChange} value={note}/>
      </Form.Group>
      <Button variant="primary" onClick={handleAddNote}>Add</Button>
      <br />
      <br />
      {notes.map((note, index) => (
         <NoteCard u_id = {index + 1} key= {index} message = {note} onDelete = {() => deleteNote(index)} />
      ))}
    </Form>
  );
} 

export default AddNote;