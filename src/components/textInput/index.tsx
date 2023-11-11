import React from 'react';
import {TextInput, View} from 'react-native';
import {GenericInputProps} from '../../interfaces/components/textInput';
import {styles} from './styles';
import {colors} from '../../theme/colors';
import Label from '../label';
import Entypo from 'react-native-vector-icons/Entypo';

/**
 * GenericInput component for text input with optional right icon.
 *
 * @component
 * @example
 * const MyInput = () => (
 *   <GenericInput
 *     label="Username"
 *     placeholder="Enter your username"
 *     value={username}
 *     onChangeText={(text) => setUsername(text)}
 *     showRightIcon
 *     rightIconName="user"
 *   />
 * );
 *
 * @param {GenericInputProps} props - Component props.
 * @param {string} props.label - The label for the input.
 * @param {boolean} props.isRequired - Whether the input is required.
 * @param {Object} props.containerStyle - Custom style for the container.
 * @param {Object} props.inputContainerStyle - Custom style for the input container.
 * @param {boolean} props.showRightIcon - Whether to show a right icon.
 * @param {string} props.rightIconName - The name of the right icon.
 * @returns {JSX.Element} The GenericInput component.
 */
const GenericInput: React.FC<GenericInputProps> = ({
  label,
  isRequired,
  containerStyle,
  inputContainerStyle,
  showRightIcon,
  rightIconName,
  ...props
}): JSX.Element => {
  /**
   * Renders the right icon component based on the provided props.
   *
   * @returns {JSX.Element} The rendered right icon component.
   */
  const renderRightIcon = () => {
    if (showRightIcon && rightIconName) {
      return (
        <Entypo
          style={styles.icon}
          name={rightIconName}
          color={colors.primary}
          size={30}
        />
      );
    }
    return <React.Fragment />;
  };
  return (
    <View style={[styles.container, containerStyle]}>
      {!!label && <Label label={label} isRequired={isRequired} />}
      <View style={[styles.inputContainer, inputContainerStyle]}>
        <TextInput
          {...props}
          selectionColor={`${colors.primary}80`}
          scrollEnabled={false}
          style={[styles.input, props.style]}
        />
        {renderRightIcon()}
      </View>
    </View>
  );
};
// Default props for GenericInput
GenericInput.defaultProps = {
  style: {},
  labelStyle: {},
  secureInput: false,
  keyboardType: 'default',
  showRightIcon: false,
  rightIconName: '',
  rightIconSize: 0,
  value: '',
};

export default GenericInput;
