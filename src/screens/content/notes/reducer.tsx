import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Note, NoteState} from '../../../interfaces/screens/notes';

/**
 * The initial state for the note state.
 * @type {NoteState}
 */
const initialState: NoteState = {
  notes: [],
  categories: [],
  clients: [],
  isError: false,
  isLoading: false,
};

/**
 * A Redux slice for handling the note state and its actions.
 * @type {Slice<NoteState>}
 */
export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    /**
     * Sets the data for categories, users, and notes.
     * @param {NoteState} state - The current state.
     * @param {PayloadAction<{categories: PickerItem[]; users: PickerItem[]; notes: Note[]}>} action - The payload action.
     */
    setData: (
      state: NoteState,
      action: PayloadAction<{
        categories: string[];
        clients: string[];
        notes: Note[];
      }>,
    ) => {
      state.isLoading = false;
      state.isError = false;
      state.categories = action.payload.categories;
      state.clients = action.payload.clients;
      state.notes = action.payload.notes;
    },

    /**
     * Adds a new note to the state.
     * @param {NoteState} state - The current state.
     * @param {PayloadAction<Note>} action - The payload action.
     */
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.unshift(action.payload);
    },

    /**
     * Updates an existing note in the state.
     * @param {NoteState} state - The current state.
     * @param {PayloadAction<{ id: number; updatedNote: Note }>} action - The payload action.
     */
    updateNote: (
      state: NoteState,
      action: PayloadAction<{id: number; updatedNote: Note}>,
    ) => {
      const {id, updatedNote} = action.payload;
      const index = state.notes.findIndex((note: Note) => note.id === id);
      if (index !== -1) {
        state.notes[index] = updatedNote;
      }
    },

    /**
     * Deletes a note from the state.
     * @param {NoteState} state - The current state.
     * @param {PayloadAction<number>} action - The payload action containing the note ID.
     */
    deleteNote: (state: NoteState, action: PayloadAction<number>) => {
      const noteId = action.payload;
      state.notes = state.notes.filter((note: Note) => note.id !== noteId);
    },

    /**
     * Sets the entire list of notes in the state.
     * @param {NoteState} state - The current state.
     * @param {PayloadAction<Note[]>} action - The payload action containing the list of notes.
     */
    setNotesList: (state: NoteState, action: PayloadAction<Note[]>) => {
      state.notes = action.payload;
    },

    /**
     * Sets the error state to true.
     * @param {NoteState} state - The current state.
     */
    setError: (state: NoteState) => {
      state.isLoading = false; // End loading when setting an error
      state.isError = true;
    },
    /**
     * Starts the loading state.
     * @param {NoteState} state - The current state.
     */
    startLoading: (state: NoteState) => {
      state.isLoading = true;
      state.isError = false; // Reset error to false when starting loading
    },
  },
});

export const {
  setData,
  addNote,
  updateNote,
  deleteNote,
  setNotesList,
  setError,
  startLoading,
} = notesSlice.actions;

export default notesSlice.reducer;
