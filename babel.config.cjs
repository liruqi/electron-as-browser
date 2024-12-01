const presets = [
  [
    '@babel/preset-env',
    {
      targets: { electron: 33 }
    }
  ],
  ['@babel/preset-react']
];

module.exports = { presets };
