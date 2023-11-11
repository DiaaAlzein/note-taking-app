import {ViewStyle} from 'react-native';

export interface PickerItem {
  name: string;
  id: number;
}
export interface GenericPickerProps {
  style?: ViewStyle;
  onValueChange?: (value: string | number) => void;
  list: string[] | PickerItem[];
  labelKey?: keyof PickerItem;
  valueKey?: keyof PickerItem;
  label: string;
  value?: string;
  disabled?: boolean;
  isRequired?: boolean;
}
