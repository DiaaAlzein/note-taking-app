import React, {useRef, useState} from 'react';
import {Keyboard, Modal, Platform, TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import TextGeneric from '../textGeneric';
import TextInput from '../textInput';
import {styles} from './styles';
import {
  GenericPickerProps,
  PickerItem,
} from '../../interfaces/components/picker';

/**
 * GenericPicker component for selecting values from a list.
 *
 * @component
 * @example
 * const MyPicker = () => (
 *   <GenericPicker
 *     label="Select an item"
 *     list={[{ label: 'Item 1', value: 'item1' }, { label: 'Item 2', value: 'item2' }]}
 *     value={selectedValue}
 *     onValueChange={(value) => setSelectedValue(value)}
 *   />
 * );
 *
 * @param {GenericPickerProps} props - Component props.
 * @param {Object} props.style - Custom style for the container.
 * @param {Function} props.onValueChange - Function to be called when the selected value changes.
 * @param {Array} props.list - List of items for the picker.
 * @param {string} props.labelKey - Key for the label in the item object.
 * @param {string} props.valueKey - Key for the value in the item object.
 * @param {string} props.label - The label for the picker.
 * @param {string} props.value - The selected value.
 * @param {boolean} props.disabled - Whether the picker is disabled.
 * @param {boolean} props.isRequired - Whether the picker is required.
 * @returns {JSX.Element} The GenericPicker component.
 */
const GenericPicker = ({
  style,
  onValueChange,
  list,
  labelKey,
  valueKey,
  label,
  value,
  disabled,
  isRequired,
}: GenericPickerProps): JSX.Element => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [tempValue, setTempValue] = useState<string>(value || '');
  const [currentValue, setCurrentValue] = useState<string>(value || '');
  const pickerRef = useRef<Picker<string>>(null);
  const [enabled, setEnabled] = useState<boolean>(false);

  const pressCancel = (): void => {
    setTempValue(currentValue);
    setModalVisible(false);
  };

  const pressDone = (): void => {
    setCurrentValue(tempValue);
    if (onValueChange) {
      onValueChange(tempValue);
    }
    setModalVisible(false);
  };

  const selectValue = (val: string) => {
    setTempValue(val);
    if (Platform.OS === 'android' && onValueChange) {
      setCurrentValue(val);
      onValueChange(val);
    }
  };

  const getLabel = (): string => {
    if (labelKey && valueKey) {
      const result = (list as PickerItem[]).find(
        (item: PickerItem) => item[valueKey] === currentValue,
      );
      if (result) {
        return (result[labelKey] || '').toString();
      }
    }
    return currentValue?.toString();
  };

  const showIOSModal = () => {
    Keyboard.dismiss();
    setModalVisible(true);
  };

  const renderIOS = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            style,
            disabled && {
              opacity: 0.5,
            },
          ]}
          disabled={disabled}
          onPress={showIOSModal}>
          <TextInput
            label={label}
            value={getLabel()}
            editable={false}
            pointerEvents="none"
            onChangeText={onValueChange}
            showRightIcon
            rightIconName="chevron-small-down"
            isRequired={isRequired}
          />
        </TouchableOpacity>
        <Modal visible={modalVisible} animationType="slide" transparent>
          <View style={styles.modalContainer}>
            <View style={styles.mainModalContainer}>
              <Picker
                style={styles.pickerContainer}
                selectedValue={
                  tempValue !== undefined ? tempValue : currentValue
                }
                onValueChange={(currentValue: string) =>
                  selectValue(currentValue)
                }>
                <Picker.Item
                  style={{fontWeight: 'bold'}}
                  label="Select"
                  value={null}
                  enabled={false}
                />
                {list.map((item: string | any, i: number) => (
                  <Picker.Item
                    key={i}
                    label={
                      labelKey && typeof item !== 'string'
                        ? item[labelKey]
                        : item
                    }
                    value={
                      valueKey && typeof item !== 'string'
                        ? item[valueKey]
                        : item
                    }
                  />
                ))}
              </Picker>
              <View style={styles.bottomContainer}>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => pressCancel()}>
                  <TextGeneric style={styles.cancelText} bold>
                    Cancel
                  </TextGeneric>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.actionButton,
                    (currentValue === tempValue || !tempValue) && {
                      opacity: 0.4,
                    },
                  ]}
                  onPress={() => pressDone()}
                  disabled={currentValue === tempValue || !tempValue}>
                  <TextGeneric style={styles.doneText} bold>
                    Ok
                  </TextGeneric>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  const renderAndroid = () => {
    return (
      <View style={styles.androidContainer}>
        <Picker
          ref={pickerRef}
          mode="dropdown"
          selectedValue={value?.toString()}
          itemStyle={{fontWeight: 'bold'}}
          dropdownIconColor="white"
          onFocus={() => {
            Keyboard.dismiss();
            setEnabled(false);
          }}
          onBlur={() => setEnabled(true)}
          onValueChange={(id: string) => selectValue(id)}>
          <Picker.Item
            style={{fontWeight: 'bold'}}
            label="Select"
            value=""
            enabled={enabled}
          />
          {list.map((item: string | any, i: number) => (
            <Picker.Item
              key={i}
              style={{fontWeight: 'bold'}}
              label={
                labelKey && typeof item !== 'string'
                  ? item[labelKey]?.toString()
                  : item?.toString()
              }
              value={
                valueKey && typeof item !== 'string' ? item[valueKey] : item
              }
            />
          ))}
        </Picker>
        <View style={styles.androidPressableContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[
              style,
              disabled && {
                opacity: 0.5,
              },
            ]}
            disabled={disabled}
            onPress={() => pickerRef.current?.focus()}>
            <TextInput
              label={label}
              value={getLabel()}
              editable={false}
              pointerEvents="none"
              onChangeText={onValueChange}
              showRightIcon
              rightIconName="chevron-small-down"
              isRequired={isRequired}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return Platform.OS === 'ios' ? renderIOS() : renderAndroid();
};

GenericPicker.defaultProps = {
  containerStyle: {},
  labelKey: '',
  valueKey: '',
  value: '',
  disabled: false,
  customComponent: null,
};

export default GenericPicker;
