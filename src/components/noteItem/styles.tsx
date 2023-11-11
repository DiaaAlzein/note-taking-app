import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 15,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: colors.border,
    borderWidth: 0.4,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    color: colors.text,
    fontSize: 16,
    paddingBottom: '1%',
  },
  description: {
    color: colors.description,
  },
  deleteContainer: {
    marginLeft: 10,
  },
});
