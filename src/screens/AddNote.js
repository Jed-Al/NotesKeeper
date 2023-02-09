import { Button, Card, Input } from "reactstrap";
import { useState } from 'react';

export default function AddNote({ onSaveNote }) {

    const [noteTitle, setNoteTitle] = useState("");
    const [noteText, setNoteText] = useState("");

     
    return (
        <Card className="add-note">
            <Input
                placeholder="Add a title to your note"
                onChange={e => setNoteTitle(e.target.value)}
                value={noteTitle}>
            </Input>
            <Input
                className="note-input"
                placeholder="Type your note here..."
                onChange={e => setNoteText(e.target.value)}
                value={noteText}>
            </Input>
            <div>
                <Button onClick={() => {
                    onSaveNote(noteTitle, noteText)
                }}>Add</Button>
            </div>
        </Card>
    );
}