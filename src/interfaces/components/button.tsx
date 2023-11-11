import {TextStyle, ViewStyle} from 'react-native';

export interface GenericButtonProps {
  label: string;
  radius?: number;
  disabled?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}
