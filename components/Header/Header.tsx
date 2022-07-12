import styles from "./Header.module.css";

interface ITitleProps {
  title: String;
}

export const Header = ({ title }: ITitleProps) => {
  return (
    <header>
      <h1 className={styles.h1}>{title ? title : "Default Title"}</h1>
    </header>
  );
};
