import {StyleSheet} from 'react-native';
import {hdp} from '../../utils/responsive';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 80,
    marginBottom: '1%',
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100%',
    height: '100%',
  },
  mainModalContainer: {
    position: 'absolute',
    bottom: 0,
    paddingVertical: hdp(4),
    width: '100%',
    left: 0,
    paddingHorizontal: '2%',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: colors.background,
    borderRadius: 8,
  },
  pickerContainer: {
    borderRadius: 8,
    marginBottom: '4%',
    backgroundColor: colors.background,
  },
  actionButton: {
    minWidth: '50%',
    minHeight: hdp(5.5),
    paddingVertical: '2%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 16,
    color: colors.text,
  },
  doneText: {
    fontSize: 16,
    color: colors.primary,
  },
  androidContainer: {
    height: 90,
  },
  androidPicker: {
    width: '100%',
    fontWeight: 'bold',
    opacity: 0,
    borderWidth: 1,
  },
  androidPressableContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 12,
    backgroundColor: colors.background,
  },
});
