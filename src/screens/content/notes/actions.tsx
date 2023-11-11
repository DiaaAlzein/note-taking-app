import {config} from '../../../config';
import {store} from '../../../redux/store';
import { setData, setError, startLoading } from "./reducer";
import {getLocalData} from '../../../utils/storage';
import {keys} from '../../../config/keys';
import {PickerItem} from '../../../interfaces/components/picker';

/**
 * Asynchronously retrieves data needed for the application.
 *
 * The function fetches categories and clients data from JSON files,
 * as well as notes from local storage. The retrieved data is then dispatched
 * to the Redux store using the `setData` action.
 *
 * @async
 * @function
 * @throws {Error} If an error occurs during data retrieval or dispatch.
 * @returns {Promise<boolean>} A Promise that resolves to true if data retrieval is successful, false otherwise.
 */
export const getData = async (): Promise<boolean> => {
  try {
    store.dispatch(startLoading());
    const categoriesResponse = require('../../../assets/json/categories.json');
    const categoriesList = categoriesResponse.categories.map(
      (item: PickerItem) => item.name,
    );
    const clientsResponse = require('../../../assets/json/clients.json');
    const clientsList = clientsResponse.clients.map(
      (item: PickerItem) => item.name,
    );
    const notes = await getLocalData(keys.notes);
    store.dispatch(
      setData({
        categories: categoriesList || [],
        clients: clientsList || [],
        notes: notes || [],
      }),
    );
    return true;
  } catch (e) {
    if (config.debug) console.log(e);
    store.dispatch(setError());
    return false;
  }
};
