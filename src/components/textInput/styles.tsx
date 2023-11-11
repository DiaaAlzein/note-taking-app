import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {fonts} from '../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 7,
    borderColor: colors.border,
  },
  input: {
    paddingHorizontal: 10,
    minHeight: 40,
    paddingVertical: 5,
    color: colors.text,
    width: '100%',
    fontFamily: fonts.regular,
  },
  icon: {
    position: 'absolute',
    right: '2%',
  },
});
