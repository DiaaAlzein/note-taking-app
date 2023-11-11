import {StyleSheet} from 'react-native';
import {getByScreenSize} from '../../utils/responsive';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: getByScreenSize(16, 18),
    marginTop: '4%',
    marginBottom: '1%',
  },
  redContainer: {
    color: colors.error,
  },
});
