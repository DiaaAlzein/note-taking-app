import React, {useEffect, useLayoutEffect, useState} from 'react';
import MainLayout from '../../mainLayout';
import {
  NoteManagerForm,
  NoteManagerProps,
} from '../../../interfaces/screens/noteManager';
import TextInput from '../../../components/textInput';
import {checkIfFormValid, handleChange} from '../../../utils/form';
import Picker from '../../../components/picker';
import {useSelector} from 'react-redux';
import {RootState, store} from '../../../redux/store';
import GenericButton from '../../../components/button';
import {Note} from '../../../interfaces/screens/notes';
import {addNote, updateNote} from '../notes/reducer';
import {
  finishLoading,
  startLoading,
} from '../../../connected-components/loading/actions';
import {config} from '../../../config';
import {hdp} from '../../../utils/responsive';

const mandatoryFields = ['text', 'category', 'client'];

/**
 * React component for managing notes. Allows users to add or edit notes.
 *
 * @component
 * @example
 * // Usage in a navigation stack
 * <Stack.Screen
 *   name={screens.noteManager}
 *   component={NoteManager}
 *   options={{
 *     title: 'Add Note', // The title displayed in the navigation header
 *   }}
 * />
 *
 * @param {NoteManagerProps} props - Component props.
 * @param {Object} props.navigation - The navigation object provided by React Navigation.
 * @param {Object} props.route - The route object containing parameters passed to the component.
 * @param {Note} props.route.params.selected - The selected note if editing an existing one.
 *
 * @returns {React.Component} The NoteManager component.
 */
const NoteManager: React.FC<NoteManagerProps> = ({navigation, route}) => {
  const {categories, clients, notes} = useSelector(
    (state: RootState) => state.notes,
  );
  const {selected} = route?.params || {};
  const [form, setForm] = useState<NoteManagerForm>({
    text: selected?.text,
    category: selected?.category,
    client: selected?.client,
  });
  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    const isComplete = checkIfFormValid(form, mandatoryFields);
    setIsFormComplete(isComplete);
  }, [form]);

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerTitle: selected ? `Edit Note #${selected?.id || '-'}` : 'Add Note',
    });
  }, [selected, navigation]);

  /**
   * Handles the submission of the note form.
   * If editing an existing note, updates the note; otherwise, adds a new note.
   * Navigates back to the previous screen after submission.
   *
   * @async
   * @function
   * @throws {Error} If an error occurs during the submission process.
   * @returns {void}
   */
  const submit = async () => {
    try {
      startLoading();
      const updatedNote: Note = {
        id: selected ? selected.id : notes.length + 1,
        text: form.text || '',
        category: form.category || '',
        client: form.client || '',
      };
      if (selected) {
        store.dispatch(updateNote({id: selected.id, updatedNote}));
      } else {
        store.dispatch(addNote(updatedNote));
      }
      navigation?.goBack();
    } catch (e) {
      if (config.debug) console.log(e);
    } finally {
      finishLoading();
    }
  };
  return (
    <MainLayout keyboardAvoidScrollView>
      <TextInput
        label={'Note'}
        multiline
        numberOfLines={5}
        style={{minHeight: hdp(18)}}
        value={form.text}
        onChangeText={val => handleChange('text', val, form, setForm)}
      />
      <Picker
        onValueChange={val => handleChange('category', val, form, setForm)}
        list={categories || []}
        label={'Category'}
        value={form.category}
      />
      <Picker
        onValueChange={val => handleChange('client', val, form, setForm)}
        list={clients || []}
        label={'Client'}
        value={form.client}
      />
      <GenericButton
        style={{marginTop: '4%'}}
        radius={4}
        onPress={submit}
        disabled={!isFormComplete}
        label={selected ? 'Update note' : 'Add note'}
      />
    </MainLayout>
  );
};

export default NoteManager;
