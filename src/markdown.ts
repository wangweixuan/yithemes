import { renderSync, types } from 'node-sass'
import { join } from 'path'
import * as tc from 'tinycolor2'
import * as darkPalette from './dark'
import * as lightPalette from './light'

function getColor<T>(palette: T, id: types.Value) {
  if (!(id instanceof types.String)) throw new Error()
  const realId = id.getValue() as keyof T

  const tcColor = palette[realId]
  if (!(tcColor instanceof tc)) throw new Error()
  const color = tcColor.toRgb()

  return new types.Color(color.r, color.g, color.b, color.a)
}

export const MARKDOWN_CSS = renderSync({
  file: join(__dirname, '../../src/markdown.scss'),
  functions: {
    'dark-palette($id)': (id: types.Value) => getColor(darkPalette, id),
    'light-palette($id)': (id: types.Value) => getColor(lightPalette, id)
  },
  outputStyle: 'compressed'
}).css
