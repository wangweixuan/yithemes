import { join } from 'path'
import { compile, SassColor, Value as SassValue } from 'sass'
import * as tc from 'tinycolor2'
import * as darkPalette from './dark'
import * as lightPalette from './light'

function getColor<T>(palette: T, id: SassValue) {
  const realId = id.assertString('id').text as keyof T

  const tcColor = palette[realId]
  if (!(tcColor instanceof tc)) throw new Error()
  const color = tcColor.toRgb()

  return new SassColor({
    red: color.r,
    green: color.g,
    blue: color.b,
    alpha: color.a
  })
}

export const MARKDOWN_CSS = compile(
  join(__dirname, '../../src/markdown.scss'),
  {
    functions: {
      'dark-palette($id)': ([id]) => getColor(darkPalette, id),
      'light-palette($id)': ([id]) => getColor(lightPalette, id)
    },
    style: 'compressed'
  }
).css
