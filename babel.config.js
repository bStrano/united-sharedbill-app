module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.png',
          '.jpg',
        ],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@apis': './src/apis',
          '@navigations': './src/navigations',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@providers': './src/providers',
          '@assets': './assets',
          '@hooks': './src/hooks',
          types: './src/types',
        },
      },
    ],
  ],
};
