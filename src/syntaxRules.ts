import * as tc from 'tinycolor2'
import * as darkPalette from './dark'
import * as lightPalette from './light'

type SyntaxSettings = {
  foreground: tc.Instance;
  background?: tc.Instance;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

// https://github.com/Microsoft/vscode-textmate/blob/master/src/theme.ts
export type SyntaxRule = {
  scope: string;
  settings: {
    foreground: tc.Instance;
    // https://github.com/Microsoft/vscode/issues/29481
    background?: tc.Instance;
    fontStyle?: string;
  };
}

export function getRules(palette: typeof darkPalette | typeof lightPalette): Record<
  string, tc.Instance | SyntaxSettings
> {
  return {
    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/_base.less
    'comment': { foreground: palette.mono3, italic: true },

    'entity.name.type': palette.hue62,
    'entity.other.inherited-class': palette.hue4,

    'keyword': palette.hue3,
    'keyword.control': palette.hue3,
    'keyword.operator': palette.mono1,
    'keyword.operator.new': palette.hue3,
    'keyword.operator.expression': palette.hue3,
    'keyword.operator.cast': palette.hue3,
    'keyword.operator.sizeof': palette.hue3,
    'keyword.operator.instanceof': palette.hue3,
    'keyword.other.special-method': palette.hue2,
    'keyword.other.unit': palette.hue6,

    'storage': palette.hue3,
    'storage.type.annotation': palette.hue3,
    'storage.type.primitive': palette.hue3,
    'storage.modifier.package': palette.hue3,
    'storage.modifier.import': palette.hue3,

    'constant': palette.hue6,
    'constant.variable': palette.hue6,
    'constant.character.escape': palette.hue1,
    'constant.numberic': palette.hue6,
    'constant.other.color': palette.hue1,
    'constant.other.symbol': palette.hue1,

    'variable': palette.hue5,
    'variable.interpolation': palette.hue52,
    'variable.parameter': palette.mono1,
    'variable.other.constant': palette.hue6,

    'string': palette.hue4,
    'string source': palette.mono1,
    'string.embedded': palette.mono1,
    'string.regexp': palette.hue1,
    'string.regexp keyword.operator': palette.hue1,
    'string.regexp keyword.other': palette.hue1,
    'string.regexp punctuation.definition.string': palette.hue4,
    'string.other.link': palette.hue2,

    'punctuation.definition.comment': palette.mono3,
    'punctuation.definition.typeparameters': palette.mono1,
    'punctuation.definition.parameters': palette.mono1,
    'punctuation.definition.separator': palette.mono1,
    'punctuation.separator': palette.mono1,
    'punctuation.terminator': palette.mono1,
    'punctuation.definition.heading': palette.hue5,
    'punctuation.definition.identity': palette.hue2,
    'punctuation.definition.bold': { foreground: palette.hue62, bold: true },
    'punctuation.definition.italic': { foreground: palette.hue3, italic: true },
    'punctuation.definition.template-expression': palette.hue52,
    'punctuation.section.embedded': palette.hue52,
    'punctuation.section.method': palette.mono1,
    'punctuation.section.class': palette.mono1,
    'punctuation.section.inner-class': palette.mono1,

    'support.class': palette.hue62,
    'support.type': palette.hue1,
    'support.function': palette.hue1,
    'support.function.any-method': palette.hue2,
    'support.variable': palette.hue5,
    'support.constant': palette.hue6,

    'entity.name.function': palette.hue2,
    'entity.name.class': palette.hue62,
    'entity.name.type.class': palette.hue62,
    'entity.name.tag': palette.hue5,
    'entity.name.section.group-title': palette.hue2,
    'entity.other.attribute-name': palette.hue6,
    'entity.other.attribute-name.id': palette.hue2,

    'meta.class': palette.hue62,
    'meta.class.body': palette.mono1,
    'meta.method-call': palette.mono1,
    'meta.method': palette.mono1,
    'meta.function-call': palette.mono1,
    'meta.function': palette.mono1,
    'meta.definition.variable': palette.hue5,
    'meta.require': palette.hue2,
    'meta.selector': palette.hue3,
    'meta.brace': palette.mono1,
    'meta.separator': palette.mono1,
    'meta.tag': palette.mono1,
    'meta.field': palette.mono1,

    'invalid.deprecated': {
      foreground: palette.syntaxDeprecatedFg,
      background: palette.syntaxDeprecatedBg
    },
    'invalid.illegal': {
      foreground: palette.syntaxIllegalFg,
      background:palette.syntaxIllegalBg
    },

    'markup.bold': { foreground: palette.hue6, bold: true },
    'markup.changed': palette.hue3,
    'markup.deleted': palette.hue5,
    'markup.italic': { foreground: palette.hue3, italic: true },
    'markup.heading': palette.hue5,
    'markup.underline.link': palette.hue1,
    'markup.inserted': palette.hue4,
    'markup.quoted': palette.hue6,
    'markup.inline.raw': palette.hue4,

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/c.less
    'source.c keyword.operator': palette.hue3,

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/cpp.less
    'source.cpp keyword.operator': palette.hue3,

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/cs.less
    'source.cs keyword.operator': palette.hue3,

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/css.less
    'source.css meta.property-name': palette.mono2,
    'source.css meta.property-value': palette.mono2,
    'source.css support.type.property-name': palette.mono1,
    'source.css support.constant.property-value': palette.mono1,

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/elixir.less
    'source.elixir source.embedded.source': palette.mono1,
    'source.elixir constant.language': palette.hue2,
    'source.elixir constant.numeric': palette.hue2,
    'source.elixir constant.definition': palette.hue2,
    'source.elixir variable.definition': palette.hue3,
    'source.elixir variable.anonymous': palette.hue3,
    'source.elixir parameter.variable.function': { foreground: palette.hue6, italic: true },
    'source.elixir string.quoted': palette.hue4,
    'source.elixir keyword.special-method': palette.hue5,
    'source.elixir embedded.section': palette.hue5,
    'source.elixir embedded.source.empty': palette.hue5,
    'source.elixir variable.other.readwrite.module punctuation': palette.hue5,
    'source.elixir regexp.section': palette.hue52,
    'source.elixir regexp.string': palette.hue52,
    'source.elixir punctuation.separator': palette.hue6,
    'source.elixir keyword.operator': palette.hue6,
    'source.elixir variable.constant': palette.hue62,
    'source.elixir punctuation.array': palette.mono2,
    'source.elixir punctuation.scope': palette.mono2,
    'source.elixir punctuation.section': palette.mono2,

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/gfm.less
    'source.gfm link entity': palette.hue2,

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/go.less
    'source.go storage.type.string': palette.hue3,

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/ini.less
    'source.ini keyword.other.definition.ini': palette.hue5,

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/java.less
    'source.java storage.modifier.import': palette.hue62,
    'source.java storage.type': palette.hue62,
    'source.java-properties meta.key-pair': palette.hue5,
    'source.java-properties meta.key-pair punctuation': palette.mono1,

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/javascript.less

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/json.less
    'source.json support.type.property-name': palette.hue5,
    'source.json constant.language.json': palette.hue1,

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/php.less
    'source.php class.bracket': palette.mono1,

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/python.less
    'source.python keyword.operator.logical.python': palette.hue3,
    'source.python variable.parameter': palette.hue6,

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/ruby.less
    'source.ruby constant.other.symbol punctuation': palette.hue1,

    // Misc Workaround
    'text.xml punctuation.separator.namespace': palette.hue6,
    'markup.quote': { foreground: palette.mono3, italic: true },
    'punctuation.definition.list.begin': palette.hue5,
  }
}
