import { Palette, SyntaxRule } from './types'

export function generateSyntax(palette: Palette): SyntaxRule[] {
  return [
    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/_base.less
    { scope: 'comment', settings: {
      foreground: palette.mono3, fontStyle: 'italic' } },

    { scope: 'entity.name.type', settings: {
      foreground: palette.hue62 } },
    { scope: 'entity.other.inherited-class', settings: {
      foreground: palette.hue4 } },

    { scope: 'keyword', settings: {
      foreground: palette.hue3 } },
    { scope: 'keyword.control', settings: {
      foreground: palette.hue3 } },
    { scope: 'keyword.operator', settings: {
      foreground: palette.mono1 } },
    { scope: 'keyword.operator.new', settings: {
      foreground: palette.hue3 } },
    { scope: 'keyword.operator.expression', settings: {
      foreground: palette.hue3 } },
    { scope: 'keyword.operator.cast', settings: {
      foreground: palette.hue3 } },
    { scope: 'keyword.operator.sizeof', settings: {
      foreground: palette.hue3 } },
    { scope: 'keyword.operator.instanceof', settings: {
      foreground: palette.hue3 } },
    { scope: 'keyword.other.special-method', settings: {
      foreground: palette.hue2 } },
    { scope: 'keyword.other.unit', settings: {
      foreground: palette.hue6 } },

    { scope: 'storage', settings: {
      foreground: palette.hue3 } },
    { scope: 'storage.type.annotation', settings: {
      foreground: palette.hue3 } },
    { scope: 'storage.type.primitive', settings: {
      foreground: palette.hue3 } },
    { scope: 'storage.modifier.package', settings: {
      foreground: palette.hue3 } },
    { scope: 'storage.modifier.import', settings: {
      foreground: palette.hue3 } },

    { scope: 'constant', settings: {
      foreground: palette.hue6 } },
    { scope: 'constant.variable', settings: {
      foreground: palette.hue6 } },
    { scope: 'constant.character.escape', settings: {
      foreground: palette.hue1 } },
    { scope: 'constant.numberic', settings: {
      foreground: palette.hue6 } },
    { scope: 'constant.other.color', settings: {
      foreground: palette.hue1 } },
    { scope: 'constant.other.symbol', settings: {
      foreground: palette.hue1 } },

    { scope: 'variable', settings: {
      foreground: palette.hue5 } },
    { scope: 'variable.interpolation', settings: {
      foreground: palette.hue52 } },
    { scope: 'variable.parameter', settings: {
      foreground: palette.mono1 } },
    { scope: 'variable.other.constant', settings: {
      foreground: palette.hue6 } },

    { scope: 'string', settings: {
      foreground: palette.hue4 } },
    { scope: 'string source', settings: {
      foreground: palette.mono1 } },
    { scope: 'string.embedded', settings: {
      foreground: palette.mono1 } },
    { scope: 'string.regexp', settings: {
      foreground: palette.hue1 } },
    { scope: 'string.regexp keyword.operator', settings: {
      foreground: palette.hue1 } },
    { scope: 'string.regexp keyword.other', settings: {
      foreground: palette.hue1 } },
    { scope: 'string.regexp punctuation.definition.string', settings: {
      foreground: palette.hue4 } },
    { scope: 'string.other.link', settings: {
      foreground: palette.hue2 } },

    { scope: 'punctuation.definition.comment', settings: {
      foreground: palette.mono3 } },
    { scope: 'punctuation.definition.typeparameters', settings: {
      foreground: palette.mono1 } },
    { scope: 'punctuation.definition.parameters', settings: {
      foreground: palette.mono1 } },
    { scope: 'punctuation.definition.separator', settings: {
      foreground: palette.mono1 } },
    { scope: 'punctuation.separator', settings: {
      foreground: palette.mono1 } },
    { scope: 'punctuation.terminator', settings: {
      foreground: palette.mono1 } },
    { scope: 'punctuation.definition.heading', settings: {
      foreground: palette.hue5 } },
    { scope: 'punctuation.definition.identity', settings: {
      foreground: palette.hue2 } },
    { scope: 'punctuation.definition.bold', settings: {
      foreground: palette.hue62, fontStyle: 'bold' } },
    { scope: 'punctuation.definition.italic', settings: {
      foreground: palette.hue3, fontStyle: 'italic' } },
    { scope: 'punctuation.definition.template-expression', settings: {
      foreground: palette.hue52 } },
    { scope: 'punctuation.section.embedded', settings: {
      foreground: palette.hue52 } },
    { scope: 'punctuation.section.method', settings: {
      foreground: palette.mono1 } },
    { scope: 'punctuation.section.class', settings: {
      foreground: palette.mono1 } },
    { scope: 'punctuation.section.inner-class', settings: {
      foreground: palette.mono1 } },

    { scope: 'support.class', settings: {
      foreground: palette.hue62 } },
    { scope: 'support.type', settings: {
      foreground: palette.hue1 } },
    { scope: 'support.function', settings: {
      foreground: palette.hue1 } },
    { scope: 'support.function.any-method', settings: {
      foreground: palette.hue2 } },
    { scope: 'support.variable', settings: {
      foreground: palette.hue5 } },
    { scope: 'support.constant', settings: {
      foreground: palette.hue6 } },

    { scope: 'entity.name.function', settings: {
      foreground: palette.hue2 } },
    { scope: 'entity.name.class', settings: {
      foreground: palette.hue62 } },
    { scope: 'entity.name.type.class', settings: {
      foreground: palette.hue62 } },
    { scope: 'entity.name.tag', settings: {
      foreground: palette.hue5 } },
    { scope: 'entity.name.section.group-title', settings: {
      foreground: palette.hue2 } },
    { scope: 'entity.other.attribute-name', settings: {
      foreground: palette.hue6 } },
    { scope: 'entity.other.attribute-name.id', settings: {
      foreground: palette.hue2 } },

    { scope: 'meta.class', settings: {
      foreground: palette.hue62 } },
    { scope: 'meta.class.body', settings: {
      foreground: palette.mono1 } },
    { scope: 'meta.method-call', settings: {
      foreground: palette.mono1 } },
    { scope: 'meta.method', settings: {
      foreground: palette.mono1 } },
    { scope: 'meta.function-call', settings: {
      foreground: palette.mono1 } },
    { scope: 'meta.function', settings: {
      foreground: palette.mono1 } },
    { scope: 'meta.definition.variable', settings: {
      foreground: palette.hue5 } },
    { scope: 'meta.require', settings: {
      foreground: palette.hue2 } },
    { scope: 'meta.selector', settings: {
      foreground: palette.hue3 } },
    { scope: 'meta.brace', settings: {
      foreground: palette.mono1 } },
    { scope: 'meta.separator', settings: {
      foreground: palette.mono1 } },
    { scope: 'meta.tag', settings: {
      foreground: palette.mono1 } },
    { scope: 'meta.field', settings: {
      foreground: palette.mono1 } },

    { scope: 'invalid.deprecated', settings: {
      foreground: palette.syntaxDeprecatedFg, background: palette.syntaxDeprecatedBg } },
    /* { scope: 'invalid.illegal', settings: {
      foreground: palette.syntaxIllegalFg, background: palette.syntaxIllegalBg } }, */
    // Workaround for https://github.com/Microsoft/vscode/issues/3429
    { scope: 'invalid.illegal', settings: {
      foreground: palette.syntaxIllegalBg } },

    { scope: 'markup.bold', settings: {
      foreground: palette.hue6, fontStyle: 'bold' } },
    { scope: 'markup.changed', settings: {
      foreground: palette.hue3 } },
    { scope: 'markup.deleted', settings: {
      foreground: palette.hue5 } },
    { scope: 'markup.italic', settings: {
      foreground: palette.hue3, fontStyle: 'italic' } },
    { scope: 'markup.heading', settings: {
      foreground: palette.hue5 } },
    { scope: 'markup.underline.link', settings: {
      foreground: palette.hue1 } },
    { scope: 'markup.inserted', settings: {
      foreground: palette.hue4 } },
    { scope: 'markup.quoted', settings: {
      foreground: palette.hue6 } },
    { scope: 'markup.inline.raw', settings: {
      foreground: palette.hue4 } },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/c.less
    { scope: 'source.c keyword.operator', settings: {
      foreground: palette.hue3 } },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/cpp.less
    { scope: 'source.cpp keyword.operator', settings: {
      foreground: palette.hue3 } },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/cs.less
    { scope: 'source.cs keyword.operator', settings: {
      foreground: palette.hue3 } },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/css.less
    { scope: 'source.css meta.property-name', settings: {
      foreground: palette.mono2 } },
    { scope: 'source.css meta.property-value', settings: {
      foreground: palette.mono2 } },
    { scope: 'source.css support.type.property-name', settings: {
      foreground: palette.mono1 } },
    { scope: 'source.css support.constant.property-value', settings: {
      foreground: palette.mono1 } },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/elixir.less
    { scope: 'source.elixir source.embedded.source', settings: {
      foreground: palette.mono1 } },
    { scope: 'source.elixir constant.language', settings: {
      foreground: palette.hue2 } },
    { scope: 'source.elixir constant.numeric', settings: {
      foreground: palette.hue2 } },
    { scope: 'source.elixir constant.definition', settings: {
      foreground: palette.hue2 } },
    { scope: 'source.elixir variable.definition', settings: {
      foreground: palette.hue3 } },
    { scope: 'source.elixir variable.anonymous', settings: {
      foreground: palette.hue3 } },
    { scope: 'source.elixir parameter.variable.function', settings: {
      foreground: palette.hue6, fontStyle: 'italic' } },
    { scope: 'source.elixir string.quoted', settings: {
      foreground: palette.hue4 } },
    { scope: 'source.elixir keyword.special-method', settings: {
      foreground: palette.hue5 } },
    { scope: 'source.elixir embedded.section', settings: {
      foreground: palette.hue5 } },
    { scope: 'source.elixir embedded.source.empty', settings: {
      foreground: palette.hue5 } },
    { scope: 'source.elixir variable.other.readwrite.module punctuation', settings: {
      foreground: palette.hue5 } },
    { scope: 'source.elixir regexp.section', settings: {
      foreground: palette.hue52 } },
    { scope: 'source.elixir regexp.string', settings: {
      foreground: palette.hue52 } },
    { scope: 'source.elixir punctuation.separator', settings: {
      foreground: palette.hue6 } },
    { scope: 'source.elixir keyword.operator', settings: {
      foreground: palette.hue6 } },
    { scope: 'source.elixir variable.constant', settings: {
      foreground: palette.hue62 } },
    { scope: 'source.elixir punctuation.array', settings: {
      foreground: palette.mono2 } },
    { scope: 'source.elixir punctuation.scope', settings: {
      foreground: palette.mono2 } },
    { scope: 'source.elixir punctuation.section', settings: {
      foreground: palette.mono2 } },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/gfm.less
    { scope: 'source.gfm link entity', settings: {
      foreground: palette.hue2 } },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/go.less
    { scope: 'source.go storage.type.string', settings: {
      foreground: palette.hue3 } },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/ini.less
    { scope: 'source.ini keyword.other.definition.ini', settings: {
      foreground: palette.hue5 } },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/java.less
    { scope: 'source.java storage.modifier.import', settings: {
      foreground: palette.hue62 } },
    { scope: 'source.java storage.type', settings: {
      foreground: palette.hue62 } },
    { scope: 'source.java-properties meta.key-pair', settings: {
      foreground: palette.hue5 } },
    { scope: 'source.java-properties meta.key-pair punctuation', settings: {
      foreground: palette.mono1 } },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/javascript.less

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/json.less
    { scope: 'source.json support.type.property-name', settings: {
      foreground: palette.hue5 } },
    { scope: 'source.json constant.language.json', settings: {
      foreground: palette.hue1 } },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/php.less
    { scope: 'source.php class.bracket', settings: {
      foreground: palette.mono1 } },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/python.less
    { scope: 'source.python keyword.operator.logical.python', settings: {
      foreground: palette.hue3 } },
    { scope: 'source.python variable.parameter', settings: {
      foreground: palette.hue6 } },

    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax/ruby.less
    { scope: 'source.ruby constant.other.symbol punctuation', settings: {
      foreground: palette.hue1 } },

    // Misc Workaround
    { scope: 'text.xml punctuation.separator.namespace', settings: {
      foreground: palette.hue6 } },
    { scope: 'markup.quote', settings: {
      foreground: palette.mono3, fontStyle: 'italic' } },
    { scope: 'punctuation.definition.list.begin.markdown', settings: {
      foreground: palette.hue5 } },
  ]
}
