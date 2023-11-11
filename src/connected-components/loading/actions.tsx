import {store} from '../../redux/store';
import {hideLoading, showLoading} from './reducer';

/**
 * Dispatches an action to show the loading state.
 * This function updates the Redux store to indicate that the loading state has started.
 *
 * @function
 * @returns {void}
 * @example
 * // Dispatch the action to show the loading state
 * startLoading();
 */
export const startLoading = () => {
  store.dispatch(showLoading());
};

/**
 * Dispatches an action to hide the loading state.
 * This function updates the Redux store to indicate that the loading state has finished.
 *
 * @function
 * @returns {void}
 * @example
 * // Dispatch the action to hide the loading state
 * finishLoading();
 */
export const finishLoading = () => {
  store.dispatch(hideLoading());
};
