import { IconButton, Checkbox } from "@mui/material";
import styles from "./Notes.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import INote from "../../interfaces/INote";
import React from "react";
import { useRouter } from "next/router";
import { useNotesContext } from "../../context/notes-context";
interface INotesProps {
  notes: INote[];
  onDelete: Function;
  onCheck: Function;
}

export const Notes = (props: INotesProps) => {
  const router = useRouter();
  const { notes } = props;
  const { setIsEdit, setIndexEdit } = useNotesContext();

  const handleDelete = (index: number) => {
    props.onDelete(index);
  };
  const handleChange = (event: React.ChangeEvent, index: number) => {
    props.onCheck(event.target.checked, index);
  };

  const handleEdit = (index: number) => {
    setIndexEdit(index);
    setIsEdit(true);
    router.push("/new-note");
  };

  return (
    <ul className={styles.ul}>
      {notes.map((note, index) => (
        <li key={index} className={note.checked ? `${styles.active}` : ""}>
          <div className={styles.flex}>
            <Checkbox
              checked={note.checked ? true : false}
              onChange={(e) => handleChange(e, index)}
              inputProps={{ "aria-label": "controlled" }}
            />
            {note.title}
            <IconButton
              color="primary"
              aria-label="delete"
              size="small"
              onClick={() => handleEdit(index)}
            >
              <EditIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="delete"
              size="small"
              onClick={() => handleDelete(index)}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </div>
          <label>{note.description}</label>
        </li>
      ))}
    </ul>
  );
};
