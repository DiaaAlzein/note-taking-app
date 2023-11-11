import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

/**
 * Returns the value based on the screen height percentage.
 * @param {number} percent - The percentage value relative to the screen height.
 * @returns {number} - The calculated value based on the screen height.
 */
export const hdp = (percent: number) => hp(percent);

/**
 * Returns the value based on the screen width percentage.
 * @param {number} percent - The percentage value relative to the screen width.
 * @returns {number} - The calculated value based on the screen width.
 */
export const wdp = (percent: number) => wp(percent);

/**
 * Returns the value based on the screen size.
 * @param {number} smValue - The value to be used for small screens.
 * @param {number} lgValue - The value to be used for large screens.
 * @param {number} xsmValue - The value to be used for very small screens.
 * @returns {number} - The calculated value based on the screen size.
 */
export const getByScreenSize = (
  smValue: number,
  lgValue: number,
  xsmValue: number = smValue,
): number => (wp(100) < 380 ? xsmValue : wp(100) < 480 ? smValue : lgValue);

/**
 * Returns the value based on the screen height.
 * @param {number} smValue - The value to be used for small screens.
 * @param {number} lgValue - The value to be used for large screens.
 * @returns {number} - The calculated value based on the screen height.
 */
export const getByScreenHeight = (smValue: number, lgValue: number) =>
  hp(100) < 800 ? smValue : lgValue;
