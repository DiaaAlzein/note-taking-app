import {TextInputProps, TextStyle, ViewStyle} from 'react-native';

export interface GenericInputProps extends TextInputProps {
  label?: string;
  labelStyle?: TextStyle;
  secureInput?: boolean;
  isRequired?: boolean;
  showRightIcon?: boolean;
  rightIconName?: string;
  rightIconSize?: number;
  containerStyle?: ViewStyle;
  inputContainerStyle?: ViewStyle;
}
