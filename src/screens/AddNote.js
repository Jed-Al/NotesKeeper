import { Button, Card, CardTitle, input } from "reactstrap";
import { useState } from 'react';
import "./AddNote.css"

export default function AddNote({ onSaveNote }) {

    const [noteTitle, setNoteTitle] = useState("");
    const [noteText, setNoteText] = useState("");
    const characterLimit = 250;

    const handleOnChange = (e) => {
        if (characterLimit - e.target.value.length >= 0){
           setNoteText(e.target.value);
        }
    }

     
    return (
        <Card className="add-note">
            <CardTitle tag="h5">Add your note here</CardTitle>
            <input
            className="note"
                placeholder="Add a title to your note"
                onChange={e => setNoteTitle(e.target.value)}
                value={noteTitle}>
            </input>
            <textarea
                className="note note-input"
                placeholder="Type your note here..."
                onChange={handleOnChange}
                value={noteText}>
            </textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <Button onClick={() => {
                    {onSaveNote(noteTitle, noteText)}
                    setNoteText("")
                    setNoteTitle("")
                    // handleBlankNotes()
                }}>Add</Button>
            </div>
        </Card>
    );
}