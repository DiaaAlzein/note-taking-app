import {StyleSheet} from 'react-native';
import {hdp} from '../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: hdp(88),
  },
  emptyText: {
    fontSize: 16,
    color: 'grey',
    marginTop: '4%',
  },
});
