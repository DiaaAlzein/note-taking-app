import loadingReducer from '../connected-components/loading/reducer';
import notesReducer from '../screens/content/notes/reducer';

/**
 * Represents the root reducer for the application.
 * @type {Object}
 */
export default {
  loading: loadingReducer,
  notes: notesReducer,
};
