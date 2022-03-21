/**
 * componentExists
 *
 * Check whether the given component exist in the components directory
 */

const fs = require('fs');
const path = require('path');

module.exports = {
  componentExists: (component) => {
    const components = fs.readdirSync(
      path.join(__dirname, '../../../src/components'),
    );
    return components.indexOf(component) >= 0;
  },
  screenExists: (screen) => {
    const screens = fs.readdirSync(
      path.join(__dirname, '../../../src/screens'),
    );
    return screens.indexOf(screen) >= 0;
  },
};
