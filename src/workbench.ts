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
    'focusBorder': palette.accentColor,
    'foreground': palette.textColor,
    'widget.shadow': tc({ h: 0, l: 0, s: 0, a: 0.4 }),
    'selection.background': palette.inputSelectionColorFocus,
    'descriptionForeground': palette.textColorSubtle,
    'errorForeground': palette.textColorError,
    'icon.foreground': palette.textColor,

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
    'checkbox.foreground': INHERIT, // textColor
    'checkbox.border': INHERIT, // baseBorderColor

    // Dropdown Control
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/dropdowns.less
    'dropdown.background': palette.inputBackgroundColor,
    'dropdown.listBackground': palette.overlayBackgroundColor,
    'dropdown.border': palette.baseBorderColor,
    'dropdown.foreground': palette.textColor,

    // Input Control
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/inputs.less
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/editor.less
    'input.background': palette.inputBackgroundColor,
    'input.border': palette.inputBorderColor,
    'input.foreground': palette.textColorHighlight,
    'input.placeholderForeground': palette.textColorSubtle,
    'inputOption.activeBackground': INHERIT, // accentColor
    'inputOption.activeBorder': INHERIT, // TRANSPARENT
    'inputValidation.errorBackground': palette.backgroundColorError,
    'inputValidation.errorForeground': palette.textColorHighlight,
    'inputValidation.errorBorder': palette.textColorError,
    'inputValidation.infoBackground': palette.backgroundColorInfo,
    'inputValidation.infoForeground': palette.textColorHighlight,
    'inputValidation.infoBorder': palette.textColorInfo,
    'inputValidation.warningBackground': palette.backgroundColorWarning,
    'inputValidation.warningForeground': palette.textColorHighlight,
    'inputValidation.warningBorder': palette.textColorWarning,

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
    'badge.foreground': palette.textColorHighlight,
    'badge.background': palette.badgeBackgroundColor,

    // Progress Bar
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/progress.less
    'progressBar.background': palette.progressBackgroundColor,

    // Lists and Trees
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/lists.less
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/tree-view.less
    'list.activeSelectionBackground': palette.buttonBackgroundColorSelected,
    'list.activeSelectionForeground': palette.buttonTextColorSelected,
    'list.dropBackground': palette.backgroundColorHighlight,
    'list.focusBackground': palette.backgroundColorInactive,
    'list.focusForeground': palette.textColorSelected,
    'list.highlightForeground': palette.accentColor,
    'list.hoverBackground': TRANSPARENT,
    'list.hoverForeground': INHERIT, // textColor
    'list.inactiveSelectionBackground': palette.backgroundColorInactive,
    'list.inactiveSelectionForeground': INHERIT, // textColorSelected
    'list.inactiveFocusBackground': palette.backgroundColorInactive,
    'list.invalidItemForeground': palette.textColorError,
    'list.errorForeground': palette.textColorError,
    'list.warningForeground': palette.textColorWarning,
    'listFilterWidget.background': palette.inputBackgroundColor,
    'listFilterWidget.outline': palette.accentColor,
    'listFilterWidget.noMatchesOutline': palette.textColorError,
    'list.filterMatchBackground': INHERIT, // syntaxResultMarkerColor
    'list.filterMatchBorder': INHERIT, // TRANSPARENT
    'tree.indentGuidesStroke': palette.syntaxIndentGuideColor,

    // Activity Bar
    'activityBar.background': palette.insetPanelBackgroundColor,
    'activityBar.dropBackground': dropBackground,
    'activityBar.foreground': palette.textColorHighlight,
    'activityBar.inactiveForeground': palette.textColor,
    'activityBar.border': palette.toolPanelBorderColor,
    'activityBarBadge.background': palette.accentBgColor,
    'activityBarBadge.foreground': palette.textColorHighlight,
    'activityBar.activeBorder': palette.accentBgColor,
    'activityBar.activeBackground': INHERIT, // textColorHighlight
    'activityBar.activeFocusBorder': INHERIT, // TRANSPARENT

    // Side Bar
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/panels.less
    'sideBar.background': palette.toolPanelBackgroundColor,
    'sideBar.foreground': palette.textColor,
    'sideBar.border': palette.toolPanelBorderColor,
    'sideBar.dropBackground': dropBackground,
    'sideBarTitle.foreground': palette.textColorHighlight,
    'sideBarSectionHeader.background': palette.panelHeadingBackgroundColor,
    'sideBarSectionHeader.foreground': palette.textColor,
    'sideBarSectionHeader.border': INHERIT, // TRANSPARENT

    // Minimap
    'minimap.findMatchHighlight': palette.syntaxResultMarkerColorSelected,
    'minimap.selectionHighlight': palette.syntaxResultMarkerColor,
    'minimap.errorHighlight': palette.textColorError,
    'minimap.warningHighlight': palette.textColorWarning,
    'minimapGutter.addedBackground': palette.textColorAdded,
    'minimapGutter.modifiedBackground': palette.textColorModified,
    'minimapGutter.deletedBackground': palette.textColorRemoved,

    // Editor Groups and Tabs
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/tabs.less
    'editorGroup.border': palette.toolPanelBorderColor,
    'editorGroup.dropBackground': dropBackground,
    'editorGroupHeader.noTabsBackground': palette.tabBarBackgroundColor,
    'editorGroupHeader.tabsBackground': palette.tabBarBackgroundColor,
    'editorGroupHeader.tabsBorder': palette.tabBarBorderColor,
    'editorGroup.emptyBackground': INHERIT, // toolPanelBackgroundColor
    'editorGroup.focusedEmptyBorder': INHERIT, // toolPanelBorderColor
    'tab.activeBackground': palette.tabBackgroundColorActive,
    'tab.unfocusedActiveBackground': INHERIT, // tabBackgroundColorActive
    'tab.activeForeground': palette.tabTextColorActive,
    'tab.border': palette.tabBorderColor,
    'tab.activeBorder': TRANSPARENT,
    'tab.unfocusedActiveBorder': TRANSPARENT,
    'tab.activeBorderTop': INHERIT, // TRANSPARENT
    'tab.unfocusedActiveBorderTop': INHERIT, // TRANSPARENT
    'tab.inactiveBackground': palette.tabBackgroundColor,
    'tab.inactiveForeground': palette.tabTextColor,
    'tab.unfocusedActiveForeground': palette.tabTextColorActive,
    'tab.unfocusedInactiveForeground': palette.tabTextColor,
    'tab.hoverBackground': INHERIT, // TRANSPARENT
    'tab.unfocusedHoverBackground': INHERIT, // TRANSPARENT
    'tab.hoverBorder': INHERIT, // TRANSPARENT
    'tab.unfocusedHoverBorder': INHERIT, // TRANSPARENT
    'tab.activeModifiedBorder': palette.accentColor,
    'tab.inactiveModifiedBorder': palette.accentColor,
    'tab.unfocusedActiveModifiedBorder': palette.accentColor,
    'tab.unfocusedInactiveModifiedBorder': palette.accentColor,
    'editorPane.background': INHERIT, // syntaxBackgroundColor

    // Editor Colors
    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/editor.less
    'editor.background': palette.syntaxBackgroundColor,
    'editor.foreground': palette.syntaxTextColor,
    'editorLineNumber.foreground': palette.syntaxGutterTextColor,
    'editorLineNumber.activeForeground': palette.syntaxGutterTextColorSelected,
    'editorCursor.background': INHERIT, // syntaxCursorColor
    'editorCursor.foreground': palette.syntaxCursorColor,
    'editor.selectionBackground': palette.syntaxSelectionColor,
    'editor.selectionForeground': INHERIT,
    'editor.inactiveSelectionBackground': palette.syntaxSelectionColor,
    'editor.selectionHighlightBackground': palette.syntaxCursorLine,
    'editor.selectionHighlightBorder': INHERIT, // TRANSPARENT
    'editor.wordHighlightBackground': TRANSPARENT,
    // TODO: word highlight is colliding with selection & selection highlight
    'editor.wordHighlightBorder': INHERIT, // TRANSPARENT
    'editor.wordHighlightStrongBackground': TRANSPARENT,
    'editor.wordHighlightStrongBorder': INHERIT, // TRANSPARENT
    'editor.findMatchBackground': palette.syntaxResultMarkerColor,
    'editor.findMatchHighlightBackground': palette.syntaxResultMarkerColor,
    'editor.findRangeHighlightBackground': palette.syntaxSelectionColor,
    'editor.findMatchBorder': palette.syntaxResultMarkerColorSelected,
    'editor.findMatchHighlightBorder': INHERIT, // TRANSPARENT
    'editor.findRangeHighlightBorder': INHERIT, // TRANSPARENT
    'searchEditor.findMatchBackground': palette.syntaxResultMarkerColor,
    'searchEditor.findMatchBorder': INHERIT, // TRANSPARENT
    'editor.hoverHighlightBackground': TRANSPARENT,
    'editor.lineHighlightBackground': palette.syntaxCursorLine,
    'editor.lineHighlightBorder': TRANSPARENT,
    'editorLink.activeForeground': palette.hue1,
    'editor.rangeHighlightBackground': INHERIT, // TRANSPARENT
    'editor.rangeHighlightBorder': INHERIT, // TRANSPARENT
    'editor.symbolHighlightBackground': INHERIT, // syntaxResultMarkerColor
    'editor.symbolHighlightBorder': INHERIT, // TRANSPARENT
    'editorWhitespace.foreground': palette.syntaxInvisibleCharacterColor,
    'editorIndentGuide.background': palette.syntaxIndentGuideColor,
    'editorIndentGuide.activeBackground': palette.syntaxGutterTextColor,
    'editorRuler.foreground': palette.syntaxWrapGuideColor,
    'editorCodeLens.foreground': palette.mono3,
    'editorLightBulb.foreground': INHERIT, // #ffcc00, #ddb100
    'editorLightBulbAutoFix.foreground': INHERIT, // #75beff, #007acc
    'editorBracketMatch.background': TRANSPARENT,
    'editorBracketMatch.border': palette.syntaxCursorColor,
    'editorOverviewRuler.border': TRANSPARENT,
    // TODO: editor.overviewRulerBorder user setting is not regarded
    'editorOverviewRuler.findMatchForeground': palette.syntaxSelectionColor,
    'editorOverviewRuler.rangeHighlightForeground': INHERIT, // TRANSPARENT
    'editorOverviewRuler.selectionHighlightForeground':
      palette.syntaxSelectionColor,
    'editorOverviewRuler.wordHighlightForeground': palette.syntaxSelectionColor,
    'editorOverviewRuler.wordHighlightStrongForeground':
      palette.syntaxSelectionColor,
    'editorOverviewRuler.modifiedForeground': palette.syntaxColorModified,
    'editorOverviewRuler.addedForeground': palette.syntaxColorAdded,
    'editorOverviewRuler.deletedForeground': palette.syntaxColorRemoved,
    'editorOverviewRuler.errorForeground': palette.textColorError,
    'editorOverviewRuler.warningForeground': palette.textColorWarning,
    'editorOverviewRuler.infoForeground': palette.textColorInfo,
    'editorOverviewRuler.bracketMatchForeground': palette.syntaxSelectionColor,
    'editorError.foreground': palette.textColorError,
    'editorError.border': INHERIT, // TRANSPARENT
    'editorWarning.foreground': palette.textColorWarning,
    'editorWarning.border': INHERIT, // TRANSPARENT
    'editorInfo.foreground': palette.textColorInfo,
    'editorInfo.border': INHERIT, // TRANSPARENT
    'editorHint.foreground': palette.textColorInfo,
    'editorHint.border': INHERIT, // TRANSPARENT
    'problemsErrorIcon.foreground': INHERIT, // textColorError
    'problemsWarningIcon.foreground': INHERIT, // textColorWarning
    'problemsInfoIcon.foreground': INHERIT, // textColorInfo
    'editorUnnecessaryCode.border': INHERIT, // TRANSPARENT
    'editorUnnecessaryCode.opacity': INHERIT, // #000a, #0007
    'editorGutter.background': palette.syntaxGutterBackgroundColor,
    'editorGutter.modifiedBackground': palette.syntaxColorModified,
    'editorGutter.addedBackground': palette.syntaxColorAdded,
    'editorGutter.deletedBackground': palette.syntaxColorRemoved,
    'editorGutter.commentRangeForeground': palette.syntaxWrapGuideColor,

    // Diff Editor Colors
    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/editor.less
    'diffEditor.insertedTextBackground': palette.syntaxColorAdded
      .clone()
      .setAlpha(0.24),
    'diffEditor.insertedTextBorder': INHERIT, // TRANSPARENT
    'diffEditor.removedTextBackground': palette.syntaxColorRemoved
      .clone()
      .setAlpha(0.24),
    'diffEditor.removedTextBorder': INHERIT, // TRANSPARENT
    'diffEditor.border': palette.toolPanelBorderColor,

    // Editor Widget Colors
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/modal.less
    'editorWidget.foreground': INHERIT, // textColor
    'editorWidget.background': palette.overlayBackgroundColor,
    'editorWidget.border': palette.overlayBorderColor,
    'editorWidget.resizeBorder': palette.overlayBackgroundColor,
    'editorSuggestWidget.background': INHERIT, // overlayBackgroundColor
    'editorSuggestWidget.border': INHERIT, // overlayBorderColor
    'editorSuggestWidget.foreground': INHERIT, // textColor
    'editorSuggestWidget.highlightForeground': palette.textColorHighlight,
    'editorSuggestWidget.selectedBackground': INHERIT, // backgroundColorInactive
    'editorHoverWidget.foreground': INHERIT, // textColor
    'editorHoverWidget.background': INHERIT, // overlayBackgroundColor
    'editorHoverWidget.border': INHERIT, // overlayBorderColor
    'editorHoverWidget.statusBarBackground': palette.overlayBackgroundColor,
    'debugExceptionWidget.background': INHERIT, // overlayBackgroundColor
    'debugExceptionWidget.border': INHERIT, // overlayBorderColor
    'editorMarkerNavigation.background': palette.backgroundColorHighlight,
    'editorMarkerNavigationError.background': palette.backgroundColorError,
    'editorMarkerNavigationWarning.background': palette.backgroundColorWarning,
    'editorMarkerNavigationInfo.background': palette.backgroundColorInfo,

    // Peek View Colors
    'peekView.border': palette.accentColor,
    'peekViewEditor.background': palette.insetPanelBackgroundColor,
    'peekViewEditorGutter.background': INHERIT, // insetPanelBackgroundColor
    'peekViewEditor.matchHighlightBackground': palette.syntaxResultMarkerColor,
    'peekViewEditor.matchHighlightBorder': INHERIT, // TRANSPARENT
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
    'merge.currentHeaderBackground': undefined,
    'merge.currentContentBackground': undefined,
    'merge.incomingHeaderBackground': undefined,
    'merge.incomingContentBackground': undefined,
    'merge.border': undefined,
    'merge.commonContentBackground': undefined,
    'merge.commonHeaderBackground': undefined,
    'editorOverviewRuler.currentContentForeground': undefined,
    'editorOverviewRuler.incomingContentForeground': undefined,
    'editorOverviewRuler.commonContentForeground': undefined,

    // Panel Colors
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/panels.less
    'panel.background': palette.toolPanelBackgroundColor,
    'panel.border': palette.toolPanelBorderColor,
    'panel.dropBackground': dropBackground,
    'panelTitle.activeBorder': TRANSPARENT,
    'panelTitle.activeForeground': palette.tabTextColorActive,
    'panelTitle.inactiveForeground': palette.tabTextColor,
    'panelInput.border': palette.inputBorderColor,

    // Preview
    'imagePreview.border': palette.toolPanelBorderColor,

    // Status Bar Colors
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/status-bar.less
    'statusBar.background': palette.toolPanelBackgroundColor,
    'statusBar.foreground': palette.textColor,
    'statusBar.border': palette.toolPanelBorderColor,
    'statusBar.debuggingBackground': INHERIT,
    'statusBar.debuggingForeground': palette.accentBgTextColor,
    'statusBar.debuggingBorder': INHERIT, // toolPanelBorderColor
    'statusBar.noFolderBackground': palette.toolPanelBackgroundColor,
    'statusBar.noFolderForeground': INHERIT, // textColor
    'statusBar.noFolderBorder': INHERIT, // toolPanelBorderColor
    'statusBarItem.activeBackground': palette.level3ColorActive,
    'statusBarItem.hoverBackground': palette.level3ColorHover,
    'statusBarItem.prominentForeground': palette.accentBgTextColor,
    'statusBarItem.prominentBackground': palette.accentBgColor,
    'statusBarItem.prominentHoverBackground': palette.accentBgColor,
    'statusBarItem.remoteBackground': INHERIT, // badgeBackgroundColor
    'statusBarItem.remoteForeground': INHERIT, // textColorHighlight

    // Title Bar Colors
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/title-bar.less
    'titleBar.activeBackground': palette.appBackgroundColor,
    'titleBar.activeForeground': palette.textColorHighlight,
    'titleBar.inactiveBackground': palette.appBackgroundColor,
    'titleBar.inactiveForeground': palette.textColor,
    'titleBar.border': palette.baseBorderColor,

    // Menu Bar Colors
    'menubar.selectionForeground': INHERIT, // textColorHighlight
    'menubar.selectionBackground': palette.buttonBackgroundColorSelected,
    'menubar.selectionBorder': INHERIT, // TRANSPARENT
    'menu.foreground': palette.textColorHighlight,
    'menu.background': palette.insetPanelBackgroundColor,
    'menu.selectionForeground': INHERIT, // textColorHighlight
    'menu.selectionBackground': palette.buttonBackgroundColorSelected,
    'menu.selectionBorder': INHERIT, // TRANSPARENT
    'menu.separatorBackground': palette.baseBorderColor,
    'menu.border': INHERIT, // TRANSPARENT

    // Notification Colors
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/modal.less
    'notificationCenter.border': INHERIT, // TRANSPARENT
    'notificationCenterHeader.foreground': palette.textColorHighlight,
    'notificationCenterHeader.background': palette.panelHeadingBackgroundColor,
    'notificationToast.border': INHERIT, // TRANSPARENT
    'notifications.foreground': INHERIT, // textColor
    'notifications.background': palette.insetPanelBackgroundColor,
    'notifications.border': palette.insetPanelBorderColor,
    'notificationLink.foreground': INHERIT, // accentColor
    'notificationsErrorIcon.foreground': INHERIT, // textColorError
    'notificationsWarningIcon.foreground': INHERIT, // textColorWarning
    'notificationsInfoIcon.foreground': INHERIT, // textColorInfo

    // Extensions
    'extensionButton.prominentForeground': palette.accentBgTextColor,
    'extensionButton.prominentBackground': palette.accentBgColor,
    'extensionButton.prominentHoverBackground': palette.accentBgColor,
    'extensionBadge.remoteBackground': INHERIT, // badgeBackgroundColor
    'extensionBadge.remoteForeground': INHERIT, // textColorHighlight

    // Quick Picker
    'pickerGroup.border': palette.overlayBorderColor,
    'pickerGroup.foreground': palette.textColor,
    'quickInput.background': palette.overlayBackgroundColor,
    'quickInput.foreground': INHERIT, // textColor

    // Integrated Terminal Colors
    'terminal.background': INHERIT,
    'terminal.border': INHERIT, // toolPanelBorderColor
    'terminal.foreground': INHERIT,
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
    'terminal.selectionBackground': INHERIT,
    'terminalCursor.background': INHERIT,
    'terminalCursor.foreground': INHERIT,

    // Debug
    'debugToolBar.background': palette.overlayBackgroundColor,
    'debugToolBar.border': INHERIT, // TRANSPARENT
    'editor.stackFrameHighlightBackground': INHERIT, // #ffff0033, #ffff6673
    'editor.focusedStackFrameHighlightBackground': INHERIT, // #7abd7a4d, #cee7ce73

    // Welcome Page
    'welcomePage.buttonBackground': palette.buttonBackgroundColor,
    'welcomePage.buttonHoverBackground': palette.buttonBackgroundColorHover,
    'walkThrough.embeddedEditorBackground': palette.insetPanelBackgroundColor,

    // Git Colors
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/git.less
    'gitDecoration.addedResourceForeground': palette.textColorAdded,
    'gitDecoration.modifiedResourceForeground': palette.textColorModified,
    'gitDecoration.deletedResourceForeground': palette.textColorRemoved,
    'gitDecoration.untrackedResourceForeground': palette.textColorAdded,
    'gitDecoration.ignoredResourceForeground': palette.textColorIgnored,
    'gitDecoration.conflictingResourceForeground': INHERIT, // textColor
    'gitDecoration.submoduleResourceForeground': INHERIT, // textColor

    // Settings Editor Colors
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/settings.less
    'settings.headerForeground': palette.textColorHighlight,
    'settings.modifiedItemIndicator': palette.textColorAdded,
    'settings.dropdownBackground': INHERIT, // inputBackgroundColor
    'settings.dropdownForeground': INHERIT, // textColor
    'settings.dropdownBorder': INHERIT, // baseBorderColor
    'settings.dropdownListBorder': INHERIT, // overlayBorderColor
    'settings.checkboxBackground': INHERIT, // inputBackgroundColor
    'settings.checkboxForeground': INHERIT, // textColor
    'settings.checkboxBorder': INHERIT, // baseBorderColor
    'settings.textInputBackground': INHERIT, // inputBackgroundColor
    'settings.textInputForeground': INHERIT, // textColorHighlight
    'settings.textInputBorder': INHERIT, // inputBorderColor
    'settings.numberInputBackground': INHERIT, // inputBackgroundColor
    'settings.numberInputForeground': INHERIT, // textColorHighlight
    'settings.numberInputBorder': INHERIT, // inputBorderColor

    // Breadcrumbs
    'breadcrumb.foreground': palette.textColor,
    'breadcrumb.focusForeground': palette.textColorHighlight,
    'breadcrumb.activeSelectionForeground': palette.textColorHighlight,
    'breadcrumbPicker.background': INHERIT, // overlayBackgroundColor

    // Snippets
    'editor.snippetTabstopHighlightBackground': palette.syntaxResultMarkerColor,
    'editor.snippetTabstopHighlightBorder': INHERIT, // TRANSPARENT
    'editor.snippetFinalTabstopHighlightBackground': INHERIT, // TRANSPARENT
    'editor.snippetFinalTabstopHighlightBorder': palette.mono2,

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
    'debugIcon.breakpointForeground': INHERIT,
    'debugIcon.breakpointDisabledForeground': INHERIT,
    'debugIcon.breakpointUnverifiedForeground': INHERIT,
    'debugIcon.breakpointCurrentStackframeForeground': INHERIT,
    'debugIcon.breakpointStackframeForeground': INHERIT,
    'debugIcon.startForeground': INHERIT,
    'debugIcon.pauseForeground': INHERIT,
    'debugIcon.stopForeground': INHERIT,
    'debugIcon.disconnectForeground': INHERIT,
    'debugIcon.restartForeground': INHERIT,
    'debugIcon.stepOverForeground': INHERIT,
    'debugIcon.stepIntoForeground': INHERIT,
    'debugIcon.stepOutForeground': INHERIT,
    'debugIcon.continueForeground': INHERIT,
    'debugIcon.stepBackForeground': INHERIT
  }
}

export const WORKBENCH_DARK = generateWorkbench(darkPalette)
export const WORKBENCH_LIGHT = generateWorkbench(lightPalette)
