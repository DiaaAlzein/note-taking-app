import {createSlice} from '@reduxjs/toolkit';
import {LoadingState} from '../../interfaces/connected-components/loading';
/**
 * The initial state for the loading state slice.
 * @type {LoadingState}
 */
const initialState: LoadingState = {
  isVisible: false,
};

/**
 * A Redux slice for handling the loading state and its actions.
 * @type {Slice<LoadingState>}
 */
export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    /**
     * A reducer function that sets the 'isVisible' property of the loading state to true, indicating that loading is in progress.
     *
     * @param {LoadingState} state - The current loading state.
     * @param {PayloadAction} action - The action dispatched to trigger this reducer.
     */
    showLoading: state => {
      state.isVisible = true;
    },
    /**
     * A reducer function that sets the 'isVisible' property of the loading state to false, indicating that loading is not in progress.
     *
     * @param {LoadingState} state - The current loading state.
     * @param {PayloadAction} action - The action dispatched to trigger this reducer.
     */
    hideLoading: state => {
      state.isVisible = false;
    },
  },
});

/**
 * Action creators generated for each case reducer function in the loading slice.
 * @type {object}
 */
export const {showLoading, hideLoading} = loadingSlice.actions;

/**
 * The reducer function of the loading slice, which is used to update the loading state based on dispatched actions.
 *
 * @param {LoadingState} state - The current loading state.
 * @param {PayloadAction} action - The action dispatched to trigger this reducer.
 * @returns {LoadingState} The new loading state after handling the action.
 */
export default loadingSlice.reducer;
