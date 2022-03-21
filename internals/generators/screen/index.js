/**
 * Screen Generator
 */

const path = require('path');

const { screenExists } = require('../utils');

const ScreenProptNames = {
  ScreenName: 'ScreenName',
  wantHeaders: 'wantHeaders',
};

const screensPath = path.join(__dirname, '../../../src/screens');

module.exports = {
  screenGenerator: {
    description: 'Add a screen',
    prompts: [
      {
        type: 'input',
        name: ScreenProptNames.ScreenName,
        message: 'What should it be called?',
        default: 'Home',
        validate: (value) => {
          if (/.+/.test(value)) {
            return screenExists(value)
              ? 'A screen with this name already exists'
              : true;
          }

          return 'The name is required';
        },
      },
      {
        type: 'confirm',
        name: ScreenProptNames.wantHeaders,
        default: false,
        message: 'Do you want headers?',
      },
    ],
    actions: (data) => {
      const fileName = `{{properCase ${ScreenProptNames.ScreenName}}}`;
      const screenPath = `${screensPath}/${fileName}`;

      const actions = [
        {
          type: 'add',
          path: `${screenPath}/${fileName}.js`,
          templateFile: './screen/screen.js.hbs',
          abortOnFail: true,
        },
      ];

      actions.push({
        type: 'add',
        path: `${screenPath}/index.js`,
        templateFile: './screen/index.js.hbs',
        abortOnFail: true,
      });

      actions.push({
        type: 'add',
        path: `${screenPath}/${fileName}.module.css`,
        abortOnFail: true,
      });

      actions.push({
        type: 'prettify',
        data: { path: `${screensPath}/${data.ScreenName}/**` },
      });

      return actions;
    },
  },
};
