const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    hermesParser: false,
    unstable_allowRequireContext: true, // To enable require.context
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
