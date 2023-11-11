import React from 'react';
import {Text} from 'react-native';
import {fonts} from '../../theme/fonts';

/**
 * Text component that renders text with customizable style and font family.
 * @param {Object} props - Component props.
 * @param {Object} props.style - Custom style for the text.
 * @param {string} props.fontFamily - The font family to be used for the text.
 * @param {boolean} props.bold - Whether the text should be bold or not.
 * @returns {React.Component} The Text component.
 */
const TextGeneric = (props: any) => {
  const {bold} = props;

  return (
    <Text
      {...props}
      style={[{fontFamily: bold ? fonts.bold : fonts.regular}, props.style]}
    />
  );
};

/**
 * Default props for the Text component.
 * @type {Object}
 */
TextGeneric.defaultProps = {
  style: null,
  bold: false,
};

export default TextGeneric;
