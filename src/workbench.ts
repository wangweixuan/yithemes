import * as tc from 'tinycolor2'
import * as darkPalette from './dark'
import * as lightPalette from './light'
import { INHERIT, TRANSPARENT } from './utilities'

// https://code.visualstudio.com/docs/getstarted/theme-color-reference
function generate(palette: typeof darkPalette | typeof lightPalette) {
  return {
    // Contrast Colors
    contrastActiveBorder: INHERIT, // TRANSPARENT
    contrastBorder: INHERIT, // TRANSPARENT

    // Base Colors
    // https://github.com/atom/one-dark-ui/blob/master/styles/ui-variables.less
    focusBorder: palette.accentColor,
    foreground: palette.textColor,
    widget_shadow: tc({ h: 0, l: 0, s: 0, a: 0.4 }),
    selection_background: palette.inputSelectionColorFocus,
    descriptionForeground: palette.textColorSubtle,
    errorForeground: palette.textColorError,

    // Text Colors
    // https://github.com/atom/one-dark-ui/blob/master/styles/text.less
    textBlockQuote_background: palette.insetPanelBackgroundColor,
    textBlockQuote_border: TRANSPARENT,
    textCodeBlock_background: palette.backgroundColorHighlight,
    textLink_activeForeground: palette.accentColor,
    textLink_foreground: palette.accentColor,
    textPreformat_foreground: INHERIT,
    textSeparator_foreground: INHERIT,

    // Button Control
    // https://github.com/atom/one-dark-ui/blob/master/styles/buttons.less
    button_background: palette.buttonBackgroundColor,
    button_foreground: palette.textColor,
    button_hoverBackground: palette.buttonBackgroundColorHover,

    // Dropdown Control
    // https://github.com/atom/one-dark-ui/blob/master/styles/dropdowns.less
    dropdown_background: palette.inputBackgroundColor,
    dropdown_listBackground: palette.overlayBackgroundColor,
    dropdown_border: palette.baseBorderColor,
    dropdown_foreground: palette.textColor,

    // Input Control
    // https://github.com/atom/one-dark-ui/blob/master/styles/inputs.less
    // https://github.com/atom/one-dark-ui/blob/master/styles/editor.less
    input_background: palette.inputBackgroundColor,
    input_border: palette.inputBorderColor,
    input_foreground: palette.textColorHighlight,
    input_placeholderForeground: palette.textColorSubtle,
    inputOption_activeBorder: palette.accentColor,
    inputValidation_errorBackground: palette.backgroundColorError,
    inputValidation_errorBorder: palette.textColorError,
    inputValidation_infoBackground: palette.backgroundColorInfo,
    inputValidation_infoBorder: palette.textColorInfo,
    inputValidation_warningBackground: palette.backgroundColorWarning,
    inputValidation_warningBorder: palette.textColorWarning,

    // Scroll Bar Control
    // https://github.com/atom/one-dark-ui/blob/master/styles/atom.less#L14
    scrollbar_shadow: TRANSPARENT,
    scrollbarSlider_activeBackground: palette.scrollbarColor.clone().setAlpha(0.5),
    scrollbarSlider_background: palette.scrollbarColor.clone().setAlpha(0.5),
    scrollbarSlider_hoverBackground: palette.scrollbarColor.clone().setAlpha(0.5),

    // Badge
    // https://github.com/atom/one-dark-ui/blob/master/styles/badges.less
    badge_foreground: palette.textColorHighlight,
    badge_background: palette.badgeBackgroundColor,

    // Progress Bar
    // https://github.com/atom/one-dark-ui/blob/master/styles/progress.less
    progressBar_background: palette.progressBackgroundColor,

    // Lists and Trees
    // https://github.com/atom/one-dark-ui/blob/master/styles/lists.less
    // https://github.com/atom/one-dark-ui/blob/master/styles/tree-view.less
    list_activeSelectionBackground: palette.buttonBackgroundColorSelected,
    list_activeSelectionForeground: palette.buttonTextColorSelected,
    list_dropBackground: palette.backgroundColorHighlight.clone().setAlpha(0.5),
    list_focusBackground: palette.buttonBackgroundColorSelected,
    list_focusForeground: palette.buttonTextColorSelected,
    list_highlightForeground: palette.textColorHighlight,
    list_hoverBackground: TRANSPARENT,
    list_hoverForeground: INHERIT,
    list_inactiveSelectionBackground: palette.backgroundColorSelected,
    list_inactiveSelectionForeground: palette.textColorSelected,
    list_inactiveFocusBackground: palette.backgroundColorSelected,
    list_invalidItemForeground: palette.textColorError,

    // Activity Bar
    activityBar_background: palette.insetPanelBackgroundColor,
    activityBar_dropBackground: palette.backgroundColorHighlight.clone().setAlpha(0.5),
    activityBar_foreground: palette.textColorHighlight,
    activityBar_border: palette.toolPanelBorderColor,
    activityBarBadge_background: INHERIT, // palette.badgeBackgroundColor
    activityBarBadge_foreground: INHERIT, // palette.textColorHighlight

    // Side Bar
    // https://github.com/atom/one-dark-ui/blob/master/styles/panels.less
    sideBar_background: palette.toolPanelBackgroundColor,
    sideBar_foreground: palette.textColor,
    sideBar_border: palette.toolPanelBorderColor,
    sideBar_dropBackground: palette.backgroundColorHighlight.clone().setAlpha(0.5),
    sideBarTitle_foreground: palette.textColorHighlight,
    sideBarSectionHeader_background: palette.panelHeadingBackgroundColor,
    sideBarSectionHeader_foreground: palette.textColor,

    // Editor Groups & Tabs
    // https://github.com/atom/one-dark-ui/blob/master/styles/tabs.less
    editorGroup_background: palette.toolPanelBackgroundColor,
    editorGroup_border: palette.toolPanelBorderColor,
    editorGroup_dropBackground: palette.backgroundColorHighlight.clone().setAlpha(0.5),
    editorGroupHeader_noTabsBackground: palette.tabBarBackgroundColor,
    editorGroupHeader_tabsBackground: palette.tabBarBackgroundColor,
    editorGroupHeader_tabsBorder: palette.tabBarBorderColor,
    tab_activeBackground: palette.tabBackgroundColorActive,
    tab_activeForeground: palette.tabTextColorActive,
    tab_border: palette.tabBorderColor,
    tab_activeBorder: TRANSPARENT,
    tab_unfocusedActiveBorder: TRANSPARENT,
    tab_inactiveBackground: palette.tabBackgroundColor,
    tab_inactiveForeground: palette.tabTextColor,
    tab_unfocusedActiveForeground: palette.tabTextColorActive,
    tab_unfocusedInactiveForeground: palette.tabTextColor,
    tab_hoverBackground: INHERIT, // TRANSPARENT
    tab_unfocusedHoverBackground: INHERIT, // TRANSPARENT
    tab_hoverBorder: INHERIT, // TRANSPARENT
    tab_unfocusedHoverBorder: INHERIT, // TRANSPARENT

    // Editor Colors
    // https://github.com/atom/one-dark-syntax/blob/master/styles/editor.less
    editor_background: palette.syntaxBackgroundColor,
    editor_foreground: palette.syntaxTextColor,
    editorLineNumber_foreground: palette.syntaxGutterTextColor,
    editorLineNumber_activeForeground: palette.syntaxGutterTextColorSelected,
    editorCursor_background: INHERIT, // palette.syntaxCursorColor
    editorCursor_foreground: palette.syntaxCursorColor,
    editor_selectionBackground: palette.syntaxSelectionColor,
    editor_selectionForeground: INHERIT,
    editor_inactiveSelectionBackground: palette.syntaxSelectionColor,
    editor_selectionHighlightBackground: palette.syntaxCursorLine,
    editor_selectionHighlightBorder: INHERIT, // TRANSPARENT
    editor_wordHighlightBackground: TRANSPARENT,
    // TODO word highlight is colliding with selection & selection highlight
    editor_wordHighlightBorder: INHERIT, // TRANSPARENT
    editor_wordHighlightStrongBackground: TRANSPARENT,
    editor_wordHighlightStrongBorder: INHERIT, // TRANSPARENT
    editor_findMatchBackground: palette.syntaxResultMarkerColor,
    editor_findMatchHighlightBackground: palette.syntaxResultMarkerColor,
    editor_findRangeHighlightBackground: palette.syntaxSelectionColor,
    editor_findMatchBorder: palette.syntaxResultMarkerColorSelected,
    editor_findMatchHighlightBorder: INHERIT, // TRANSPARENT
    editor_findRangeHighlightBorder: INHERIT, // TRANSPARENT
    editor_hoverHighlightBackground: TRANSPARENT,
    editor_lineHighlightBackground: palette.syntaxCursorLine,
    editor_lineHighlightBorder: TRANSPARENT,
    editorLink_activeForeground: palette.hue1,
    editor_rangeHighlightBackground: INHERIT, // TRANSPARENT
    editor_rangeHighlightBorder: INHERIT, // TRANSPARENT
    editorWhitespace_foreground: palette.syntaxInvisibleCharacterColor,
    editorIndentGuide_background: palette.syntaxIndentGuideColor,
    editorRuler_foreground: palette.syntaxWrapGuideColor,
    editorCodeLens_foreground: palette.mono3,
    editorBracketMatch_background: TRANSPARENT,
    editorBracketMatch_border: palette.syntaxCursorColor,
    editorOverviewRuler_border: TRANSPARENT,
    // TODO editor.overviewRulerBorder user setting is not regarded
    editorOverviewRuler_findMatchForeground: palette.syntaxResultMarkerColor,
    editorOverviewRuler_rangeHighlightForeground: INHERIT, // TRANSPARENT
    editorOverviewRuler_selectionHighlightForeground: palette.syntaxGutterBackgroundColorSelected,
    editorOverviewRuler_wordHighlightForeground: palette.syntaxGutterBackgroundColorSelected,
    editorOverviewRuler_wordHighlightStrongForeground: palette.syntaxGutterBackgroundColorSelected,
    editorOverviewRuler_modifiedForeground: palette.syntaxColorModified,
    editorOverviewRuler_addedForeground: palette.syntaxColorAdded,
    editorOverviewRuler_deletedForeground: palette.syntaxColorRemoved,
    editorOverviewRuler_errorForeground: palette.textColorError,
    editorOverviewRuler_warningForeground: palette.textColorWarning,
    editorOverviewRuler_infoForeground: palette.textColorInfo,
    editorError_foreground: palette.textColorError,
    editorError_border: INHERIT, // TRANSPARENT
    editorWarning_foreground: palette.textColorWarning,
    editorWarning_border: INHERIT, // TRANSPARENT
    editorInfo_foreground: palette.textColorInfo,
    editorInfo_border: INHERIT, // TRANSPARENT
    editorHint_foreground: palette.textColorInfo,
    editorHint_border: INHERIT, // TRANSPARENT
    editorGutter_background: palette.syntaxGutterBackgroundColor,
    editorGutter_modifiedBackground: palette.syntaxColorModified,
    editorGutter_addedBackground: palette.syntaxColorAdded,
    editorGutter_deletedBackground: palette.syntaxColorRemoved,

    // Diff Editor Colors
    // https://github.com/atom/one-dark-syntax/blob/master/styles/editor.less
    diffEditor_insertedTextBackground: palette.syntaxColorAdded.clone().setAlpha(0.24),
    diffEditor_insertedTextBorder: INHERIT, // TRANSPARENT
    diffEditor_removedTextBackground: palette.syntaxColorRemoved.clone().setAlpha(0.24),
    diffEditor_removedTextBorder: INHERIT, // TRANSPARENT

    // Editor Widget Colors
    // https://github.com/atom/one-dark-ui/blob/master/styles/modal.less
    editorWidget_background: palette.overlayBackgroundColor,
    editorWidget_border: palette.overlayBorderColor,
    editorSuggestWidget_background: INHERIT, // palette.overlayBackgroundColor
    editorSuggestWidget_border: INHERIT, // palette.overlayBorderColor
    editorSuggestWidget_foreground: INHERIT, // palette.textColor
    editorSuggestWidget_highlightForeground: INHERIT, // palette.textColorHighlight
    editorSuggestWidget_selectedBackground: INHERIT, // palette.buttonBackgroundColorSelected
    editorHoverWidget_background: INHERIT, // palette.overlayBackgroundColor
    editorHoverWidget_border: INHERIT, // palette.overlayBorderColor
    debugExceptionWidget_background: INHERIT, // palette.overlayBackgroundColor
    debugExceptionWidget_border: INHERIT, // palette.overlayBorderColor
    editorMarkerNavigation_background: palette.backgroundColorHighlight,
    editorMarkerNavigationError_background: palette.backgroundColorError,
    editorMarkerNavigationWarning_background: palette.backgroundColorWarning,
    editorMarkerNavigationInfo_background: palette.backgroundColorInfo,

    // Peek View Colors
    peekView_border: palette.accentColor,
    peekViewEditor_background: palette.insetPanelBackgroundColor,
    peekViewEditorGutter_background: INHERIT, // palette.insetPanelBackgroundColor
    peekViewEditor_matchHighlightBackground: palette.syntaxResultMarkerColor,
    peekViewEditor_matchHighlightBorder: INHERIT, // TRANSPARENT
    peekViewResult_background: palette.panelHeadingBackgroundColor,
    peekViewResult_fileForeground: palette.textColorHighlight,
    peekViewResult_lineForeground: palette.textColor,
    peekViewResult_matchHighlightBackground: palette.syntaxResultMarkerColor,
    peekViewResult_selectionBackground: palette.buttonBackgroundColorSelected,
    peekViewResult_selectionForeground: palette.buttonTextColorSelected,
    peekViewTitle_background: palette.panelHeadingBackgroundColor,
    peekViewTitleDescription_foreground: palette.textColor,
    peekViewTitleLabel_foreground: palette.textColorHighlight,

    // Merge Conflicts
    merge_currentHeaderBackground: undefined,
    merge_currentContentBackground: undefined,
    merge_incomingHeaderBackground: undefined,
    merge_incomingContentBackground: undefined,
    merge_border: undefined,
    merge_commonContentBackground: undefined,
    merge_commonHeaderBackground: undefined,
    editorOverviewRuler_currentContentForeground: undefined,
    editorOverviewRuler_incomingContentForeground: undefined,
    editorOverviewRuler_commonContentForeground: undefined,

    // Panel Colors
    // https://github.com/atom/one-dark-ui/blob/master/styles/panels.less
    panel_background: palette.toolPanelBackgroundColor,
    panel_border: palette.toolPanelBorderColor,
    panel_dropBackground: palette.backgroundColorHighlight.clone().setAlpha(0.5),
    panelTitle_activeBorder: TRANSPARENT,
    panelTitle_activeForeground: palette.tabTextColorActive,
    panelTitle_inactiveForeground: palette.tabTextColor,

    // Status Bar Colors
    // https://github.com/atom/one-dark-ui/blob/master/styles/status-bar.less
    statusBar_background: palette.toolPanelBackgroundColor,
    statusBar_foreground: palette.textColor,
    statusBar_border: palette.toolPanelBorderColor,
    statusBar_debuggingBackground: undefined,
    statusBar_debuggingForeground: INHERIT, // palette.textColor
    statusBar_debuggingBorder: INHERIT, // palette.toolPanelBorderColor
    statusBar_noFolderBackground: undefined,
    statusBar_noFolderForeground: INHERIT, // palette.textColor
    statusBar_noFolderBorder: INHERIT, // palette.toolPanelBorderColor
    statusBarItem_activeBackground: palette.level3ColorActive,
    statusBarItem_hoverBackground: palette.level3ColorHover,
    statusBarItem_prominentBackground: undefined,
    statusBarItem_prominentHoverBackground: undefined,

    // Title Bar Colors (macOS)
    // https://github.com/atom/one-dark-ui/blob/master/styles/title-bar.less
    titleBar_activeBackground: palette.appBackgroundColor,
    titleBar_activeForeground: palette.textColorHighlight,
    titleBar_inactiveBackground: palette.appBackgroundColor,
    titleBar_inactiveForeground: palette.textColor,
    titleBar_border: palette.baseBorderColor,

    // Notification Colors
    // https://github.com/atom/one-dark-ui/blob/master/styles/modal.less
    notificationCenter_border: INHERIT, // TRANSPARENT
    notificationCenterHeader_foreground: palette.textColorHighlight,
    notificationCenterHeader_background: palette.panelHeadingBackgroundColor,
    notificationToast_border: INHERIT, // TRANSPARENT
    notifications_foreground: INHERIT, // palette.textColor
    notifications_background: palette.insetPanelBackgroundColor,
    notifications_border: palette.insetPanelBorderColor,
    notificationLink_foreground: INHERIT, // palette.accentColor

    // Extensions
    extensionButton_prominentForeground: palette.textColorHighlight,
    extensionButton_prominentBackground: palette.accentBgColor,
    extensionButton_prominentHoverBackground: palette.accentBgColor,

    // Quick Picker
    pickerGroup_border: palette.overlayBorderColor,
    pickerGroup_foreground: palette.textColor,

    // Integrated Terminal Colors
    terminal_background: INHERIT,
    terminal_foreground: INHERIT,
    terminal_border: INHERIT,
    terminal_ansiBlack: INHERIT,
    terminal_ansiBlue: INHERIT,
    terminal_ansiBrightBlack: INHERIT,
    terminal_ansiBrightBlue: INHERIT,
    terminal_ansiBrightCyan: INHERIT,
    terminal_ansiBrightGreen: INHERIT,
    terminal_ansiBrightMagenta: INHERIT,
    terminal_ansiBrightRed: INHERIT,
    terminal_ansiBrightWhite: INHERIT,
    terminal_ansiBrightYellow: INHERIT,
    terminal_ansiCyan: INHERIT,
    terminal_ansiGreen: INHERIT,
    terminal_ansiMagenta: INHERIT,
    terminal_ansiRed: INHERIT,
    terminal_ansiWhite: INHERIT,
    terminal_ansiYellow: INHERIT,
    terminal_selectionBackground: INHERIT,
    terminalCursor_background: INHERIT,
    terminalCursor_foreground: INHERIT,

    // Debug
    debugToolBar_background: palette.overlayBackgroundColor,

    // Welcome Page
    welcomePage_buttonBackground: palette.buttonBackgroundColor,
    welcomePage_buttonHoverBackground: palette.buttonBackgroundColorHover,
    walkThrough_embeddedEditorBackground: palette.insetPanelBackgroundColor,

    // Git Colors
    // https://github.com/atom/one-dark-ui/blob/master/styles/git.less
    gitDecoration_modifiedResourceForeground: palette.textColorModified,
    gitDecoration_deletedResourceForeground: palette.textColorRemoved,
    gitDecoration_untrackedResourceForeground: palette.textColorAdded,
    gitDecoration_ignoredResourceForeground: palette.textColorIgnored,
    gitDecoration_conflictingResourceForeground: INHERIT, // palette.textColor
    gitDecoration_submoduleResourceForeground: INHERIT, // palette.textColor
  }
}

export const dark = generate(darkPalette)
export const light = generate(lightPalette)
