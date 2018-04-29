import * as darkPalette from './dark'
import * as lightPalette from './light'
import { Rule } from './utilities'

function generate(palette: typeof darkPalette | typeof lightPalette) {
  return [
    // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/_base.less
    new Rule('comment', palette.mono3, { italic: true }),

    new Rule('entity.name.type', palette.hue62),
    new Rule('entity.other.inherited-class', palette.hue4),

    new Rule('keyword', palette.hue3),
    new Rule('keyword.control', palette.hue3),
    new Rule('keyword.operator', palette.mono1),
    new Rule('keyword.operator.new', palette.hue3),
    new Rule('keyword.operator.expression', palette.hue3),
    new Rule('keyword.operator.cast', palette.hue3),
    new Rule('keyword.operator.sizeof', palette.hue3),
    new Rule('keyword.operator.instanceof', palette.hue3),
    new Rule('keyword.other.special-method', palette.hue2),
    new Rule('keyword.other.unit', palette.hue6),

    new Rule('storage', palette.hue3),
    new Rule('storage.type.annotation', palette.hue3),
    new Rule('storage.type.primitive', palette.hue3),
    new Rule('storage.modifier.package', palette.hue3),
    new Rule('storage.modifier.import', palette.hue3),

    new Rule('constant', palette.hue6),
    new Rule('constant.variable', palette.hue6),
    new Rule('constant.character.escape', palette.hue1),
    new Rule('constant.numberic', palette.hue6),
    new Rule('constant.other.color', palette.hue1),
    new Rule('constant.other.symbol', palette.hue1),

    new Rule('variable', palette.hue5),
    new Rule('variable.interpolation', palette.hue52),
    new Rule('variable.parameter', palette.mono1),
    new Rule('variable.other.constant', palette.hue6),

    new Rule('string', palette.hue4),
    new Rule('string.regexp', palette.hue1),
    new Rule('string.regexp keyword.operator', palette.hue1),
    new Rule('string.regexp keyword.other', palette.hue1),
    new Rule('string.regexp punctuation.definition.string', palette.hue4),
    new Rule('string.other.link', palette.hue2),

    new Rule('punctuation.definition.comment', palette.mono3),
    new Rule('punctuation.definition.typeparameters', palette.mono1),
    new Rule('punctuation.definition.parameters', palette.mono1),
    new Rule('punctuation.definition.separator', palette.mono1),
    new Rule('punctuation.separator', palette.mono1),
    new Rule('punctuation.terminator', palette.mono1),
    new Rule('punctuation.definition.heading', palette.hue5),
    new Rule('punctuation.definition.identity', palette.hue2),
    new Rule('punctuation.definition.bold', palette.hue62, { bold: true }),
    new Rule('punctuation.definition.italic', palette.hue3, { italic: true }),
    new Rule('punctuation.definition.template-expression', palette.hue52),
    new Rule('punctuation.section.embedded', palette.hue52),
    new Rule('punctuation.section.method', palette.mono1),
    new Rule('punctuation.section.class', palette.mono1),
    new Rule('punctuation.section.inner-class', palette.mono1),

    new Rule('support.class', palette.hue62),
    new Rule('support.type', palette.hue1),
    new Rule('support.function', palette.hue1),
    new Rule('support.function.any-method', palette.hue2),
    new Rule('support.variable', palette.hue5),
    new Rule('support.constant', palette.hue6),

    new Rule('entity.name.function', palette.hue2),
    new Rule('entity.name.class', palette.hue62),
    new Rule('entity.name.type.class', palette.hue62),
    new Rule('entity.name.tag', palette.hue5),
    new Rule('entity.name.section.group-title', palette.hue2),
    new Rule('entity.other.attribute-name', palette.hue6),
    new Rule('entity.other.attribute-name.id', palette.hue2),

    new Rule('meta.class', palette.hue62),
    new Rule('meta.class.body', palette.mono1),
    new Rule('meta.method-call', palette.mono1),
    new Rule('meta.method', palette.mono1),
    new Rule('meta.function-call', palette.mono1),
    new Rule('meta.function', palette.mono1),
    new Rule('meta.definition.variable', palette.hue5),
    new Rule('meta.require', palette.hue2),
    new Rule('meta.selector', palette.hue3),
    new Rule('meta.brace', palette.mono1),
    new Rule('meta.separator', palette.mono1),
    new Rule('meta.tag', palette.mono1),
    new Rule('meta.field', palette.mono1),

    new Rule('invalid.deprecated', palette.syntaxDeprecatedFg, { background: palette.syntaxDeprecatedBg }),
    new Rule('invalid.illegal', palette.syntaxIllegalFg, { background:palette.syntaxIllegalBg }),

    new Rule('markup.bold', palette.hue6, { bold: true }),
    new Rule('markup.changed', palette.hue3),
    new Rule('markup.deleted', palette.hue5),
    new Rule('markup.italic', palette.hue3, { italic: true }),
    new Rule('markup.heading', palette.hue5),
    new Rule('markup.underline.link', palette.hue1),
    new Rule('markup.inserted', palette.hue4),
    new Rule('markup.quoted', palette.hue6),
    new Rule('markup.inline.raw', palette.hue4),

    // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/c.less
    new Rule('source.c keyword.operator', palette.hue3),

    // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/cpp.less
    new Rule('source.cpp keyword.operator', palette.hue3),

    // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/cs.less
    new Rule('source.cs keyword.operator', palette.hue3),

    // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/css.less
    new Rule('source.css meta.property-name', palette.mono2),
    new Rule('source.css meta.property-value', palette.mono2),
    new Rule('source.css support.type.property-name', palette.mono1),
    new Rule('source.css support.constant.property-value', palette.mono1),

    // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/elixir.less
    new Rule('source.elixir source.embedded.source', palette.mono1),
    new Rule('source.elixir constant.language', palette.hue2),
    new Rule('source.elixir constant.numeric', palette.hue2),
    new Rule('source.elixir constant.definition', palette.hue2),
    new Rule('source.elixir variable.definition', palette.hue3),
    new Rule('source.elixir variable.anonymous', palette.hue3),
    new Rule('source.elixir parameter.variable.function', palette.hue6, { italic: true }),
    new Rule('source.elixir string.quoted', palette.hue4),
    new Rule('source.elixir keyword.special-method', palette.hue5),
    new Rule('source.elixir embedded.section', palette.hue5),
    new Rule('source.elixir embedded.source.empty', palette.hue5),
    new Rule('source.elixir variable.other.readwrite.module punctuation', palette.hue5),
    new Rule('source.elixir regexp.section', palette.hue52),
    new Rule('source.elixir regexp.string', palette.hue52),
    new Rule('source.elixir punctuation.separator', palette.hue6),
    new Rule('source.elixir keyword.operator', palette.hue6),
    new Rule('source.elixir variable.constant', palette.hue62),
    new Rule('source.elixir punctuation.array', palette.mono2),
    new Rule('source.elixir punctuation.scope', palette.mono2),
    new Rule('source.elixir punctuation.section', palette.mono2),

    // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/gfm.less
    new Rule('source.gfm link entity', palette.hue2),

    // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/go.less
    new Rule('source.go storage.type.string', palette.hue3),

    // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/ini.less
    new Rule('source.ini keyword.other.definition.ini', palette.hue5),

    // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/java.less
    new Rule('source.java storage.modifier.import', palette.hue62),
    new Rule('source.java storage.type', palette.hue62),
    new Rule('source.java-properties meta.key-pair', palette.hue5),
    new Rule('source.java-properties meta.key-pair punctuation', palette.mono1),

    // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/javascript.less

    // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/json.less
    new Rule('source.json support.type.property-name', palette.hue5),
    new Rule('source.json constant.language.json', palette.hue1),

    // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/php.less
    new Rule('source.php class.bracket', palette.mono1),

    // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/python.less
    new Rule('source.python keyword.operator.logical.python', palette.hue3),
    new Rule('source.python variable.parameter', palette.hue6),

    // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/ruby.less
    new Rule('source.ruby constant.other.symbol punctuation', palette.hue1),

    // Misc Workaround
    new Rule('text.xml punctuation.separator.namespace', palette.hue6),
    new Rule('beginning.punctuation.definition.quote', palette.hue4),
    new Rule('beginning.punctuation.definition.list', palette.hue5),
  ]
}

export const dark = generate(darkPalette)
export const light = generate(lightPalette)
