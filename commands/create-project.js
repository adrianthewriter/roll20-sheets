const { spawn } = require('child_process')

var args = process.argv.slice(2)
if (!args.length) {
  console.error('scaffold needs a <project-name> argument')
  process.exit(1)
}

const run = (cmd, args) => {
  const spawn = require('child_process').spawn
  const command = spawn(cmd, args, {
    stdio: 'inherit',
    shell: true,
  })
  command.on('close', _ => {
    console.log('Process closed\n')
  })
  command.on('error', err => {
    console.log('Process closed with error\n', err)
  })
}

run(`yarn`, [
  `create`,
  `react-app`,
  `packages/${args[0]}`,
  `--template file:../cra-template-swordsmith`,
])
