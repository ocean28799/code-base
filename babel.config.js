module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@': './src',
          '@core': './src/core',
          '@auth': './src/modules/auth',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
