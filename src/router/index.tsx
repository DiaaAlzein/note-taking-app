import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../navigation';
import {StackItem} from '../interfaces/router/stackItem';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import contentRoutes from './mainRoutes/contentRoutes';
import {colors} from '../theme/colors';

const Stack = createNativeStackNavigator();

/**
 * The main navigation component that handles routing and navigation between screens.
 * @constructor
 */
const AppNavigator = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary,
    },
  };

  /**
   * Create the stack navigator from the provided list of stack items and modal stack items.
   *
   * @param {StackItem[]} stacksList - The list of stack items representing the main screens.
   * @param modalsList
   * @returns {JSX.Element} The JSX element representing the stack navigator.
   */
  const getStacksGroups = (stacksList: StackItem[]): JSX.Element => {
    return (
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          animation: 'slide_from_right',
        }}
        initialRouteName={stacksList[0].name}>
        {stacksList.map((screen, idx) => (
          <Stack.Screen
            key={`screen${idx}`}
            name={screen.name}
            options={{
              headerBackTitle: 'Back',
              ...screen.options,
            }}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer theme={MyTheme} ref={navigationRef}>
      {getStacksGroups(contentRoutes)}
    </NavigationContainer>
  );
};

export default AppNavigator;
