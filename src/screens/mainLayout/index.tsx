import React from 'react';
import {ScrollView, View} from 'react-native';
import {hdp} from '../../utils/responsive';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {MainLayoutProps} from '../../interfaces/screens/mainLayout';
import {styles} from './styles';

/**
 * Main layout component for organizing the structure of a screen.
 *
 * @component
 * @param {object} props - The properties of the component.
 * @param {React.ReactNode} props.children - The content to be displayed within the layout.
 * @param {boolean} [props.enableScroll=true] - If true, enables scrolling for the content.
 * @param {boolean} [props.noPadding=false] - If true, removes horizontal padding from the layout.
 * @param {boolean} [props.keyboardAvoidScrollView] - If true, wraps the content in KeyboardAwareScrollView
 *    to automatically adjust the view when the keyboard is displayed.
 * @param {boolean} [props.enableOnAndroid] - If true, enables KeyboardAwareScrollView on Android.
 * @returns {React.ReactNode} The rendered MainLayout component.
 */

const MainLayout = ({
  children,
  enableScroll = true,
  noPadding = false,
  keyboardAvoidScrollView,
  enableOnAndroid,
}: MainLayoutProps) => {
  const PageView: any = enableScroll ? ScrollView : View;

  return (
    <View style={styles.container}>
      <PageView
        keyboardAvoidScrollView={keyboardAvoidScrollView}
        style={[
          !enableScroll && styles.mainView,
          noPadding && {paddingHorizontal: 0},
          {
            height: '100%',
          },
        ]}>
        {keyboardAvoidScrollView ? (
          <KeyboardAwareScrollView
            extraScrollHeight={hdp(5)}
            enableOnAndroid={enableOnAndroid}
            contentContainerStyle={{
              flexGrow: 1,
              paddingHorizontal: noPadding ? 0 : '5%',
            }}
            keyboardShouldPersistTaps="handled">
            {children}
          </KeyboardAwareScrollView>
        ) : (
          children
        )}
      </PageView>
    </View>
  );
};

export default MainLayout;
