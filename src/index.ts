import { writeFile } from 'fs'
import * as tc from 'tinycolor2'
import { dark as darkSyntax, light as lightSyntax} from './syntax'
import { dark as darkWorkbench, light as lightWorkbench} from './workbench'
import { markdownCSS } from './markdown'

function interpret(key: string, value: any) {
  if (value && value instanceof tc) {
    const color = value as tc.Instance
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

writeFile('dist/markdown.css', markdownCSS, err => { if (err) throw err })
