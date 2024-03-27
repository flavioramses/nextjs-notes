"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import axios from "axios";

export default function Home() {
  let [notes, setNotes] = useState([]);
  useEffect(function fetchNotes() {
    console.log("Fetching notes with axios...");
    axios
      .get("http://localhost:8080/notes")
      .then(function setNotesAfterFetch({ data }) {
        setNotes(data.data);
      });
  }, []);
  return (
    <main className={styles.main}>
      <h1>NextJS Notes 🗒️</h1>
      <div className={styles.description}>
        {notes.map(function renderNotes(note, i) {
          return <p key={`note${i}`}>{note?.title}</p>;
        })}
      </div>
    </main>
  );
}
