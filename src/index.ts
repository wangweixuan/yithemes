import { writeFile } from 'fs'
import * as tc from 'tinycolor2'
import darkSyntax from './dark.syntax'
import darkWorkbench from './dark.workbench'
import lightSyntax from './light.syntax'
import lightWorkbench from './light.workbench'

function interpret(key: string, value: any) {
  if (value && value instanceof tc) {
    const color = value as tinycolorInstance
    return color.getAlpha() === 1 ? color.toHexString() : color.toHex8String()
  }
  return value
}

writeFile('dist/dark.json', JSON.stringify({
  $schema: 'vscode://schemas/color-theme',
  name: 'Yi Dark',
  type: 'dark',
  colors: darkWorkbench,
  tokenColors: darkSyntax
}, interpret).replace(/_/g, '.'), err => { if (err) throw err })

writeFile('dist/light.json', JSON.stringify({
  $schema: 'vscode://schemas/color-theme',
  name: 'Yi Light',
  type: 'light',
  colors: lightWorkbench,
  tokenColors: lightSyntax
}, interpret).replace(/_/g, '.'), err => { if (err) throw err })
