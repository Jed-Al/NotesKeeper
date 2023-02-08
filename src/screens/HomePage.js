import { useState } from 'react';
import { Button, Input } from 'reactstrap';
import './HomePage.css';
import Table from './Table';

export default function HomePage() {

    const [notes, setNotes] = useState([
        {
            title: "First Dummy title",
            content: "Dummy content",
            date: "08/02/23"
        },
        {
            title: "Second Dummy title",
            content: "Dummy content",
            date: "08/02/23"
        },
        {
            title: "Third Dummy title",
            content: "Dummy content",
            date: "08/02/23"
        }
    ]);
    const [query, setQuery] = useState("");

    return (
        <div className="home-page">
            <h1 className="heading">Notes Keeper</h1>
            <div className="search">
                <Input placeholder="Search for your notes" />
                <Button>Search</Button>
            </div>
            <div className="notes-section">
                <h2 className="note-title">Notes</h2>
                <Button>Create new Note</Button>

            </div >
            <div className="notes-list">
            {notes.map((note) => (
                <Table title={note.title} content={note.content} date={note.date}></Table>
            ))
            }
            </div>
            </div>
    );
}

