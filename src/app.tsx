import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Platform, StatusBar, StatusBarStyle, UIManager} from 'react-native';
import AppNavigator from './router';
import GlobalLoading from './connected-components/loading';

const STYLES: StatusBarStyle[] = ['default', 'dark-content', 'light-content'];

/**
 * The root component of the application.
 *
 * @returns {JSX.Element} The rendered root component.
 */
function App(): JSX.Element {
  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <StatusBar
          animated
          translucent
          backgroundColor={'transparent'}
          barStyle={STYLES[1]}
          showHideTransition={'fade'}
        />
        <AppNavigator />
        <GlobalLoading />
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
