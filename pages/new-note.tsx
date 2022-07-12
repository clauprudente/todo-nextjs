import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Header } from "../components";
import { Button, TextField } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "../styles/new-note.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useNotesContext } from "../context/notes-context";
import INote from "../interfaces/INote";

interface INewNotesProps {
  isEdit?: boolean;
  editIndex: number;
}

const NewNote: NextPage<INewNotesProps> = () => {
  const router = useRouter();
  const [newNote, setNewNote] = useState<INote[]>([
    { title: "", description: "", checked: false },
  ]);

  const { isEdit, indexEdit, addNote, onEdit, getNote } = useNotesContext();

  useEffect(() => {
    if (isEdit) {
      setNewNote(getNote(indexEdit));
    }
  }, []);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNote({
      title: event.target.value,
      description: newNote.description,
      checked: newNote.checked,
    });
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewNote({
      title: newNote.title,
      description: event.target.value,
      checked: newNote.checked,
    });
  };

  const handleClick = () => {
    if (isEdit) {
      onEdit({
        title: newNote.title,
        description: newNote.description,
        checked: newNote.checked,
      });
    } else {
      addNote({
        title: newNote.title,
        description: newNote.description,
        checked: newNote.checked,
      });
    }
    router.push("/");
  };
  return (
    <div className={styles.container}>
      <Header
        title="Criar Notas
      "
      />
      <div className={styles.wrapper}>
        <Link href="/">
          <Button variant="text" startIcon={<ArrowBackIosIcon />}>
            Voltar
          </Button>
        </Link>
        <TextField
          id="outlined-static"
          fullWidth
          label="Título"
          value={newNote.title}
          onChange={handleTitleChange}
        />
        <TextField
          id="outlined-multiline-static"
          fullWidth
          label="Descrição"
          multiline
          rows={8}
          value={newNote.description}
          onChange={handleDescriptionChange}
        />
        <Button variant="contained" onClick={() => handleClick()}>
          {isEdit ? "Alterar" : "Criar nota"}
        </Button>
      </div>
    </div>
  );
};

NewNote.defaultProps = {
  isEdit: false,
  editIndex: 0,
};
export default NewNote;
