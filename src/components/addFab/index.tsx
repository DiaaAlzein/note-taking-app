import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import {AddFabProps} from '../../interfaces/components/addFab';
import {styles} from './styles';

const AddFab = React.memo(({style, onPress, disabled = false}: AddFabProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.container, style]}
      onPress={onPress}
      disabled={disabled}>
      <AntDesign
        name={'plus'}
        style={{
          width: 18,
          height: 18,
          fontSize: 18,
        }}
        color={'white'}
      />
    </TouchableOpacity>
  );
});

export default AddFab;
