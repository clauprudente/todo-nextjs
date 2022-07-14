import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/home.module.scss";
import { Header, Notes } from "../components";
import { Button } from "@mui/material";
import { useNotesContext } from "../context/notes-context";

const Home: NextPage = () => {
  const { notes, onDelete, onCheck } = useNotesContext();

  return (
    <div className={styles.container}>
      <Header
        title="Notas
      "
      />
      <Link href="/new-note">
        <Button variant="contained">Criar nota</Button>
      </Link>

      <Notes notes={notes} onDelete={onDelete} onCheck={onCheck} />
    </div>
  );
};

export default Home;
