import React from 'react';
import {LabelProps} from '../../interfaces/components/label';
import {styles} from './styles';
import TextGeneric from '../textGeneric';

/**
 * Label component to display a text label.
 *
 * @component
 * @example
 * const MyLabel = () => (
 *   <Label label="My Label" isBold={true} isRequired={false} />
 * );
 *
 * @param {LabelProps} props - Component props.
 * @param {string} props.label - The text to be displayed as the label.
 * @param {boolean} props.isBold - Whether the label text should be bold.
 * @param {boolean} props.isRequired - Whether the label indicates a required field.
 * @returns {React.Component} The Label component.
 */
const Label: React.FC<LabelProps> = ({label, isBold, isRequired}) => {
  return (
    <TextGeneric bold={isBold} style={styles.title}>
      {isRequired && <TextGeneric style={styles.redContainer}>* </TextGeneric>}
      {label}
    </TextGeneric>
  );
};

/**
 * Default props for the Label component.
 * @type {Object}
 * @property {boolean} isBold - Whether the label text should be bold.
 * @property {boolean} isRequired - Whether the label indicates a required field.
 */
Label.defaultProps = {
  isBold: true,
  isRequired: false,
};

export default Label;
