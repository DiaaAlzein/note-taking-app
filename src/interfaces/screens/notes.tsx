/**
 * Represents a note with text, client, category, and id.
 * @interface
 */
export interface Note {
  id: number;
  text: string;
  client: string;
  category: string;
}

export interface NoteState {
  notes: Note[];
  categories: string[];
  clients: string[];
  isLoading: boolean;
  isError: boolean;
}
