import * as tc from 'tinycolor2'
import * as darkPalette from './dark'
import * as lightPalette from './light'
import { getRules, SyntaxRule } from './syntaxRules'

function generate(palette: typeof darkPalette | typeof lightPalette) {
  const rules = getRules(palette)
  let tokenColors: SyntaxRule[] = []
  for (const scope in rules) {
    const settings = rules[scope]
    if (settings instanceof tc)
      tokenColors.push({
        scope,
        settings: {
          foreground: settings
        }
      })
    else {
      const styleOptions = Object.keys(settings)
        .filter(key => settings[key as keyof typeof settings] === true)
      tokenColors.push({
        scope,
        settings: {
          foreground: settings.foreground,
          background: settings.background,
          fontStyle: styleOptions.length ? styleOptions.join(' ') : undefined
        }
      })
    }
  }

  return tokenColors
}

export const dark = generate(darkPalette)
export const light = generate(lightPalette)
