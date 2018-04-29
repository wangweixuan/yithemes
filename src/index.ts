import { writeFile } from 'fs'
import { dark as darkSyntax, light as lightSyntax} from './syntax'
import { dark as darkWorkbench, light as lightWorkbench} from './workbench'
import mdpreview from './mdpreview'
import { interpret } from './utilities'

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

writeFile('dist/mdpreview.css', mdpreview, err => { if (err) throw err })
