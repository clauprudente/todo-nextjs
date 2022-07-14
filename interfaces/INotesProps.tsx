import INote from "./INote";

interface INotesProps {
  notes: INote[];
  onDelete: Function;
  onCheck: Function;
}

export default INotesProps;
