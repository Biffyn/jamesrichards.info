const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss');
const purgeJs = require('purgecss-from-js');

module.exports = {
  plugins: [
    require('postcss-import')({
      path: ['design']
    }),
    purgecss({
      content: ['hugo/layouts/**/*.html', 'hugo/static/components/*.js'],
      fontFace: true,
      whitelist: ['collapsing', 'collapsed', 'show']
    }),
    cssnano({
      preset: 'default'
    }),
    autoprefixer({
      grid: true,
      browsers: ['>1%']
    })
  ]
};
