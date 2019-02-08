import { writeFile } from 'fs'
import { join } from 'path'
import * as tc from 'tinycolor2'
import * as darkPalette from './dark'
import * as lightPalette from './light'
import { markdownCSS } from './markdown'
import { generateSyntax } from './syntax'
import { Palette } from './types'
import { generateWorkbench } from './workbench'

function assemble(name: string, type: 'dark' | 'light', palette: Palette) {
  return JSON.stringify(
    {
      $schema: 'vscode://schemas/color-theme',
      name,
      type,
      colors: generateWorkbench(palette),
      tokenColors: generateSyntax(palette)
    },
    interpret
  )
}

function interpret(key: string, value: any) {
  if (value && value instanceof tc) {
    return value.getAlpha() === 1 ? value.toHexString() : value.toHex8String()
  }

  return value
}

writeFile(
  join(__dirname, '../dark.json'),
  assemble('Yi Dark', 'dark', darkPalette),
  (err) => { if (err) { throw err } }
)

writeFile(
  join(__dirname, '../light.json'),
  assemble('Yi Light', 'light', lightPalette),
  (err) => { if (err) { throw err } }
)

writeFile(
  join(__dirname, '../markdown.css'),
  markdownCSS,
  (err) => { if (err) { throw err } }
)
