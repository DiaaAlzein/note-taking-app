import React from 'react';
import {GenericButtonProps} from '../../interfaces/components/button';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {styles} from './styles';
import {getByScreenSize} from '../../utils/responsive';
import {colors} from '../../theme/colors';
import TextGeneric from '../textGeneric';

/**
 * GenericButton component.
 *
 * @component
 * @example
 * const MyButton = () => (
 *   <GenericButton
 *     label="Press me"
 *     onPress={() => console.log('Button pressed')}
 *   />
 * );
 *
 * @param {GenericButtonProps} props - Component props.
 * @param {string} props.label - The button label.
 * @param {Object} props.labelStyle - Custom style for the button label.
 * @param {number} props.radius - The button border radius.
 * @param {boolean} props.disabled - Whether the button is disabled.
 * @param {Function} props.onPress - Function to be called when the button is pressed.
 * @param {Object} props.style - Custom style for the button container.
 * @returns {React.Component} The GenericButton component.
 */
const GenericButton: React.FC<GenericButtonProps> = ({
  label,
  radius,
  disabled,
  onPress,
  style,
  ...props
}) => {
  /**
   * Represents the height of the button based on the screen size.
   * @type {number}
   */
  const buttonHeight = getByScreenSize(50, 60);

  /**
   * Represents the default button styles.
   * @type {ViewStyle}
   */
  const defaultButtonStyles: ViewStyle = {
    height: buttonHeight,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: radius,
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        defaultButtonStyles,
        disabled && {opacity: 0.6},
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      {...props}>
      <TextGeneric bold={true} style={styles.title}>
        {label}
      </TextGeneric>
    </TouchableOpacity>
  );
};

/**
 * Default props for the GenericButton component.
 * @type {Object}
 */
GenericButton.defaultProps = {
  radius: 2,
  disabled: false,
  style: {},
};

export default GenericButton;
