const {breakpoints, utilities} = require('@native-elements/funky/config.js');

module.exports = {
  outputPath: 'src/assets/css/utils.css',
  breakpoints: {
    ...breakpoints,
  },
  utilities: {
    ...utilities,
    'list-s': {
      type: 'standard',
      property: 'list-style'
    }
  },
};
