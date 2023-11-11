import {StyleSheet} from 'react-native';
import {hdp, wdp} from '../../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton: {
    bottom: hdp(4),
    right: '5%',
    position: 'absolute',
  },
});
