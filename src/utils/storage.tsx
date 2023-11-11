import EncryptedStorage from 'react-native-encrypted-storage';

/**
 * Retrieves the local data stored with the specified key.
 * @param {string} key - The key used to store the data.
 * @returns {Promise<any | null>} - A promise that resolves to the retrieved data or null if it doesn't exist.
 */
export const getLocalData = async (key: string): Promise<any | null> => {
  try {
    const jsonValue = await EncryptedStorage.getItem(key);
    if (jsonValue) {
      try {
        return JSON.parse(jsonValue);
      } catch (err) {
        return jsonValue;
      }
    }
  } catch (error) {
    return null;
  }
};

/**
 * Stores the specified value in the local storage with the given key.
 * @param {string} key - The key used to store the data.
 * @param {any} value - The value to be stored.
 * @returns {Promise<boolean>} - A promise that resolves to true if the value is successfully stored, or rejects with an error if an error occurs.
 */
export const setLocalData = async (
  key: string,
  value: any,
): Promise<boolean> => {
  try {
    await EncryptedStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * Clears all the data stored in the local storage.
 * @returns {Promise<boolean>} - A promise that resolves to true if the data is successfully cleared, or false if an error occurs.
 */
export const flushLocalData = async (): Promise<boolean> => {
  try {
    await EncryptedStorage.clear();
    return true;
  } catch (err) {
    return false;
  }
};
