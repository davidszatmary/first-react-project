const { componentGenerator } = require('./component');
const { screenGenerator } = require('./screen');
const shell = require('shelljs');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('screen', screenGenerator);

  plop.setActionType('prettify', (answers, config) => {
    const data = config.data;
    shell.exec(`npm run prettify -- "${data.path}"`, { silent: true });
    return '';
  });
};
