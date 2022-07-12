import React, { useState, useContext } from "react";
import INote from "../interfaces/INote";

type notesContextProps = {
  notes: INote[];
  isEdit: boolean;
  setIsEdit: Function;
  indexEdit: number;
  setIndexEdit: Function;
  setNotes: Function;
  addNote: Function;
  onDelete: Function;
  onCheck: Function;
  onEdit: Function;
  getNote: Function;
};

export const NotesContext = React.createContext<notesContextProps>({
  notes: [],
  isEdit: false,
  setIsEdit: () => null,
  indexEdit: 0,
  setIndexEdit: () => null,
  setNotes: () => null,
  addNote: () => null,
  onDelete: () => null,
  onCheck: () => null,
  onEdit: () => null,
  getNote: () => null,
});

export const useNotesContext = () => {
  return useContext(NotesContext);
};

//TODO: Resolver any
export const NotesProvider = ({ children }: any) => {
  const [notes, setNotes] = useState<INote[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [indexEdit, setIndexEdit] = useState<number>(0);

  const addNote = (newNote: INote) => {
    const newArray: INote[] = notes;
    newArray.push(newNote);
    setNotes(newArray);
  };

  const onDelete = (index: number) => {
    const newArray = notes.filter((note, i) => {
      return i !== index;
    });
    setNotes(newArray);
  };

  const onCheck = (event: boolean, index: number) => {
    const newArray = notes.map((note, i) => {
      if (i === index) {
        note.checked = event;
      }
      return note;
    });
    setNotes(newArray);
  };

  const onEdit = (newNote: INote) => {
    const newArray = notes;
    newArray[indexEdit] = newNote;
    setNotes(newArray);
    setIsEdit(false);
    setIndexEdit(0);
  };

  const getNote = () => {
    return notes.find((note, i) => i === indexEdit);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        isEdit,
        setIsEdit,
        indexEdit,
        setIndexEdit,
        setNotes,
        addNote,
        onDelete,
        onCheck,
        onEdit,
        getNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
