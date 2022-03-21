/**
 * Component Generator
 */

const path = require('path');

const { componentExists } = require('../utils');

const ComponentProptNames = {
  ComponentName: 'ComponentName',
};

const componentsPath = path.join(__dirname, '../../../src/components');

module.exports = {
  componentGenerator: {
    description: 'Add a component',
    prompts: [
      {
        type: 'input',
        name: ComponentProptNames.ComponentName,
        message: 'What should it be called?',
        default: 'Form',
        validate: (value) => {
          if (/.+/.test(value)) {
            return componentExists(value)
              ? 'A component with this name already exists'
              : true;
          }

          return 'The name is required';
        },
      },
    ],
    actions: (data) => {
      const fileName = `{{properCase ${ComponentProptNames.ComponentName}}}`;
      const componentPath = `${componentsPath}/${fileName}`;

      const actions = [
        {
          type: 'add',
          path: `${componentPath}/${fileName}.js`,
          templateFile: './component/component.js.hbs',
          abortOnFail: true,
        },
      ];

      actions.push({
        type: 'add',
        path: `${componentPath}/index.js`,
        templateFile: './component/index.js.hbs',
        abortOnFail: true,
      });

      actions.push({
        type: 'add',
        path: `${componentPath}/${fileName}.module.css`,
        abortOnFail: true,
      });

      actions.push({
        type: 'prettify',
        data: { path: `${componentsPath}/${data.ComponentName}/**` },
      });

      return actions;
    },
  },
};
