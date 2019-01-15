const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss');

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g);
  }
}

module.exports = {
  plugins: [
    require('postcss-import')({
      path: ['design']
    }),
    tailwindcss('./tailwind.js'),
    cssnano({
      preset: 'default'
    }),
    autoprefixer()
  ]
};
