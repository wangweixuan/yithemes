import * as tc from 'tinycolor2'
import * as darkPalette from './dark'
import * as lightPalette from './light'

// https://github.com/Microsoft/vscode-textmate/blob/master/src/theme.ts
export type SyntaxRules = Array<{
  scope: string
  settings: SyntaxSettings
}>

type SyntaxSettings = {
  foreground: tc.Instance
  // https://github.com/Microsoft/vscode/issues/3429
  background?: tc.Instance
  fontStyle?:
    | 'bold'
    | 'italic'
    | 'underline'
    | 'bold italic'
    | 'bold underline'
    | 'italic underline'
    | 'bold italic underline'
}

function generateSyntax(
  palette: typeof darkPalette | typeof lightPalette
): SyntaxRules {
  const settings: Record<string, SyntaxSettings> = {
    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/_base.less
    'comment': { foreground: palette.mono3, fontStyle: 'italic' },

    'entity.name.type': { foreground: palette.hue62 },
    'entity.other.inherited-class': { foreground: palette.hue4 },

    'keyword': { foreground: palette.hue3 },
    'keyword.control': { foreground: palette.hue3 },
    'keyword.operator': { foreground: palette.mono1 },
    'keyword.operator.new': { foreground: palette.hue3 },
    'keyword.operator.expression': { foreground: palette.hue3 },
    'keyword.operator.cast': { foreground: palette.hue3 },
    'keyword.operator.sizeof': { foreground: palette.hue3 },
    'keyword.operator.instanceof': { foreground: palette.hue3 },
    'keyword.other.special-method': { foreground: palette.hue2 },
    'keyword.other.unit': { foreground: palette.hue6 },

    'storage': { foreground: palette.hue3 },
    'storage.type.annotation': { foreground: palette.hue3 },
    'storage.type.primitive': { foreground: palette.hue3 },
    'storage.modifier.package': { foreground: palette.hue3 },
    'storage.modifier.import': { foreground: palette.hue3 },

    'constant': { foreground: palette.hue6 },
    'constant.variable': { foreground: palette.hue6 },
    'constant.character.escape': { foreground: palette.hue1 },
    'constant.numberic': { foreground: palette.hue6 },
    'constant.other.color': { foreground: palette.hue1 },
    'constant.other.symbol': { foreground: palette.hue1 },

    'variable': { foreground: palette.hue5 },
    'variable.interpolation': { foreground: palette.hue52 },
    'variable.parameter': { foreground: palette.mono1 },
    'variable.other.constant': { foreground: palette.hue6 },

    'string': { foreground: palette.hue4 },
    'string source': { foreground: palette.mono1 },
    'string.embedded': { foreground: palette.mono1 },
    'string.regexp': { foreground: palette.hue1 },
    'string.regexp keyword.operator': { foreground: palette.hue1 },
    'string.regexp keyword.other': { foreground: palette.hue1 },
    'string.regexp punctuation.definition.string': { foreground: palette.hue4 },
    'string.other.link': { foreground: palette.hue2 },

    'punctuation.definition.comment': { foreground: palette.mono3 },
    'punctuation.definition.typeparameters': { foreground: palette.mono1 },
    'punctuation.definition.parameters': { foreground: palette.mono1 },
    'punctuation.definition.separator': { foreground: palette.mono1 },
    'punctuation.separator': { foreground: palette.mono1 },
    'punctuation.terminator': { foreground: palette.mono1 },
    'punctuation.definition.heading': { foreground: palette.hue5 },
    'punctuation.definition.identity': { foreground: palette.hue2 },
    'punctuation.definition.bold': {
      foreground: palette.hue62,
      fontStyle: 'bold'
    },
    'punctuation.definition.italic': {
      foreground: palette.hue3,
      fontStyle: 'italic'
    },
    'punctuation.definition.template-expression': { foreground: palette.hue52 },
    'punctuation.section.embedded': { foreground: palette.hue52 },
    'punctuation.section.method': { foreground: palette.mono1 },
    'punctuation.section.class': { foreground: palette.mono1 },
    'punctuation.section.inner-class': { foreground: palette.mono1 },

    'support.class': { foreground: palette.hue62 },
    'support.type': { foreground: palette.hue1 },
    'support.function': { foreground: palette.hue1 },
    'support.function.any-method': { foreground: palette.hue2 },
    'support.variable': { foreground: palette.hue5 },
    'support.constant': { foreground: palette.hue6 },

    'entity.name.function': { foreground: palette.hue2 },
    'entity.name.class': { foreground: palette.hue62 },
    'entity.name.type.class': { foreground: palette.hue62 },
    'entity.name.tag': { foreground: palette.hue5 },
    'entity.name.section.group-title': { foreground: palette.hue2 },
    'entity.other.attribute-name': { foreground: palette.hue6 },
    'entity.other.attribute-name.id': { foreground: palette.hue2 },

    'meta.class': { foreground: palette.hue62 },
    'meta.class.body': { foreground: palette.mono1 },
    'meta.method-call': { foreground: palette.mono1 },
    'meta.method': { foreground: palette.mono1 },
    'meta.function-call': { foreground: palette.mono1 },
    'meta.function': { foreground: palette.mono1 },
    'meta.definition.variable': { foreground: palette.hue5 },
    'meta.require': { foreground: palette.hue2 },
    'meta.selector': { foreground: palette.hue3 },
    'meta.brace': { foreground: palette.mono1 },
    'meta.separator': { foreground: palette.mono1 },
    'meta.tag': { foreground: palette.mono1 },
    'meta.field': { foreground: palette.mono1 },

    'invalid.deprecated': {
      foreground: palette.syntaxDeprecatedFg,
      background: palette.syntaxDeprecatedBg
    },
    /* 'invalid.illegal': {
      foreground: palette.syntaxIllegalFg,
      background: palette.syntaxIllegalBg
    }, */
    // Workaround for https://github.com/Microsoft/vscode/issues/3429
    'invalid.illegal': { foreground: palette.syntaxIllegalBg },

    'markup.bold': { foreground: palette.hue6, fontStyle: 'bold' },
    'markup.changed': { foreground: palette.hue3 },
    'markup.deleted': { foreground: palette.hue5 },
    'markup.italic': { foreground: palette.hue3, fontStyle: 'italic' },
    'markup.heading': { foreground: palette.hue5 },
    'markup.underline.link': { foreground: palette.hue1 },
    'markup.inserted': { foreground: palette.hue4 },
    'markup.quoted': { foreground: palette.hue6 },
    'markup.inline.raw': { foreground: palette.hue4 },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/c.less
    'source.c keyword.operator': { foreground: palette.hue3 },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/cpp.less
    'source.cpp keyword.operator': { foreground: palette.hue3 },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/cs.less
    'source.cs keyword.operator': { foreground: palette.hue3 },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/css.less
    'source.css meta.property-name': { foreground: palette.mono2 },
    'source.css meta.property-value': { foreground: palette.mono2 },
    'source.css support.type.property-name': { foreground: palette.mono1 },
    'source.css support.constant.property-value': { foreground: palette.mono1 },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/elixir.less
    'source.elixir source.embedded.source': { foreground: palette.mono1 },
    'source.elixir constant.language': { foreground: palette.hue2 },
    'source.elixir constant.numeric': { foreground: palette.hue2 },
    'source.elixir constant.definition': { foreground: palette.hue2 },
    'source.elixir variable.definition': { foreground: palette.hue3 },
    'source.elixir variable.anonymous': { foreground: palette.hue3 },
    'source.elixir parameter.variable.function': {
      foreground: palette.hue6,
      fontStyle: 'italic'
    },
    'source.elixir string.quoted': { foreground: palette.hue4 },
    'source.elixir keyword.special-method': { foreground: palette.hue5 },
    'source.elixir embedded.section': { foreground: palette.hue5 },
    'source.elixir embedded.source.empty': { foreground: palette.hue5 },
    'source.elixir variable.other.readwrite.module punctuation': {
      foreground: palette.hue5
    },
    'source.elixir regexp.section': { foreground: palette.hue52 },
    'source.elixir regexp.string': { foreground: palette.hue52 },
    'source.elixir punctuation.separator': { foreground: palette.hue6 },
    'source.elixir keyword.operator': { foreground: palette.hue6 },
    'source.elixir variable.constant': { foreground: palette.hue62 },
    'source.elixir punctuation.array': { foreground: palette.mono2 },
    'source.elixir punctuation.scope': { foreground: palette.mono2 },
    'source.elixir punctuation.section': { foreground: palette.mono2 },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/gfm.less
    'source.gfm link entity': { foreground: palette.hue2 },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/go.less
    'source.go storage.type.string': { foreground: palette.hue3 },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/ini.less
    'source.ini keyword.other.definition.ini': { foreground: palette.hue5 },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/java.less
    'source.java storage.modifier.import': { foreground: palette.hue62 },
    'source.java storage.type': { foreground: palette.hue62 },
    'source.java-properties meta.key-pair': { foreground: palette.hue5 },
    'source.java-properties meta.key-pair punctuation': {
      foreground: palette.mono1
    },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/javascript.less
    /* 'source.js keyword.operator': { foreground: palette.hue1 },
    'source.js keyword.delete': { foreground: palette.hue3 },
    'source.js keyword.in': { foreground: palette.hue3 },
    'source.js keyword.of': { foreground: palette.hue3 },
    'source.js keyword.instanceof': { foreground: palette.hue3 },
    'source.js keyword.new': { foreground: palette.hue3 },
    'source.js keyword.typeof': { foreground: palette.hue3 },
    'source.js keyword.void': { foreground: palette.hue3 }, */

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/json.less
    'source.json support.type.property-name': { foreground: palette.hue5 },
    'source.json constant.language.json': { foreground: palette.hue1 },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/php.less
    'source.php class.bracket': { foreground: palette.mono1 },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/python.less
    'source.python keyword.operator.logical.python': {
      foreground: palette.hue3
    },
    'source.python variable.parameter': { foreground: palette.hue6 },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/ruby.less
    'source.ruby constant.other.symbol punctuation': {
      foreground: palette.hue1
    },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/typescript.less
    /* 'source.ts keyword.operator': { foreground: palette.hue1 },
    'source.flow keyword.operator': { foreground: palette.hue1 }, */

    // Misc Workaround
    'text.xml punctuation.separator.namespace': { foreground: palette.hue6 },
    'markup.quote': { foreground: palette.mono3, fontStyle: 'italic' },
    'punctuation.definition.list.begin.markdown': { foreground: palette.hue5 },
    'meta.function-call.generic.python': { foreground: palette.hue2 }
  }

  return Object.keys(settings).map(scope => ({
    scope,
    settings: settings[scope]
  }))
}

export const SYNTAX_DARK = generateSyntax(darkPalette)
export const SYNTAX_LIGHT = generateSyntax(lightPalette)
