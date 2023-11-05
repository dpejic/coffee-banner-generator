/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { readFileSync } from 'fs'

const packageJsonPath = './package.json'

try {
  const packageJsonContent = readFileSync(packageJsonPath, 'utf8')
  const packageJson = JSON.parse(packageJsonContent)
  const { devDependencies = {}, dependencies = {} } = packageJson
  const dependenciesList = []

  const allDependenciesKeys = [...Object.keys(devDependencies), ...Object.keys(dependencies)]

  for (const key of allDependenciesKeys) {
    if (dependenciesList.includes(key)) {
      console.log('\n')
      console.log('\x1b[31m', `duplicate dependency ${key}`)
      console.log('\n')
      // eslint-disable-next-line no-undef
      process.exit(1)
    }
    dependenciesList.push(key)
  }
} catch (error) {
  console.error('Error reading or parsing package.json:', error)
  // eslint-disable-next-line no-undef
  process.exit(1)
}
