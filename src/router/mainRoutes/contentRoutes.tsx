import screens from '../../config/screens';
import Notes from '../../screens/content/notes';
import NoteManager from '../../screens/content/noteManager';

/**
 * Array representing the routes for the content section of the application.
 * Each route is defined as a StackItem with a name, associated component, and options.
 *
 * @type {Array<StackItem>}
 * @example
 * // Usage in a navigation stack
 * const MyNavigator = createStackNavigator(contentRoutes);
 *
 * @typedef {Object} StackItem - Represents a single item in the navigation stack.
 * @property {string} name - The name or key of the route.
 * @property {React.ComponentType} component - The React component to render for the route.
 * @property {Object} options - Options for configuring the route.
 * @property {string} options.title - The title of the route displayed in the navigation header.
 *
 * @type {StackItem[]}
 */
const contentRoutes = [
  {
    name: screens.notes,
    component: Notes,
    options: {
      title: 'Notes',
    },
  },
  {
    name: screens.noteManager,
    component: NoteManager,
    options: {
      title: 'Note Manager',
    },
  },
];

export default contentRoutes;
