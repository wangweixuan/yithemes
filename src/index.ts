import { writeFile } from 'fs'
import { join } from 'path'
import * as tc from 'tinycolor2'
import { MARKDOWN_CSS } from './markdown'
import { SyntaxRules, SYNTAX_DARK, SYNTAX_LIGHT } from './syntax'
import { WorkbenchRules, WORKBENCH_DARK, WORKBENCH_LIGHT } from './workbench'

function assembleTheme(
  name: string,
  type: string,
  syntax: SyntaxRules,
  workbench: WorkbenchRules
) {
  return JSON.stringify(
    {
      $schema: 'vscode://schemas/color-theme',
      name,
      type,
      colors: workbench,
      tokenColors: syntax
    },
    (key, value) => {
      if (value && value instanceof tc)
        return value.getAlpha() === 1
          ? value.toHexString()
          : value.toHex8String()

      return value
    }
  )
}

writeFile(
  join(__dirname, '../dark.json'),
  assembleTheme('Yi Dark', 'dark', SYNTAX_DARK, WORKBENCH_DARK),
  err => {
    if (err) throw err
  }
)

writeFile(
  join(__dirname, '../light.json'),
  assembleTheme('Yi Light', 'light', SYNTAX_LIGHT, WORKBENCH_LIGHT),
  err => {
    if (err) throw err
  }
)

writeFile(join(__dirname, '../markdown.css'), MARKDOWN_CSS, err => {
  if (err) throw err
})
