import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import TextGeneric from '../textGeneric';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from './styles';
import {NoteItemProps} from '../../interfaces/components/noteItem';

/**
 * NoteItem component representing a note with text, category, and client information.
 *
 * @component
 * @example
 * const MyNoteItem = () => (
 *   <NoteItem
 *     text="My Note Text"
 *     category="Category"
 *     client="Client"
 *     onPress={() => console.log('Note Pressed')}
 *     onRemovePress={() => console.log('Remove Pressed')}
 *   />
 * );
 *
 * @param {NoteItemProps} props - Component props.
 * @param {string} props.text - The text content of the note.
 * @param {string} props.category - The category of the note.
 * @param {string} props.client - The client information related to the note.
 * @param {Function} props.onPress - Function to be called when the note is pressed.
 * @param {Function} props.onRemovePress - Function to be called when the remove icon is pressed.
 * @returns {React.Component} The NoteItem component.
 */
const NoteItem: React.FC<NoteItemProps> = ({
  text,
  category,
  client,
  onPress,
  onRemovePress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.card} onPress={onPress}>
      <View style={styles.contentContainer}>
        <TextGeneric style={styles.title}>{text}</TextGeneric>
        <TextGeneric style={styles.description}>{category}</TextGeneric>
        <TextGeneric style={styles.description}>{client}</TextGeneric>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.deleteContainer}
        onPress={onRemovePress}>
        <Feather name={'trash-2'} size={20} color="#FF0000" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default NoteItem;
