import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../redux/store';
import {ActivityIndicator, BackHandler, Modal, View} from 'react-native';
import {LoadingProps} from '../../interfaces/connected-components/loading';
import {styles} from './styles';
import {colors} from '../../theme/colors';

/**
 * A global loading component that displays an activity indicator when loading is in progress.
 * It wraps the main content of the application and is shown as a modal overlay.
 *
 * @param {LoadingProps} loading - The loading state from the Redux store.
 * @returns {JSX.Element} The GlobalLoading component.
 */
const GlobalLoading = ({loading}: LoadingProps) => {
  /**
   * Destructure the 'isVisible' property from the loading object.
   */
  const {isVisible} = loading || {};

  /**
   * Disable the back button behavior if the loader is running.
   */
  useEffect(() => {
    const onBackPress = () => {
      return isVisible;
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, [isVisible]);

  return (
    <Modal
      statusBarTranslucent
      transparent
      animationType="fade"
      visible={isVisible}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    </Modal>
  );
};

/**
 * Maps the Redux store state to the 'loading' prop of the GlobalLoading component.
 *
 * @param {RootState} state - The entire Redux store state.
 * @returns {{loading: LoadingProps}} The loading state mapped to the 'loading' prop.
 */
const mapStateToProps = (state: RootState) => ({
  loading: state.loading,
});

export default connect(mapStateToProps, null)(GlobalLoading);
