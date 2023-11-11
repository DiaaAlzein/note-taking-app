import {PickerItem} from '../components/picker';
import {MainScreenProps} from './mainScreen';
import {RouteProp} from '@react-navigation/native';
import {Note} from './notes';

export interface NoteManagerProps extends MainScreenProps {
  route: RouteProp<{params: {selected: Note | undefined}}, 'params'>;
}
export interface NoteManagerForm {
  text?: string;
  client?: string;
  category?: string;
}
