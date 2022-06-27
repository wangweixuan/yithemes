import { writeFileSync } from 'fs'
import { join } from 'path'
import * as tc from 'tinycolor2'
import { MARKDOWN_CSS } from './markdown'
import { SemanticRules, SEMANTIC_DARK, SEMANTIC_LIGHT } from './semantic'
import { SyntaxRules, SYNTAX_DARK, SYNTAX_LIGHT } from './syntax'
import { WorkbenchRules, WORKBENCH_DARK, WORKBENCH_LIGHT } from './workbench'

function writeAll() {
  writeFileSync(
    join(__dirname, '../dark.json'),
    assembleTheme('Yi Dark', 'dark', WORKBENCH_DARK, SYNTAX_DARK, SEMANTIC_DARK)
  )

  writeFileSync(
    join(__dirname, '../light.json'),
    assembleTheme(
      'Yi Light',
      'light',
      WORKBENCH_LIGHT,
      SYNTAX_LIGHT,
      SEMANTIC_LIGHT
    )
  )

  writeFileSync(join(__dirname, '../markdown.css'), MARKDOWN_CSS)
}

function assembleTheme(
  name: string,
  type: string,
  workbench: WorkbenchRules,
  syntax: SyntaxRules,
  semantic: SemanticRules
): string {
  const content = {
    $schema: 'vscode://schemas/color-theme',
    name,
    type,
    colors: workbench,
    tokenColors: syntax,
    semanticHighlighting: true,
    semanticTokenColors: semantic
  }

  return JSON.stringify(content, stringifyColor)
}

function stringifyColor(_key: string, value: unknown): any {
  if (value && value instanceof tc) {
    return value.getAlpha() === 1 ? value.toHexString() : value.toHex8String()
  }

  return value
}

writeAll()
