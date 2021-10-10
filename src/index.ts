import Inquirer from 'inquirer'
import chalk from 'chalk'

import PowershellScripts from './PowershellScripts'

function Main() {
  Inquirer.prompt([
    {
      type: 'list',
      name: 'selectedScript',
      message: 'Which script do you want to be run?',
      choices: PowershellScripts.map(({ name }) => name),
    },
  ]).then(({ selectedScript }) => {
    const findedScript = PowershellScripts.find(
      ({ name }) => name === selectedScript
    )

    if (!findedScript) {
      return console.log(chalk.red('Script not found!'))
    }

    Inquirer.prompt([findedScript.question]).then((scriptArg) => {
      findedScript.script(scriptArg)
    })
  })
}

Main()
