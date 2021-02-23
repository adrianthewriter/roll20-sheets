module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('scaffold', {
    description: 'Generate a new project',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your project named?',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'packages/{{ dashCase name }}',
        base: 'template',
        templateFiles: 'template/**/*.hbs',
        skipIfExists: true,
      },
    ],
  })
}
