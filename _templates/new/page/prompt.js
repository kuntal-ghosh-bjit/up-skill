const changeCase = require('change-case-all');

module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt([
        {
          type: 'input',
          name: 'page_name',
          message: 'input a page name',
          validate: input => input !== '',
        },
        {
          type: 'confirm',
          name: 'confirm',
          message: 'Generate a page?',
        },
      ])
      .then(async ({ page_name }) => {
        const lowerName = `${page_name.toLowerCase()}`;
        const pascalName = `${changeCase.pascalCase(page_name)}`;
        const basicClassName = `p-${page_name}`;
        return { lowerName, pascalName, basicClassName };
      });
  },
};
