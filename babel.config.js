module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
          screens: './src/screens',
          apis: './src/apis',
          navigations: './src/navigations',
          utils: './src/utils',
          constants: './src/state/constants',
          providers: './src/state/reducers',
          assets: '../assets/',
          hooks: './src/hooks',
          types: './src/types',
        },
      },
    ],
  ],
};
