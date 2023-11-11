export interface NoteItemProps {
  text: string;
  category: string;
  client: string;
  onPress: () => void;
  onRemovePress: () => void;
}
