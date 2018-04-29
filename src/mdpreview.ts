import * as darkPalette from './dark'
import * as lightPalette from './light'

// https://github.com/atom/markdown-preview/blob/master/styles/markdown-preview-default.less
export default `
  .vscode-dark { color: ${darkPalette.textColor}; }
  .vscode-light { color: ${lightPalette.textColor}; }

  .vscode-dark.showEditorSelection .code-active-line:before {
    border-color: ${darkPalette.insetPanelBackgroundColor};
  }
  .vscode-light.showEditorSelection .code-active-line:before {
    border-color: ${lightPalette.insetPanelBackgroundColor};
  }
  .showEditorSelection .code-line:hover:before { border: none; }

  h1 { border: none; }
  .vscode-dark h1, .vscode-dark h2, .vscode-dark h3, .vscode-dark h4,
  .vscode-dark h5, .vscode-dark h6 { color: ${darkPalette.textColorHighlight}; }
  .vscode-light h1, .vscode-light h2, .vscode-light h3, .vscode-light h4,
  .vscode-light h5, .vscode-light h6 { color: ${lightPalette.textColorHighlight}; }

  .vscode-dark strong { color: ${darkPalette.textColorHighlight}; }
  .vscode-dark s { color: ${darkPalette.textColorSubtle}; }
  .vscode-light strong { color: ${lightPalette.textColorHighlight}; }
  .vscode-light s { color: ${lightPalette.textColorSubtle}; }

  .vscode-dark a:hover, .vscode-dark a code { color: ${darkPalette.accentColor}; }
  .vscode-light a:hover, .vscode-light a code { color: ${lightPalette.accentColor}; }
  a:focus, input:focus, select:focus, textarea:focus { outline: none; }

  .vscode-dark blockquote {
    background: none;
    color: ${darkPalette.textColorSubtle};
    border-color: ${darkPalette.textColorSubtle};
  }
  .vscode-light blockquote {
    background: none;
    color: ${lightPalette.textColorSubtle};
    border-color: ${lightPalette.textColorSubtle};
  }

  .vscode-dark hr { border: dashed ${darkPalette.textColorSubtle}; }
  .vscode-light hr { border: dashed ${lightPalette.textColorSubtle}; }

  .vscode-dark th { color: ${darkPalette.textColorHighlight}; }
  .vscode-light th { color: ${lightPalette.textColorHighlight}; }
  .vscode-dark th, .vscode-dark td { border-color: ${darkPalette.textColorSubtle}; }
  .vscode-light th, .vscode-light td { border-color: ${lightPalette.textColorSubtle}; }

  .vscode-dark code {
    color: ${darkPalette.textColorHighlight};
    background-color: ${darkPalette.syntaxSelectionColor};
  }
  .vscode-light code {
    color: ${lightPalette.textColorHighlight};
    background-color: ${lightPalette.syntaxSelectionColor};
  }
`
