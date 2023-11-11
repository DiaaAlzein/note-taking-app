import {TextStyle} from 'react-native';

export interface LabelProps {
  label: string;
  labelStyle?: TextStyle;
  isBold?: boolean;
  isRequired?: boolean;
}
