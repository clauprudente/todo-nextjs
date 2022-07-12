import "../styles/globals.css";
import React from "react";
import { NotesProvider } from "../context/notes-context";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotesProvider>
      <Component {...pageProps} />
    </NotesProvider>
  );
}

export default MyApp;
