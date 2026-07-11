import { spawn } from 'node:child_process'

const args = process.argv.slice(2)
const version = args[0]
const rawArgs = args.slice(1)

if (version === undefined || version === '') {
  console.error('Usage: npm run dev:tmdb -- <version> [slidev args...]')
  process.exit(1)
}

const extraArgs = rawArgs[0] === '--' ? rawArgs.slice(1) : rawArgs
const entry = `decks/tmdb-discovery-${version}.md`
const child = spawn('slidev', ['--open', entry, ...extraArgs], {
  stdio: 'inherit',
})

child.on('exit', (code) => process.exit(code ?? 0))
child.on('error', (err) => {
  console.error(err.message)
  process.exit(1)
})
