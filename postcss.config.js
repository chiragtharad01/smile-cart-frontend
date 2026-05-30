module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss/nesting', // Optional: Add if you use nested CSS rules
    'tailwindcss',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
      },
    ],
  ],
}
