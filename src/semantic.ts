import * as darkPalette from './dark'
import * as lightPalette from './light'

export type SemanticRules = Record<string, SemanticSettings>

type SemanticSettings =
  | string
  | {
      foreground?: string
      bold?: boolean
      italic?: boolean
      underline?: boolean
    }
  | {
      foreground?: string
      fontStyle:
        | 'bold'
        | 'italic'
        | 'underline'
        | 'bold italic'
        | 'bold underline'
        | 'italic underline'
        | 'bold italic underline'
    }

function generateSemantic(
  palette: typeof darkPalette | typeof lightPalette
): SemanticRules {
  return {}
}

export const SEMANTIC_DARK = generateSemantic(darkPalette)
export const SEMANTIC_LIGHT = generateSemantic(lightPalette)
