import {LayoutAnimation, LayoutAnimationConfig} from 'react-native';

/**
 * Toggles the animation configuration for LayoutAnimation.
 * @param {number} [animationDuration=300] - The duration of the animation in milliseconds.
 * @returns {LayoutAnimationConfig} - The LayoutAnimation configuration object.
 */
export const toggleAnimation = (
  animationDuration = 300,
): LayoutAnimationConfig => {
  /**
   * @type {LayoutAnimationConfig}
   */
  return {
    /**
     * Duration of the animation in milliseconds.
     * @type {number}
     */
    duration: animationDuration,

    /**
     * Configuration for updating components during the animation.
     * @type {LayoutAnimationConfig}
     */
    update: {
      duration: animationDuration,
      property: LayoutAnimation.Properties.scaleXY,
      type: LayoutAnimation.Types.easeInEaseOut,
    },

    /**
     * Configuration for deleting components during the animation.
     * @type {LayoutAnimationConfig}
     */
    delete: {
      duration: animationDuration,
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.easeInEaseOut,
    },
  };
};
