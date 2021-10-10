import Powershell from 'node-powershell'
import Inquirer from 'inquirer'
import chalk from 'chalk'

const ps = new Powershell({
  executionPolicy: 'Bypass',
})

export default function Echo({ script }: { script?: string }) {
  ps.addCommand('Get-Service ' + script + '| ConvertTo-Json')
  ps.invoke()
    .then((output) => {
      const servicesList = JSON.parse(output)
      Inquirer.prompt([
        {
          type: 'list',
          name: 'selectedScript',
          message: 'Which script do you want to be run?',
          choices: servicesList.map(
            ({ DisplayName, UserName, Status }: any) =>
              `${DisplayName} | ${UserName} | ${Status}`
          ),
        },
      ]).then((selectedService) => {
        console.log(selectedService)
      })
    })
    .catch((err) => {
      console.log(chalk.red(err))
    })
}
