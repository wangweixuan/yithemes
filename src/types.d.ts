import * as tc from 'tinycolor2'
import * as darkPalette from './dark'
import * as lightPalette from './light'

export type Palette = typeof darkPalette | typeof lightPalette

// https://github.com/Microsoft/vscode-textmate/blob/master/src/theme.ts
export type SyntaxRule = {
  scope: string;
  settings: {
    foreground: tc.Instance;
    // https://github.com/Microsoft/vscode/issues/3429
    background?: tc.Instance;
    fontStyle?: 'bold' | 'italic' | 'underline' | 'bold italic' | 'bold underline' |
      'italic underline' | 'bold italic underline';
  };
}
