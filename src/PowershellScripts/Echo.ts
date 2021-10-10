import Powershell from 'node-powershell'
import chalk from 'chalk'

const ps = new Powershell({
  executionPolicy: 'Bypass',
  noProfile: true,
})

export default function Echo({ echo }: { echo: string }) {
  ps.addCommand(`echo ${echo}`)
  ps.invoke()
    .then((output) => {
      console.log(chalk.green(output))
    })
    .catch((err) => {
      console.log(chalk.red(err))
    })
}
