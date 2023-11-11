/**
 * Handle form changes and update the current state.
 *
 * @param {string} key - The key of the form field.
 * @param {string | number | any} value - The new value of the form field.
 * @param {object} currentForm - The current form state.
 * @param {Function} setFunction - The function to update the form state.
 */
export const handleChange = (
  key: string,
  value: string | number | any,
  currentForm: object,
  setFunction: Function,
) => {
  setFunction({
    ...currentForm,
    [key]: value,
  });
};

/**
 * Check if the form is valid.
 *
 * @param {object} form - The form object.
 * @param {string[]} mandatoryFields - The array of mandatory field keys.
 * @returns {boolean} - Returns true if the form is valid, false otherwise.
 */
export const checkIfFormValid = (form: any, mandatoryFields: string[]) => {
  let _formComplete = true;
  for (let index = 0; index < mandatoryFields.length; index++) {
    const field = mandatoryFields[index];
    if (!form[field] || form[field].length <= 0) {
      _formComplete = false;
      break;
    }
  }
  return _formComplete;
};
