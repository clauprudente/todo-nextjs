import "../styles/globals.scss";
import React from "react";
import { NotesProvider } from "../context/notes-context";
import type { AppProps } from "next/app";
import { HeadTag } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeadTag>
      <NotesProvider>
        <Component {...pageProps} />
      </NotesProvider>
    </HeadTag>
  );
}

export default MyApp;
