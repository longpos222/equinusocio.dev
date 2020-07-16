const {breakpoints, utilities} = require('@native-elements/funky/config.js');

module.exports = {
  outputPath: 'src/assets/css/utils.css',
  breakpoints: {
    ...breakpoints,
  },
  utilities: {
    ...utilities,
    'grid-auto-f': {
      type: 'responsive',
      property: 'grid-auto-flow'
    }
  },
};
