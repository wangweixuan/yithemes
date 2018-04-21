import {
  hue1, hue2, hue3, hue4, hue5, hue52, hue6, hue62, mono1, mono2, mono3,
  syntaxDeprecatedBg, syntaxDeprecatedFg, syntaxIllegalBg, syntaxIllegalFg
} from './dark.palette'
import { Rule } from './utilities'

export default [
  // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/_base.less
  new Rule('comment', mono3, { italic: true }),

  new Rule('entity.name.type', hue62),
  new Rule('entity.other.inherited-class', hue4),

  new Rule('keyword', hue3),
  new Rule('keyword.control', hue3),
  new Rule('keyword.operator', mono1),
  new Rule('keyword.operator.new', hue3),
  new Rule('keyword.operator.expression', hue3),
  new Rule('keyword.operator.cast', hue3),
  new Rule('keyword.operator.sizeof', hue3),
  new Rule('keyword.operator.instanceof', hue3),
  new Rule('keyword.other.special-method', hue2),
  new Rule('keyword.other.unit', hue6),

  new Rule('storage', hue3),
  new Rule('storage.type.annotation', hue3),
  new Rule('storage.type.primitive', hue3),
  new Rule('storage.modifier.package', hue3),
  new Rule('storage.modifier.import', hue3),

  new Rule('constant', hue6),
  new Rule('constant.variable', hue6),
  new Rule('constant.character.escape', hue1),
  new Rule('constant.numberic', hue6),
  new Rule('constant.other.color', hue1),
  new Rule('constant.other.symbol', hue1),

  new Rule('variable', hue5),
  new Rule('variable.interpolation', hue52),
  new Rule('variable.parameter', mono1),
  new Rule('variable.other.constant', hue6),

  new Rule('string', hue4),
  new Rule('string.regexp', hue1),
  new Rule('string.regexp keyword.operator', hue1),
  new Rule('string.regexp keyword.other', hue1),
  new Rule('string.regexp punctuation.definition.string', hue4),
  new Rule('string.other.link', hue2),

  new Rule('punctuation.definition.comment', mono3),
  new Rule('punctuation.definition.typeparameters', mono1),
  new Rule('punctuation.definition.parameters', mono1),
  new Rule('punctuation.definition.separator', mono1),
  new Rule('punctuation.separator', mono1),
  new Rule('punctuation.terminator', mono1),
  new Rule('punctuation.definition.heading', hue5),
  new Rule('punctuation.definition.identity', hue2),
  new Rule('punctuation.definition.bold', hue62, { bold: true }),
  new Rule('punctuation.definition.italic', hue3, { italic: true }),
  new Rule('punctuation.definition.template-expression', hue52),
  new Rule('punctuation.section.embedded', hue52),
  new Rule('punctuation.section.method', mono1),
  new Rule('punctuation.section.class', mono1),
  new Rule('punctuation.section.inner-class', mono1),

  new Rule('support.class', hue62),
  new Rule('support.type', hue1),
  new Rule('support.function', hue1),
  new Rule('support.function.any-method', hue2),
  new Rule('support.variable', hue5),
  new Rule('support.constant', hue6),

  new Rule('entity.name.function', hue2),
  new Rule('entity.name.class', hue62),
  new Rule('entity.name.type.class', hue62),
  new Rule('entity.name.tag', hue5),
  new Rule('entity.name.section.group-title', hue2),
  new Rule('entity.other.attribute-name', hue6),
  new Rule('entity.other.attribute-name.id', hue2),

  new Rule('meta.class', hue62),
  new Rule('meta.class.body', mono1),
  new Rule('meta.method-call', mono1),
  new Rule('meta.method', mono1),
  new Rule('meta.function-call', mono1),
  new Rule('meta.function', mono1),
  new Rule('meta.definition.variable', hue5),
  new Rule('meta.require', hue2),
  new Rule('meta.selector', hue3),
  new Rule('meta.brace', mono1),
  new Rule('meta.separator', mono1),
  new Rule('meta.tag', mono1),
  new Rule('meta.field', mono1),

  new Rule('invalid.deprecated', syntaxDeprecatedFg, { background: syntaxDeprecatedBg }),
  new Rule('invalid.illegal', syntaxIllegalFg, { background: syntaxIllegalBg }),

  new Rule('markup.bold', hue6, { bold: true }),
  new Rule('markup.changed', hue3),
  new Rule('markup.deleted', hue5),
  new Rule('markup.italic', hue3, { italic: true }),
  new Rule('markup.heading', hue5),
  new Rule('markup.underline.link', hue1),
  new Rule('markup.inserted', hue4),
  new Rule('markup.quoted', hue6),
  new Rule('markup.inline.raw', hue4),

  // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/c.less
  new Rule('source.c keyword.operator', hue3),

  // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/cpp.less
  new Rule('source.cpp keyword.operator', hue3),

  // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/cs.less
  new Rule('source.cs keyword.operator', hue3),

  // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/css.less
  new Rule('source.css meta.property-name', mono2),
  new Rule('source.css meta.property-value', mono2),
  new Rule('source.css support.type.property-name', mono1),
  new Rule('source.css support.constant.property-value', mono1),

  // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/elixir.less
  new Rule('source.elixir source.embedded.source', mono1),
  new Rule('source.elixir constant.language', hue2),
  new Rule('source.elixir constant.numeric', hue2),
  new Rule('source.elixir constant.definition', hue2),
  new Rule('source.elixir variable.definition', hue3),
  new Rule('source.elixir variable.anonymous', hue3),
  new Rule('source.elixir parameter.variable.function', hue6, { italic: true }),
  new Rule('source.elixir string.quoted', hue4),
  new Rule('source.elixir keyword.special-method', hue5),
  new Rule('source.elixir embedded.section', hue5),
  new Rule('source.elixir embedded.source.empty', hue5),
  new Rule('source.elixir variable.other.readwrite.module punctuation', hue5),
  new Rule('source.elixir regexp.section', hue52),
  new Rule('source.elixir regexp.string', hue52),
  new Rule('source.elixir punctuation.separator', hue6),
  new Rule('source.elixir keyword.operator', hue6),
  new Rule('source.elixir variable.constant', hue62),
  new Rule('source.elixir punctuation.array', mono2),
  new Rule('source.elixir punctuation.scope', mono2),
  new Rule('source.elixir punctuation.section', mono2),

  // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/gfm.less
  new Rule('source.gfm link entity', hue2),

  // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/go.less
  new Rule('source.go storage.type.string', hue3),

  // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/ini.less
  new Rule('source.ini keyword.other.definition.ini', hue5),

  // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/java.less
  new Rule('source.java storage.modifier.import', hue62),
  new Rule('source.java storage.type', hue62),
  new Rule('source.java-properties meta.key-pair', hue5),
  new Rule('source.java-properties meta.key-pair punctuation', mono1),

  // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/javascript.less

  // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/json.less
  new Rule('source.json support.type.property-name', hue5),
  new Rule('source.json constant.language.json', hue1),

  // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/php.less
  new Rule('source.php class.bracket', mono1),

  // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/python.less
  new Rule('source.python keyword.operator.logical.python', hue3),
  new Rule('source.python variable.parameter', hue6),

  // https://github.com/atom/one-dark-syntax/blob/master/styles/syntax/ruby.less
  new Rule('source.ruby constant.other.symbol punctuation', hue1),

  // Misc Workaround
  new Rule('text.xml punctuation.separator.namespace', hue6),
  new Rule('beginning.punctuation.definition.quote', hue4),
  new Rule('beginning.punctuation.definition.list', hue5),
]
