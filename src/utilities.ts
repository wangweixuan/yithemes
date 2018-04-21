import * as tc from 'tinycolor2'

export const INHERIT = undefined
export const TRANSPARENT = tc('transparent')

// https://github.com/Microsoft/vscode-textmate/blob/master/src/theme.ts
export class Rule {
  readonly settings: {
    foreground: tinycolorInstance,
    background?: tinycolorInstance,
    fontStyle?: string
  }

  constructor(readonly scope: string | string[], foreground: tinycolorInstance, options: {
    // https://github.com/Microsoft/vscode/issues/29481
    background?: tinycolorInstance
    bold?: true
    italic?: true
    underline?: true
  } = {}) {
    const styleOptions = Object.keys(options)
      .filter(key => options[key as keyof typeof options] === true)
    this.settings = {
      foreground,
      background: options.background,
      fontStyle: styleOptions.length ? styleOptions.join(' ') : undefined
    }
  }
}
