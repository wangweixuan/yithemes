import { renderSync, types } from 'node-sass'
import { join } from 'path'
import * as tc from 'tinycolor2'
import * as darkPalette from './dark'
import * as lightPalette from './light'

export const MARKDOWN_CSS = renderSync({
  file: join(__dirname, '../../src/markdown.scss'),
  functions: {
    'dark-palette($id)': (id: types.Value) => {
      if (!(id instanceof types.String)) throw new Error()

      const color = ((darkPalette as any) as Record<string, tc.Instance>)[
        id.getValue()
      ].toRgb()
      return new types.Color(color.r, color.g, color.b, color.a)
    },

    'light-palette($id)': (id: types.Value) => {
      if (!(id instanceof types.String)) throw new Error()

      const color = ((lightPalette as any) as Record<string, tc.Instance>)[
        id.getValue()
      ].toRgb()
      return new types.Color(color.r, color.g, color.b, color.a)
    }
  },
  outputStyle: 'compressed'
}).css
