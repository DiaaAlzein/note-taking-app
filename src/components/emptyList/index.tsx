import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {EmptyListProps} from '../../interfaces/components/emptyList';

/**
 * Component for displaying an empty list message.
 * @component
 */
const EmptyList: React.FC<EmptyListProps> = ({label}) => {
  /**
   * Renders the EmptyList component.
   * @returns {JSX.Element} - JSX element representing the EmptyList component.
   */
  return (
    <View style={styles.container}>
      <Text style={styles.emptyText}>{label}</Text>
    </View>
  );
};

export default EmptyList;
