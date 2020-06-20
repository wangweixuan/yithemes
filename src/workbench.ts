import * as tc from 'tinycolor2'
import * as darkPalette from './dark'
import * as lightPalette from './light'

export type WorkbenchRules = Record<string, tc.Instance | undefined>

const INHERIT = undefined
const TRANSPARENT = tc('transparent')

// https://code.visualstudio.com/api/references/theme-color
function generateWorkbench(
  palette: typeof darkPalette | typeof lightPalette
): WorkbenchRules {
  const dropBackground = tc('gray').setAlpha(1 - palette.overlayBackdropOpacity)

  return {
    // Contrast Colors
    'contrastActiveBorder': INHERIT, // TRANSPARENT
    'contrastBorder': INHERIT, // TRANSPARENT

    // Base Colors
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/ui-variables.less
    'descriptionForeground': palette.textColorSubtle,
    'errorForeground': palette.textColorError,
    'focusBorder': palette.accentColor,
    'foreground': palette.textColor,
    'icon.foreground': palette.textColor,
    'selection.background': palette.inputSelectionColorFocus,
    'widget.shadow': tc({ h: 0, l: 0, s: 0, a: 0.4 }),

    // Window Border
    'window.activeBorder': INHERIT,
    'window.inactiveBorder': INHERIT,

    // Text Colors
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/text.less
    'textBlockQuote.background': palette.insetPanelBackgroundColor,
    'textBlockQuote.border': TRANSPARENT,
    'textCodeBlock.background': palette.backgroundColorHighlight,
    'textLink.activeForeground': palette.accentColor,
    'textLink.foreground': palette.accentColor,
    'textPreformat.foreground': INHERIT,
    'textSeparator.foreground': INHERIT,

    // Button Control
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/buttons.less
    'button.background': palette.buttonBackgroundColor,
    'button.foreground': palette.textColor,
    'button.hoverBackground': palette.buttonBackgroundColorHover,
    'checkbox.background': INHERIT, // inputBackgroundColor
    'checkbox.border': INHERIT, // baseBorderColor
    'checkbox.foreground': INHERIT, // textColor

    // Dropdown Control
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/dropdowns.less
    'dropdown.background': palette.inputBackgroundColor,
    'dropdown.border': palette.baseBorderColor,
    'dropdown.foreground': palette.textColor,
    'dropdown.listBackground': palette.overlayBackgroundColor,

    // Input Control
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/inputs.less
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/editor.less
    'input.background': palette.inputBackgroundColor,
    'input.border': palette.inputBorderColor,
    'input.foreground': palette.textColorHighlight,
    'input.placeholderForeground': palette.textColorSubtle,
    'inputOption.activeBackground': palette.buttonBackgroundColorSelected,
    'inputOption.activeBorder': TRANSPARENT,
    'inputOption.activeForeground': palette.textColorSelected,
    'inputValidation.errorBackground': palette.backgroundColorError,
    'inputValidation.errorBorder': palette.textColorError,
    'inputValidation.errorForeground': palette.textColorHighlight,
    'inputValidation.infoBackground': palette.backgroundColorInfo,
    'inputValidation.infoBorder': palette.textColorInfo,
    'inputValidation.infoForeground': palette.textColorHighlight,
    'inputValidation.warningBackground': palette.backgroundColorWarning,
    'inputValidation.warningBorder': palette.textColorWarning,
    'inputValidation.warningForeground': palette.textColorHighlight,

    // Scrollbar Control
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/atom.less#L14
    'scrollbar.shadow': TRANSPARENT,
    'scrollbarSlider.activeBackground': palette.scrollbarColor
      .clone()
      .setAlpha(0.8),
    'scrollbarSlider.background': palette.scrollbarColor.clone().setAlpha(0.5),
    'scrollbarSlider.hoverBackground': palette.scrollbarColor
      .clone()
      .setAlpha(0.8),

    // Badge
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/badges.less
    'badge.background': palette.badgeBackgroundColor,
    'badge.foreground': palette.textColorHighlight,

    // Progress Bar
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/progress.less
    'progressBar.background': palette.progressBackgroundColor,

    // Lists and Trees
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/lists.less
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/tree-view.less
    'list.activeSelectionBackground': palette.buttonBackgroundColorSelected,
    'list.activeSelectionForeground': palette.buttonTextColorSelected,
    'list.deemphasizedForeground': palette.textColorSubtle,
    'list.dropBackground': palette.backgroundColorHighlight,
    'list.errorForeground': palette.textColorError,
    'list.filterMatchBackground': INHERIT, // syntaxResultMarkerColor
    'list.filterMatchBorder': INHERIT, // TRANSPARENT
    'list.focusBackground': palette.backgroundColorInactive,
    'list.focusForeground': palette.textColorSelected,
    'list.highlightForeground': palette.accentColor,
    'list.hoverBackground': TRANSPARENT,
    'list.hoverForeground': INHERIT, // textColor
    'list.inactiveFocusBackground': palette.backgroundColorInactive,
    'list.inactiveSelectionBackground': palette.backgroundColorInactive,
    'list.inactiveSelectionForeground': INHERIT, // textColorSelected
    'list.invalidItemForeground': palette.textColorError,
    'list.warningForeground': palette.textColorWarning,
    'listFilterWidget.background': palette.inputBackgroundColor,
    'listFilterWidget.noMatchesOutline': palette.textColorError,
    'listFilterWidget.outline': palette.accentColor,
    'tree.indentGuidesStroke': palette.syntaxIndentGuideColor,

    // Activity Bar
    'activityBar.activeBackground': INHERIT, // textColorHighlight
    'activityBar.activeBorder': palette.accentBgColor,
    'activityBar.activeFocusBorder': INHERIT, // TRANSPARENT
    'activityBar.background': palette.insetPanelBackgroundColor,
    'activityBar.border': palette.toolPanelBorderColor,
    'activityBar.dropBackground': dropBackground,
    'activityBar.dropBorder': palette.accentColor,
    'activityBar.foreground': palette.textColorHighlight,
    'activityBar.inactiveForeground': palette.textColor,
    'activityBarBadge.background': palette.accentBgColor,
    'activityBarBadge.foreground': palette.textColorHighlight,

    // Side Bar
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/panels.less
    'sideBar.background': palette.toolPanelBackgroundColor,
    'sideBar.border': palette.toolPanelBorderColor,
    'sideBar.dropBackground': dropBackground,
    'sideBar.foreground': palette.textColor,
    'sideBarSectionHeader.background': palette.panelHeadingBackgroundColor,
    'sideBarSectionHeader.border': INHERIT, // TRANSPARENT
    'sideBarSectionHeader.foreground': palette.textColor,
    'sideBarTitle.foreground': palette.textColorHighlight,

    // Minimap
    'minimap.background': INHERIT, // syntaxBackgroundColor
    'minimap.errorHighlight': palette.textColorError,
    'minimap.findMatchHighlight': palette.syntaxResultMarkerColorSelected,
    'minimap.selectionHighlight': palette.syntaxResultMarkerColor,
    'minimap.warningHighlight': palette.textColorWarning,
    'minimapGutter.addedBackground': palette.textColorAdded,
    'minimapGutter.deletedBackground': palette.textColorRemoved,
    'minimapGutter.modifiedBackground': palette.textColorModified,
    'minimapSlider.activeBackground': palette.scrollbarColor
      .clone()
      .setAlpha(0.8),
    'minimapSlider.background': palette.scrollbarColor.clone().setAlpha(0.5),
    'minimapSlider.hoverBackground': palette.scrollbarColor
      .clone()
      .setAlpha(0.8),

    // Editor Groups and Tabs
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/tabs.less
    'editorGroup.border': palette.toolPanelBorderColor,
    'editorGroup.dropBackground': dropBackground,
    'editorGroup.emptyBackground': INHERIT, // toolPanelBackgroundColor
    'editorGroup.focusedEmptyBorder': INHERIT, // toolPanelBorderColor
    'editorGroupHeader.border': palette.tabBarBorderColor,
    'editorGroupHeader.noTabsBackground': palette.tabBarBackgroundColor,
    'editorGroupHeader.tabsBackground': palette.tabBarBackgroundColor,
    'editorGroupHeader.tabsBorder': TRANSPARENT,
    'editorPane.background': INHERIT, // syntaxBackgroundColor
    'tab.activeBackground': palette.tabBackgroundColorActive,
    'tab.activeBorder': TRANSPARENT,
    'tab.activeBorderTop': INHERIT, // TRANSPARENT
    'tab.activeForeground': palette.tabTextColorActive,
    'tab.activeModifiedBorder': palette.accentColor,
    'tab.border': palette.tabBorderColor,
    'tab.hoverBackground': INHERIT, // TRANSPARENT
    'tab.hoverBorder': INHERIT, // TRANSPARENT
    'tab.hoverForeground': palette.textColorHighlight,
    'tab.inactiveBackground': palette.tabBackgroundColor,
    'tab.inactiveForeground': palette.tabTextColor,
    'tab.inactiveModifiedBorder': palette.accentColor,
    'tab.unfocusedActiveBackground': INHERIT, // tabBackgroundColorActive
    'tab.unfocusedActiveBorder': TRANSPARENT,
    'tab.unfocusedActiveBorderTop': INHERIT, // TRANSPARENT
    'tab.unfocusedActiveForeground': palette.tabTextColorActive,
    'tab.unfocusedActiveModifiedBorder': palette.accentColor,
    'tab.unfocusedHoverBackground': INHERIT, // TRANSPARENT
    'tab.unfocusedHoverBorder': INHERIT, // TRANSPARENT
    'tab.unfocusedHoverForeground': INHERIT, // textColorHighlight
    'tab.unfocusedInactiveBackground': INHERIT, // tabBackgroundColor
    'tab.unfocusedInactiveForeground': palette.tabTextColor,
    'tab.unfocusedInactiveModifiedBorder': palette.accentColor,

    // Editor
    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/editor.less
    'editor.background': palette.syntaxBackgroundColor,
    'editor.findMatchBackground': palette.syntaxResultMarkerColor,
    'editor.findMatchBorder': palette.syntaxResultMarkerColorSelected,
    'editor.findMatchHighlightBackground': palette.syntaxResultMarkerColor,
    'editor.findMatchHighlightBorder': INHERIT, // TRANSPARENT
    'editor.findRangeHighlightBackground': palette.syntaxSelectionColor,
    'editor.findRangeHighlightBorder': INHERIT, // TRANSPARENT
    'editor.foldBackground': palette.syntaxCursorLine,
    'editor.foreground': palette.syntaxTextColor,
    'editor.hoverHighlightBackground': TRANSPARENT,
    'editor.inactiveSelectionBackground': palette.syntaxSelectionColor,
    'editor.lineHighlightBackground': palette.syntaxCursorLine,
    'editor.lineHighlightBorder': TRANSPARENT,
    'editor.rangeHighlightBackground': INHERIT, // TRANSPARENT
    'editor.rangeHighlightBorder': INHERIT, // TRANSPARENT
    'editor.selectionBackground': palette.syntaxSelectionColor,
    'editor.selectionForeground': INHERIT,
    'editor.selectionHighlightBackground': palette.syntaxCursorLine,
    'editor.selectionHighlightBorder': INHERIT, // TRANSPARENT
    'editor.symbolHighlightBackground': INHERIT, // syntaxResultMarkerColor
    'editor.symbolHighlightBorder': INHERIT, // TRANSPARENT
    'editor.wordHighlightBackground': TRANSPARENT,
    'editor.wordHighlightBorder': INHERIT, // TRANSPARENT
    'editor.wordHighlightStrongBackground': TRANSPARENT,
    'editor.wordHighlightStrongBorder': INHERIT, // TRANSPARENT
    'editorBracketMatch.background': TRANSPARENT,
    'editorBracketMatch.border': palette.syntaxCursorColor,
    'editorCodeLens.foreground': palette.mono3,
    'editorCursor.background': INHERIT, // syntaxCursorColor
    'editorCursor.foreground': palette.syntaxCursorColor,
    'editorError.border': INHERIT, // TRANSPARENT
    'editorError.foreground': palette.textColorError,
    'editorGutter.addedBackground': palette.syntaxColorAdded,
    'editorGutter.background': palette.syntaxGutterBackgroundColor,
    'editorGutter.commentRangeForeground': palette.syntaxWrapGuideColor,
    'editorGutter.deletedBackground': palette.syntaxColorRemoved,
    'editorGutter.foldingControlForeground': INHERIT, // textColor
    'editorGutter.modifiedBackground': palette.syntaxColorModified,
    'editorHint.border': INHERIT, // TRANSPARENT
    'editorHint.foreground': palette.textColorInfo,
    'editorIndentGuide.activeBackground': palette.syntaxGutterTextColor,
    'editorIndentGuide.background': palette.syntaxIndentGuideColor,
    'editorInfo.border': INHERIT, // TRANSPARENT
    'editorInfo.foreground': palette.textColorInfo,
    'editorLightBulb.foreground': INHERIT, // #ffcc00, #ddb100
    'editorLightBulbAutoFix.foreground': INHERIT, // #75beff, #007acc
    'editorLineNumber.activeForeground': palette.syntaxGutterTextColorSelected,
    'editorLineNumber.foreground': palette.syntaxGutterTextColor,
    'editorLink.activeForeground': palette.hue1,
    'editorOverviewRuler.addedForeground': palette.syntaxColorAdded,
    'editorOverviewRuler.background': INHERIT, // syntaxBackgroundColor
    'editorOverviewRuler.border': TRANSPARENT,
    'editorOverviewRuler.bracketMatchForeground': palette.syntaxSelectionColor,
    'editorOverviewRuler.deletedForeground': palette.syntaxColorRemoved,
    'editorOverviewRuler.errorForeground': palette.textColorError,
    'editorOverviewRuler.findMatchForeground': palette.syntaxSelectionColor,
    'editorOverviewRuler.infoForeground': palette.textColorInfo,
    'editorOverviewRuler.modifiedForeground': palette.syntaxColorModified,
    'editorOverviewRuler.rangeHighlightForeground': INHERIT, // TRANSPARENT
    'editorOverviewRuler.selectionHighlightForeground':
      palette.syntaxSelectionColor,
    'editorOverviewRuler.warningForeground': palette.textColorWarning,
    'editorOverviewRuler.wordHighlightForeground': palette.syntaxSelectionColor,
    'editorOverviewRuler.wordHighlightStrongForeground':
      palette.syntaxSelectionColor,
    'editorRuler.foreground': palette.syntaxWrapGuideColor,
    'editorUnnecessaryCode.border': INHERIT, // TRANSPARENT
    'editorUnnecessaryCode.opacity': INHERIT, // #000a, #0007
    'editorWarning.border': INHERIT, // TRANSPARENT
    'editorWarning.foreground': palette.textColorWarning,
    'editorWhitespace.foreground': palette.syntaxInvisibleCharacterColor,
    'problemsErrorIcon.foreground': INHERIT, // textColorError
    'problemsInfoIcon.foreground': INHERIT, // textColorInfo
    'problemsWarningIcon.foreground': INHERIT, // textColorWarning
    'searchEditor.findMatchBackground': palette.syntaxResultMarkerColor,
    'searchEditor.findMatchBorder': INHERIT, // TRANSPARENT
    'searchEditor.textInputBorder': INHERIT, // inputBorderColor

    // Diff Editor
    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/editor.less
    'diffEditor.border': palette.toolPanelBorderColor,
    'diffEditor.diagonalFill': palette.syntaxGuide,
    'diffEditor.insertedTextBackground': palette.syntaxColorAdded
      .clone()
      .setAlpha(0.24),
    'diffEditor.insertedTextBorder': INHERIT, // TRANSPARENT
    'diffEditor.removedTextBackground': palette.syntaxColorRemoved
      .clone()
      .setAlpha(0.24),
    'diffEditor.removedTextBorder': INHERIT, // TRANSPARENT

    // Editor Widget
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/modal.less
    'debugExceptionWidget.background': INHERIT, // overlayBackgroundColor
    'debugExceptionWidget.border': INHERIT, // overlayBorderColor
    'editorHoverWidget.background': INHERIT, // overlayBackgroundColor
    'editorHoverWidget.border': INHERIT, // overlayBorderColor
    'editorHoverWidget.foreground': INHERIT, // textColor
    'editorHoverWidget.statusBarBackground': palette.overlayBackgroundColor,
    'editorMarkerNavigation.background': palette.backgroundColorHighlight,
    'editorMarkerNavigationError.background': palette.backgroundColorError,
    'editorMarkerNavigationInfo.background': palette.backgroundColorInfo,
    'editorMarkerNavigationWarning.background': palette.backgroundColorWarning,
    'editorSuggestWidget.background': INHERIT, // overlayBackgroundColor
    'editorSuggestWidget.border': INHERIT, // overlayBorderColor
    'editorSuggestWidget.foreground': INHERIT, // textColor
    'editorSuggestWidget.highlightForeground': palette.textColorHighlight,
    'editorSuggestWidget.selectedBackground': INHERIT, // backgroundColorInactive
    'editorWidget.background': palette.overlayBackgroundColor,
    'editorWidget.border': palette.overlayBorderColor,
    'editorWidget.foreground': INHERIT, // textColor
    'editorWidget.resizeBorder': palette.overlayBackgroundColor,

    // Peek View
    'peekView.border': palette.accentColor,
    'peekViewEditor.background': palette.insetPanelBackgroundColor,
    'peekViewEditor.matchHighlightBackground': palette.syntaxResultMarkerColor,
    'peekViewEditor.matchHighlightBorder': INHERIT, // TRANSPARENT
    'peekViewEditorGutter.background': INHERIT, // insetPanelBackgroundColor
    'peekViewResult.background': palette.panelHeadingBackgroundColor,
    'peekViewResult.fileForeground': palette.textColorHighlight,
    'peekViewResult.lineForeground': palette.textColor,
    'peekViewResult.matchHighlightBackground': palette.syntaxResultMarkerColor,
    'peekViewResult.selectionBackground': palette.buttonBackgroundColorSelected,
    'peekViewResult.selectionForeground': palette.buttonTextColorSelected,
    'peekViewTitle.background': palette.panelHeadingBackgroundColor,
    'peekViewTitleDescription.foreground': palette.textColor,
    'peekViewTitleLabel.foreground': palette.textColorHighlight,

    // Merge Conflicts
    'editorOverviewRuler.commonContentForeground': undefined,
    'editorOverviewRuler.currentContentForeground': undefined,
    'editorOverviewRuler.incomingContentForeground': undefined,
    'merge.border': undefined,
    'merge.commonContentBackground': undefined,
    'merge.commonHeaderBackground': undefined,
    'merge.currentContentBackground': undefined,
    'merge.currentHeaderBackground': undefined,
    'merge.incomingContentBackground': undefined,
    'merge.incomingHeaderBackground': undefined,

    // Panel
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/panels.less
    'panel.background': palette.toolPanelBackgroundColor,
    'panel.border': palette.toolPanelBorderColor,
    'panel.dropBackground': dropBackground,
    'panel.dropBorder': INHERIT, // tabTextColorActive
    'panelInput.border': palette.inputBorderColor,
    'panelSection.border': INHERIT, // toolPanelBorderColor
    'panelSection.dropBackground': INHERIT, // dropBackground
    'panelSectionHeader.background': palette.panelHeadingBackgroundColor,
    'panelSectionHeader.border': INHERIT, // TRANSPARENT
    'panelSectionHeader.foreground': INHERIT, // textColor
    'panelTitle.activeBorder': TRANSPARENT,
    'panelTitle.activeForeground': palette.tabTextColorActive,
    'panelTitle.inactiveForeground': palette.tabTextColor,

    // Preview
    'imagePreview.border': palette.toolPanelBorderColor,

    // Status Bar
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/status-bar.less
    'statusBar.background': palette.toolPanelBackgroundColor,
    'statusBar.border': palette.toolPanelBorderColor,
    'statusBar.debuggingBackground': INHERIT,
    'statusBar.debuggingBorder': INHERIT, // toolPanelBorderColor
    'statusBar.debuggingForeground': palette.accentBgTextColor,
    'statusBar.foreground': palette.textColor,
    'statusBar.noFolderBackground': palette.toolPanelBackgroundColor,
    'statusBar.noFolderBorder': INHERIT, // toolPanelBorderColor
    'statusBar.noFolderForeground': INHERIT, // textColor
    'statusBarItem.activeBackground': palette.level3ColorActive,
    'statusBarItem.hoverBackground': palette.level3ColorHover,
    'statusBarItem.prominentBackground': palette.accentBgColor,
    'statusBarItem.prominentForeground': palette.accentBgTextColor,
    'statusBarItem.prominentHoverBackground': palette.accentBgColor,
    'statusBarItem.remoteBackground': INHERIT, // badgeBackgroundColor
    'statusBarItem.remoteForeground': INHERIT, // textColorHighlight

    // Title Bar
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/title-bar.less
    'titleBar.activeBackground': palette.appBackgroundColor,
    'titleBar.activeForeground': palette.textColorHighlight,
    'titleBar.border': palette.baseBorderColor,
    'titleBar.inactiveBackground': palette.appBackgroundColor,
    'titleBar.inactiveForeground': palette.textColor,

    // Menu Bar
    'menu.background': palette.insetPanelBackgroundColor,
    'menu.border': INHERIT, // TRANSPARENT
    'menu.foreground': palette.textColorHighlight,
    'menu.selectionBackground': palette.buttonBackgroundColorSelected,
    'menu.selectionBorder': INHERIT, // TRANSPARENT
    'menu.selectionForeground': INHERIT, // textColorHighlight
    'menu.separatorBackground': palette.baseBorderColor,
    'menubar.selectionBackground': palette.buttonBackgroundColorSelected,
    'menubar.selectionBorder': INHERIT, // TRANSPARENT
    'menubar.selectionForeground': INHERIT, // textColorHighlight

    // Notification
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/modal.less
    'notificationCenter.border': INHERIT, // TRANSPARENT
    'notificationCenterHeader.background': palette.panelHeadingBackgroundColor,
    'notificationCenterHeader.foreground': palette.textColorHighlight,
    'notificationLink.foreground': INHERIT, // accentColor
    'notificationToast.border': INHERIT, // TRANSPARENT
    'notifications.background': palette.insetPanelBackgroundColor,
    'notifications.border': palette.insetPanelBorderColor,
    'notifications.foreground': INHERIT, // textColor
    'notificationsErrorIcon.foreground': INHERIT, // textColorError
    'notificationsInfoIcon.foreground': INHERIT, // textColorInfo
    'notificationsWarningIcon.foreground': INHERIT, // textColorWarning

    // Extensions
    'extensionBadge.remoteBackground': INHERIT, // badgeBackgroundColor
    'extensionBadge.remoteForeground': INHERIT, // textColorHighlight
    'extensionButton.prominentBackground': palette.accentBgColor,
    'extensionButton.prominentForeground': palette.accentBgTextColor,
    'extensionButton.prominentHoverBackground': palette.accentBgColor,

    // Quick Picker
    'pickerGroup.border': palette.overlayBorderColor,
    'pickerGroup.foreground': palette.textColor,
    'quickInput.background': palette.overlayBackgroundColor,
    'quickInput.foreground': INHERIT, // textColor
    'quickInputTitle.background': palette.overlayBackgroundColor,

    // Integrated Terminal
    'terminal.ansiBlack': INHERIT,
    'terminal.ansiBlue': INHERIT,
    'terminal.ansiBrightBlack': INHERIT,
    'terminal.ansiBrightBlue': INHERIT,
    'terminal.ansiBrightCyan': INHERIT,
    'terminal.ansiBrightGreen': INHERIT,
    'terminal.ansiBrightMagenta': INHERIT,
    'terminal.ansiBrightRed': INHERIT,
    'terminal.ansiBrightWhite': INHERIT,
    'terminal.ansiBrightYellow': INHERIT,
    'terminal.ansiCyan': INHERIT,
    'terminal.ansiGreen': INHERIT,
    'terminal.ansiMagenta': INHERIT,
    'terminal.ansiRed': INHERIT,
    'terminal.ansiWhite': INHERIT,
    'terminal.ansiYellow': INHERIT,
    'terminal.background': INHERIT,
    'terminal.border': INHERIT, // toolPanelBorderColor
    'terminal.foreground': INHERIT,
    'terminal.selectionBackground': INHERIT,
    'terminalCursor.background': INHERIT,
    'terminalCursor.foreground': INHERIT,

    // Debug
    'debugTokenExpression.boolean': palette.hue6,
    'debugTokenExpression.error': palette.textColorError,
    'debugTokenExpression.name': palette.hue5,
    'debugTokenExpression.number': palette.hue6,
    'debugTokenExpression.string': palette.hue4,
    'debugTokenExpression.value': palette.hue1,
    'debugToolBar.background': palette.overlayBackgroundColor,
    'debugToolBar.border': INHERIT, // TRANSPARENT
    'debugView.exceptionLabelBackground': palette.backgroundColorError,
    'debugView.exceptionLabelForeground': palette.textColor,
    'debugView.stateLabelBackground': palette.backgroundColorSuccess,
    'debugView.stateLabelForeground': INHERIT, // textColor
    'debugView.valueChangedHighlight': palette.backgroundColorInfo,
    'editor.focusedStackFrameHighlightBackground':
      palette.backgroundColorWarning,
    'editor.stackFrameHighlightBackground': palette.backgroundColorWarning,

    // Welcome Page
    'walkThrough.embeddedEditorBackground': palette.insetPanelBackgroundColor,
    'welcomePage.buttonBackground': palette.buttonBackgroundColor,
    'welcomePage.buttonHoverBackground': palette.buttonBackgroundColorHover,

    // Git
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/git.less
    'gitDecoration.addedResourceForeground': palette.textColorAdded,
    'gitDecoration.conflictingResourceForeground': INHERIT, // textColor
    'gitDecoration.deletedResourceForeground': palette.textColorRemoved,
    'gitDecoration.ignoredResourceForeground': palette.textColorIgnored,
    'gitDecoration.modifiedResourceForeground': palette.textColorModified,
    'gitDecoration.submoduleResourceForeground': INHERIT, // textColor
    'gitDecoration.untrackedResourceForeground': palette.textColorAdded,

    // Settings Editor
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/settings.less
    'settings.checkboxBackground': INHERIT, // inputBackgroundColor
    'settings.checkboxBorder': INHERIT, // baseBorderColor
    'settings.checkboxForeground': INHERIT, // textColor
    'settings.dropdownBackground': INHERIT, // inputBackgroundColor
    'settings.dropdownBorder': INHERIT, // baseBorderColor
    'settings.dropdownForeground': INHERIT, // textColor
    'settings.dropdownListBorder': INHERIT, // overlayBorderColor
    'settings.headerForeground': palette.textColorHighlight,
    'settings.modifiedItemIndicator': palette.textColorAdded,
    'settings.numberInputBackground': INHERIT, // inputBackgroundColor
    'settings.numberInputBorder': INHERIT, // inputBorderColor
    'settings.numberInputForeground': INHERIT, // textColorHighlight
    'settings.textInputBackground': INHERIT, // inputBackgroundColor
    'settings.textInputBorder': INHERIT, // inputBorderColor
    'settings.textInputForeground': INHERIT, // textColorHighlight

    // Breadcrumbs
    'breadcrumb.activeSelectionForeground': palette.textColorHighlight,
    'breadcrumb.focusForeground': palette.textColorHighlight,
    'breadcrumb.foreground': palette.textColor,
    'breadcrumbPicker.background': INHERIT, // overlayBackgroundColor

    // Snippets
    'editor.snippetFinalTabstopHighlightBackground': INHERIT, // TRANSPARENT
    'editor.snippetFinalTabstopHighlightBorder': palette.mono2,
    'editor.snippetTabstopHighlightBackground': palette.syntaxResultMarkerColor,
    'editor.snippetTabstopHighlightBorder': INHERIT, // TRANSPARENT

    // Symbol Icons
    'symbolIcon.arrayForeground': INHERIT,
    'symbolIcon.booleanForeground': INHERIT,
    'symbolIcon.classForeground': INHERIT,
    'symbolIcon.colorForeground': INHERIT,
    'symbolIcon.constantForeground': INHERIT,
    'symbolIcon.constructorForeground': INHERIT,
    'symbolIcon.enumeratorForeground': INHERIT,
    'symbolIcon.enumeratorMemberForeground': INHERIT,
    'symbolIcon.eventForeground': INHERIT,
    'symbolIcon.fieldForeground': INHERIT,
    'symbolIcon.fileForeground': INHERIT,
    'symbolIcon.folderForeground': INHERIT,
    'symbolIcon.functionForeground': INHERIT,
    'symbolIcon.interfaceForeground': INHERIT,
    'symbolIcon.keyForeground': INHERIT,
    'symbolIcon.keywordForeground': INHERIT,
    'symbolIcon.methodForeground': INHERIT,
    'symbolIcon.moduleForeground': INHERIT,
    'symbolIcon.namespaceForeground': INHERIT,
    'symbolIcon.nullForeground': INHERIT,
    'symbolIcon.numberForeground': INHERIT,
    'symbolIcon.objectForeground': INHERIT,
    'symbolIcon.operatorForeground': INHERIT,
    'symbolIcon.packageForeground': INHERIT,
    'symbolIcon.propertyForeground': INHERIT,
    'symbolIcon.referenceForeground': INHERIT,
    'symbolIcon.snippetForeground': INHERIT,
    'symbolIcon.stringForeground': INHERIT,
    'symbolIcon.structForeground': INHERIT,
    'symbolIcon.textForeground': INHERIT,
    'symbolIcon.typeParameterForeground': INHERIT,
    'symbolIcon.unitForeground': INHERIT,
    'symbolIcon.variableForeground': INHERIT,

    // Debug Icons
    'debugConsole.errorForeground': INHERIT, // textColorError
    'debugConsole.infoForeground': INHERIT, // textColorInfo
    'debugConsole.sourceForeground': INHERIT, // textColor
    'debugConsole.warningForeground': INHERIT, // textColorWarning
    'debugConsoleInputIcon.foreground': INHERIT, // textColor
    'debugIcon.breakpointCurrentStackframeForeground': INHERIT,
    'debugIcon.breakpointDisabledForeground': INHERIT,
    'debugIcon.breakpointForeground': INHERIT,
    'debugIcon.breakpointStackframeForeground': INHERIT,
    'debugIcon.breakpointUnverifiedForeground': INHERIT,
    'debugIcon.continueForeground': INHERIT,
    'debugIcon.disconnectForeground': INHERIT,
    'debugIcon.pauseForeground': INHERIT,
    'debugIcon.restartForeground': INHERIT,
    'debugIcon.startForeground': INHERIT,
    'debugIcon.stepBackForeground': INHERIT,
    'debugIcon.stepIntoForeground': INHERIT,
    'debugIcon.stepOutForeground': INHERIT,
    'debugIcon.stepOverForeground': INHERIT,
    'debugIcon.stopForeground': INHERIT
  }
}

export const WORKBENCH_DARK = generateWorkbench(darkPalette)
export const WORKBENCH_LIGHT = generateWorkbench(lightPalette)
