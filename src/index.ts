import { writeFile } from 'fs'
import { join } from 'path'
import * as tc from 'tinycolor2'
import { MARKDOWN_CSS } from './markdown'
import { SyntaxRules, SYNTAX_DARK, SYNTAX_LIGHT } from './syntax'
import { WorkbenchRules, WORKBENCH_DARK, WORKBENCH_LIGHT } from './workbench'

function writeAll() {
  writeFile(
    join(__dirname, '../dark.json'),
    assembleTheme('Yi Dark', 'dark', SYNTAX_DARK, WORKBENCH_DARK),
    handleError
  )

  writeFile(
    join(__dirname, '../light.json'),
    assembleTheme('Yi Light', 'light', SYNTAX_LIGHT, WORKBENCH_LIGHT),
    handleError
  )

  writeFile(join(__dirname, '../markdown.css'), MARKDOWN_CSS, handleError)
}

function assembleTheme(
  name: string,
  type: string,
  syntax: SyntaxRules,
  workbench: WorkbenchRules
) {
  const content = {
    $schema: 'vscode://schemas/color-theme',
    name,
    type,
    colors: workbench,
    tokenColors: syntax
  }

  return JSON.stringify(content, stringifyColor)
}

function handleError(err: NodeJS.ErrnoException | null) {
  if (err) throw err
}

function stringifyColor(_key: string, value: any): any {
  if (value && value instanceof tc) {
    return value.getAlpha() === 1 ? value.toHexString() : value.toHex8String()
  }

  return value
}

writeAll()
