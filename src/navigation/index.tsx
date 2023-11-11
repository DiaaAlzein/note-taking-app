import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

// Create a navigation reference using the React.createRef() function
export let navigationRef: React.RefObject<NavigationContainerRef<any>>;
navigationRef = React.createRef();

/**
 * Navigate to a screen using the provided name and parameters.
 *
 * @param {string} name - The name of the screen to navigate to.
 * @param {object} [params] - The parameters to pass to the screen.
 * @returns {void}
 */
const navigate = (name: string, params?: object): void => {
  if (navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};

export default navigate;
