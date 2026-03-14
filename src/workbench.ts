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
    'disabledForeground': INHERIT, 
    'errorForeground': palette.textColorError,
    'focusBorder': palette.accentColor,
    'foreground': palette.textColor,
    'icon.foreground': palette.textColor,
    'sash.hoverBorder': INHERIT,
    'selection.background': palette.inputSelectionColorFocus,
    'widget.border': INHERIT, 
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
    'textPreformat.background': INHERIT,
    'textPreformat.border': INHERIT,
    'textPreformat.foreground': INHERIT,
    'textSeparator.foreground': INHERIT,

    // Action Colors
    'editorActionList.background': INHERIT, 
    'editorActionList.focusBackground': INHERIT, 
    'editorActionList.focusForeground': INHERIT, 
    'editorActionList.foreground': INHERIT, 
    'toolbar.activeBackground': palette.buttonBackgroundColorSelected,
    'toolbar.hoverBackground': palette.buttonBackgroundColorHover,
    'toolbar.hoverOutline': INHERIT, // TRANSPARENT

    // Button Control
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/buttons.less
    'button.background': palette.backgroundColorInfo,
    'button.border': TRANSPARENT,
    'button.foreground': palette.textColorHighlight,
    'button.hoverBackground': palette.backgroundColorInfo,
    'button.secondaryBackground': palette.buttonBackgroundColor,
    'button.secondaryBorder': INHERIT, 
    'button.secondaryForeground': palette.textColorHighlight,
    'button.secondaryHoverBackground': palette.buttonBackgroundColorHover,
    'button.separator': INHERIT, 
    'checkbox.background': INHERIT, // inputBackgroundColor
    'checkbox.border': INHERIT, // baseBorderColor
    'checkbox.disabled.background': INHERIT, 
    'checkbox.disabled.foreground': INHERIT, 
    'checkbox.foreground': INHERIT, // textColor
    'checkbox.selectBackground': INHERIT, 
    'checkbox.selectBorder': INHERIT, 
    'radio.activeBackground': INHERIT, 
    'radio.activeBorder': INHERIT, 
    'radio.activeForeground': INHERIT, 
    'radio.inactiveBackground': INHERIT, 
    'radio.inactiveBorder': INHERIT, 
    'radio.inactiveForeground': INHERIT, 
    'radio.inactiveHoverBackground': INHERIT, 

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
    'inputOption.hoverBackground': palette.buttonBackgroundColorHover,
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
    'scrollbar.background': INHERIT, 
    'scrollbar.shadow': tc({ h: 0, l: 0, s: 0, a: 0.4 }),
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
    'list.activeSelectionIconForeground': INHERIT,
    'list.deemphasizedForeground': palette.textColorSubtle,
    'list.dropBackground': palette.backgroundColorHighlight,
    'list.dropBetweenBackground': INHERIT, 
    'list.errorForeground': palette.textColorError,
    'list.filterMatchBackground': INHERIT, // syntaxResultMarkerColor
    'list.filterMatchBorder': INHERIT, // TRANSPARENT
    'list.focusAndSelectionOutline': INHERIT, 
    'list.focusBackground': palette.backgroundColorInactive,
    'list.focusForeground': palette.textColorSelected,
    'list.focusHighlightForeground': INHERIT, 
    'list.focusOutline': TRANSPARENT,
    'list.highlightForeground': palette.accentColor,
    'list.hoverBackground': TRANSPARENT,
    'list.hoverForeground': INHERIT, // textColor
    'list.inactiveFocusBackground': palette.backgroundColorInactive,
    'list.inactiveFocusOutline': INHERIT,
    'list.inactiveSelectionBackground': palette.backgroundColorInactive,
    'list.inactiveSelectionForeground': INHERIT, // textColorSelected
    'list.inactiveSelectionIconForeground': INHERIT,
    'list.invalidItemForeground': palette.textColorError,
    'list.warningForeground': palette.textColorWarning,
    'listFilterWidget.background': palette.inputBackgroundColor,
    'listFilterWidget.noMatchesOutline': palette.textColorError,
    'listFilterWidget.outline': palette.accentColor,
    'listFilterWidget.shadow': INHERIT, 
    'tree.inactiveIndentGuidesStroke': INHERIT, 
    'tree.indentGuidesStroke': palette.syntaxIndentGuideColor,
    'tree.tableColumnsBorder': INHERIT,
    'tree.tableOddRowsBackground': INHERIT,

    // Activity Bar
    'activityBar.activeBackground': INHERIT, // textColorHighlight
    'activityBar.activeBorder': palette.accentBgColor,
    'activityBar.activeFocusBorder': INHERIT, // TRANSPARENT
    'activityBar.background': palette.insetPanelBackgroundColor,
    'activityBar.border': palette.toolPanelBorderColor,
    'activityBar.dropBorder': palette.accentColor,
    'activityBar.foreground': palette.textColorHighlight,
    'activityBar.inactiveForeground': palette.textColor,
    'activityBarBadge.background': palette.accentBgColor,
    'activityBarBadge.foreground': palette.textColorHighlight,
    'activityBarTop.activeBackground': INHERIT, 
    'activityBarTop.activeBorder': INHERIT, 
    'activityBarTop.background': INHERIT, 
    'activityBarTop.dropBorder': INHERIT, 
    'activityBarTop.foreground': INHERIT, 
    'activityBarTop.inactiveForeground': INHERIT, 
    'activityErrorBadge.background': INHERIT, 
    'activityErrorBadge.foreground': INHERIT, 
    'activityWarningBadge.background': INHERIT, 
    'activityWarningBadge.foreground': INHERIT, 

    // Profiles
    'profileBadge.background': INHERIT, 
    'profileBadge.foreground': INHERIT, 
    'profiles.sashBorder': INHERIT, 

    // Side Bar
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/panels.less
    'sideBar.background': palette.toolPanelBackgroundColor,
    'sideBar.border': palette.toolPanelBorderColor,
    'sideBar.dropBackground': dropBackground,
    'sideBar.foreground': palette.textColor,
    'sideBarActivityBarTop.border': INHERIT, 
    'sideBarSectionHeader.background': palette.panelHeadingBackgroundColor,
    'sideBarSectionHeader.border': INHERIT, // TRANSPARENT
    'sideBarSectionHeader.foreground': palette.textColor,
    'sideBarStickyScroll.background': INHERIT, 
    'sideBarStickyScroll.border': INHERIT, 
    'sideBarStickyScroll.shadow': INHERIT, 
    'sideBarTitle.background': INHERIT, 
    'sideBarTitle.border': INHERIT, 
    'sideBarTitle.foreground': palette.textColorHighlight,

    // Minimap
    'editorMinimap.inlineChatInserted': INHERIT, 
    'minimap.background': INHERIT, // syntaxBackgroundColor
    'minimap.chatEditHighlight': INHERIT, 
    'minimap.errorHighlight': palette.textColorError,
    'minimap.findMatchHighlight': palette.syntaxResultMarkerColorSelected,
    'minimap.foregroundOpacity': INHERIT, // #000f
    'minimap.infoHighlight': INHERIT, 
    'minimap.selectionHighlight': palette.syntaxResultMarkerColor,
    'minimap.selectionOccurrenceHighlight': palette.syntaxResultMarkerColor,
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
    'editorGroup.dropIntoPromptBackground': INHERIT, 
    'editorGroup.dropIntoPromptBorder': INHERIT, 
    'editorGroup.dropIntoPromptForeground': INHERIT, 
    'editorGroup.emptyBackground': INHERIT, // toolPanelBackgroundColor
    'editorGroup.focusedEmptyBorder': INHERIT, // toolPanelBorderColor
    'editorGroupHeader.border': palette.tabBarBorderColor,
    'editorGroupHeader.noTabsBackground': palette.tabBarBackgroundColor,
    'editorGroupHeader.tabsBackground': palette.tabBarBackgroundColor,
    'editorGroupHeader.tabsBorder': TRANSPARENT,
    'editorPane.background': INHERIT, // syntaxBackgroundColor
    'sideBySideEditor.horizontalBorder': INHERIT, // toolPanelBorderColor
    'sideBySideEditor.verticalBorder': INHERIT, // toolPanelBorderColor
    'tab.activeBackground': palette.tabBackgroundColorActive,
    'tab.activeBorder': TRANSPARENT,
    'tab.activeBorderTop': INHERIT, // TRANSPARENT
    'tab.activeForeground': palette.tabTextColorActive,
    'tab.activeModifiedBorder': palette.accentColor,
    'tab.border': palette.tabBorderColor,
    'tab.dragAndDropBorder': INHERIT, 
    'tab.hoverBackground': INHERIT, // TRANSPARENT
    'tab.hoverBorder': INHERIT, // TRANSPARENT
    'tab.hoverForeground': palette.textColorHighlight,
    'tab.inactiveBackground': palette.tabBackgroundColor,
    'tab.inactiveForeground': palette.tabTextColor,
    'tab.inactiveModifiedBorder': palette.accentColor,
    'tab.lastPinnedBorder': INHERIT,
    'tab.selectedBackground': INHERIT, 
    'tab.selectedBorderTop': INHERIT, 
    'tab.selectedForeground': INHERIT, 
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
    'editor.compositionBorder': INHERIT, 
    'editor.foreground': palette.syntaxTextColor,
    'editor.inlineValuesBackground': palette.badgeBackgroundColor
      .clone()
      .setAlpha(0.8),
    'editor.inlineValuesForeground': palette.textColorHighlight
      .clone()
      .setAlpha(0.6),
    'editor.placeholder.foreground': INHERIT, 
    'editorCursor.background': INHERIT, // syntaxCursorColor
    'editorCursor.foreground': palette.syntaxCursorColor,
    'editorLineNumber.activeForeground': palette.syntaxGutterTextColorSelected,
    'editorLineNumber.dimmedForeground': INHERIT, 
    'editorLineNumber.foreground': palette.syntaxGutterTextColor,
    'editorMultiCursor.primary.background': INHERIT, 
    'editorMultiCursor.primary.foreground': INHERIT, 
    'editorMultiCursor.secondary.background': INHERIT, 
    'editorMultiCursor.secondary.foreground': INHERIT, 

    'editor.inactiveSelectionBackground': palette.syntaxSelectionColor,
    'editor.selectionBackground': palette.syntaxSelectionColor,
    'editor.selectionForeground': INHERIT,
    'editor.selectionHighlightBackground': palette.syntaxCursorLine,
    'editor.selectionHighlightBorder': INHERIT, // TRANSPARENT

    'editor.wordHighlightBackground': TRANSPARENT,
    'editor.wordHighlightBorder': INHERIT, // TRANSPARENT
    'editor.wordHighlightStrongBackground': TRANSPARENT,
    'editor.wordHighlightStrongBorder': INHERIT, // TRANSPARENT
    'editor.wordHighlightTextBackground': INHERIT, 
    'editor.wordHighlightTextBorder': INHERIT, 

    'editor.findMatchBackground': palette.syntaxResultMarkerColor,
    'editor.findMatchBorder': palette.syntaxResultMarkerColorSelected,
    'editor.findMatchForeground': INHERIT, 
    'editor.findMatchHighlightBackground': palette.syntaxResultMarkerColor,
    'editor.findMatchHighlightBorder': INHERIT, // TRANSPARENT
    'editor.findMatchHighlightForeground': INHERIT, 
    'editor.findRangeHighlightBackground': palette.syntaxSelectionColor,
    'editor.findRangeHighlightBorder': INHERIT, // TRANSPARENT

    'search.resultsInfoForeground': INHERIT, 

    'searchEditor.findMatchBackground': palette.syntaxResultMarkerColor,
    'searchEditor.findMatchBorder': INHERIT, // TRANSPARENT
    'searchEditor.textInputBorder': INHERIT, // inputBorderColor

    'editor.hoverHighlightBackground': TRANSPARENT,

    'editor.inactiveLineHighlightBackground': INHERIT, 
    'editor.lineHighlightBackground': palette.syntaxCursorLine,
    'editor.lineHighlightBorder': TRANSPARENT,

    'editorUnicodeHighlight.background': INHERIT, 
    'editorUnicodeHighlight.border': INHERIT,

    'editorLink.activeForeground': palette.hue1,

    'editor.rangeHighlightBackground': INHERIT, // TRANSPARENT
    'editor.rangeHighlightBorder': INHERIT, // TRANSPARENT

    'editor.symbolHighlightBackground': INHERIT, // syntaxResultMarkerColor
    'editor.symbolHighlightBorder': INHERIT, // TRANSPARENT

    'editorWhitespace.foreground': palette.syntaxInvisibleCharacterColor,

    'editorIndentGuide.activeBackground': palette.syntaxGutterTextColor,
    'editorIndentGuide.activeBackground1': INHERIT, 
    'editorIndentGuide.activeBackground2': INHERIT, 
    'editorIndentGuide.activeBackground3': INHERIT, 
    'editorIndentGuide.activeBackground4': INHERIT, 
    'editorIndentGuide.activeBackground5': INHERIT, 
    'editorIndentGuide.activeBackground6': INHERIT, 
    'editorIndentGuide.background': palette.syntaxIndentGuideColor,
    'editorIndentGuide.background1': INHERIT, 
    'editorIndentGuide.background2': INHERIT, 
    'editorIndentGuide.background3': INHERIT, 
    'editorIndentGuide.background4': INHERIT, 
    'editorIndentGuide.background5': INHERIT, 
    'editorIndentGuide.background6': INHERIT, 

    'editorInlayHint.background': palette.badgeBackgroundColor
      .clone()
      .setAlpha(0.8),
    'editorInlayHint.foreground': palette.textColorHighlight
      .clone()
      .setAlpha(0.6),
    'editorInlayHint.parameterBackground': INHERIT,
    'editorInlayHint.parameterForeground': INHERIT,
    'editorInlayHint.typeBackground': INHERIT,
    'editorInlayHint.typeForeground': INHERIT,

    'editorRuler.foreground': palette.syntaxWrapGuideColor,

    'editor.linkedEditingBackground': INHERIT,

    'editorCodeLens.foreground': palette.mono3,

    'editorLightBulb.foreground': INHERIT, // #ffcc00, #ddb100
    'editorLightBulbAi.foreground': INHERIT, 
    'editorLightBulbAutoFix.foreground': INHERIT, // #75beff, #007acc

    'editorBracketMatch.background': TRANSPARENT,
    'editorBracketMatch.border': palette.syntaxCursorColor,
    'editorBracketMatch.foreground': INHERIT, 

    'editorBracketHighlight.foreground1': INHERIT, // #ffd700, #0431fa
    'editorBracketHighlight.foreground2': INHERIT, // #da70d6, #319331
    'editorBracketHighlight.foreground3': INHERIT, // #179fff, #7b3814
    'editorBracketHighlight.foreground4': INHERIT, // TRANSPARENT
    'editorBracketHighlight.foreground5': INHERIT, // TRANSPARENT
    'editorBracketHighlight.foreground6': INHERIT, // TRANSPARENT
    'editorBracketHighlight.unexpectedBracket.foreground':
      palette.syntaxIllegalBg,

    'editorBracketPairGuide.activeBackground1': INHERIT,
    'editorBracketPairGuide.activeBackground2': INHERIT,
    'editorBracketPairGuide.activeBackground3': INHERIT,
    'editorBracketPairGuide.activeBackground4': INHERIT,
    'editorBracketPairGuide.activeBackground5': INHERIT,
    'editorBracketPairGuide.activeBackground6': INHERIT,
    'editorBracketPairGuide.background1': INHERIT,
    'editorBracketPairGuide.background2': INHERIT,
    'editorBracketPairGuide.background3': INHERIT,
    'editorBracketPairGuide.background4': INHERIT,
    'editorBracketPairGuide.background5': INHERIT,
    'editorBracketPairGuide.background6': INHERIT,

    'editor.foldBackground': palette.syntaxCursorLine,
    'editor.foldPlaceholderForeground': INHERIT, 

    'editorOverviewRuler.addedForeground': palette.syntaxColorAdded,
    'editorOverviewRuler.background': INHERIT, // syntaxBackgroundColor
    'editorOverviewRuler.border': TRANSPARENT,
    'editorOverviewRuler.bracketMatchForeground': palette.syntaxSelectionColor,
    'editorOverviewRuler.commentDraftForeground': INHERIT, 
    'editorOverviewRuler.deletedForeground': palette.syntaxColorRemoved,
    'editorOverviewRuler.errorForeground': palette.textColorError,
    'editorOverviewRuler.findMatchForeground': palette.syntaxSelectionColor,
    'editorOverviewRuler.infoForeground': palette.textColorInfo,
    'editorOverviewRuler.inlineChatInserted': INHERIT, 
    'editorOverviewRuler.inlineChatRemoved': INHERIT, 
    'editorOverviewRuler.modifiedForeground': palette.syntaxColorModified,
    'editorOverviewRuler.rangeHighlightForeground': INHERIT, // TRANSPARENT
    'editorOverviewRuler.selectionHighlightForeground':
      palette.syntaxSelectionColor,
    'editorOverviewRuler.unicodeForeground': INHERIT,
    'editorOverviewRuler.warningForeground': palette.textColorWarning,
    'editorOverviewRuler.wordHighlightForeground': palette.syntaxSelectionColor,
    'editorOverviewRuler.wordHighlightStrongForeground':
      palette.syntaxSelectionColor,
    'editorOverviewRuler.wordHighlightTextForeground': INHERIT, 

    'editorError.background': INHERIT,
    'editorError.border': INHERIT, // TRANSPARENT
    'editorError.foreground': palette.textColorError,
    'editorHint.border': INHERIT, // TRANSPARENT
    'editorHint.foreground': palette.textColorInfo,
    'editorInfo.background': INHERIT,
    'editorInfo.border': INHERIT, // TRANSPARENT
    'editorInfo.foreground': palette.textColorInfo,
    'editorWarning.background': INHERIT,
    'editorWarning.border': INHERIT, // TRANSPARENT
    'editorWarning.foreground': palette.textColorWarning,
    'problemsErrorIcon.foreground': INHERIT, // textColorError
    'problemsInfoIcon.foreground': INHERIT, // textColorInfo
    'problemsWarningIcon.foreground': INHERIT, // textColorWarning

    'editorUnnecessaryCode.border': INHERIT, // TRANSPARENT
    'editorUnnecessaryCode.opacity': INHERIT, // #000a, #0007

    'editorGutter.addedBackground': palette.syntaxColorAdded,
    'editorGutter.addedSecondaryBackground': INHERIT, 
    'editorGutter.background': palette.syntaxGutterBackgroundColor,
    'editorGutter.commentDraftGlyphForeground': INHERIT, 
    'editorGutter.commentGlyphForeground': INHERIT, 
    'editorGutter.commentRangeForeground': palette.syntaxWrapGuideColor,
    'editorGutter.commentUnresolvedGlyphForeground': INHERIT, 
    'editorGutter.deletedBackground': palette.syntaxColorRemoved,
    'editorGutter.deletedSecondaryBackground': INHERIT, 
    'editorGutter.foldingControlForeground': INHERIT, // textColor
    'editorGutter.itemBackground': INHERIT, 
    'editorGutter.itemGlyphForeground': INHERIT, 
    'editorGutter.modifiedBackground': palette.syntaxColorModified,
    'editorGutter.modifiedSecondaryBackground': INHERIT, 

    'editorCommentsWidget.rangeActiveBackground': INHERIT, 
    'editorCommentsWidget.rangeBackground': INHERIT, 
    'editorCommentsWidget.replyInputBackground': INHERIT, 
    'editorCommentsWidget.resolvedBorder': INHERIT, 
    'editorCommentsWidget.unresolvedBorder': INHERIT, 

    'inlineEdit.gutterIndicator.background': INHERIT, 
    'inlineEdit.gutterIndicator.primaryBackground': INHERIT, 
    'inlineEdit.gutterIndicator.primaryBorder': INHERIT, 
    'inlineEdit.gutterIndicator.primaryForeground': INHERIT, 
    'inlineEdit.gutterIndicator.secondaryBackground': INHERIT, 
    'inlineEdit.gutterIndicator.secondaryBorder': INHERIT, 
    'inlineEdit.gutterIndicator.secondaryForeground': INHERIT, 
    'inlineEdit.gutterIndicator.successfulBackground': INHERIT, 
    'inlineEdit.gutterIndicator.successfulBorder': INHERIT, 
    'inlineEdit.gutterIndicator.successfulForeground': INHERIT, 
    'inlineEdit.modifiedBackground': INHERIT, 
    'inlineEdit.modifiedBorder': INHERIT, 
    'inlineEdit.modifiedChangedLineBackground': INHERIT, 
    'inlineEdit.modifiedChangedTextBackground': INHERIT, 
    'inlineEdit.originalBackground': INHERIT, 
    'inlineEdit.originalBorder': INHERIT, 
    'inlineEdit.originalChangedLineBackground': INHERIT, 
    'inlineEdit.originalChangedTextBackground': INHERIT, 
    'inlineEdit.tabWillAcceptModifiedBorder': INHERIT, 
    'inlineEdit.tabWillAcceptOriginalBorder': INHERIT, 

    // Diff Editor
    // https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/editor.less
    'diffEditor.border': palette.toolPanelBorderColor,
    'diffEditor.diagonalFill': palette.syntaxGuide,
    'diffEditor.insertedLineBackground': INHERIT, 
    'diffEditor.insertedTextBackground': palette.syntaxColorAdded .clone() .setAlpha(0.24),
    'diffEditor.insertedTextBorder': INHERIT, // TRANSPARENT
    'diffEditor.move.border': INHERIT, 
    'diffEditor.moveActive.border': INHERIT, 
    'diffEditor.removedLineBackground': INHERIT, 
    'diffEditor.removedTextBackground': palette.syntaxColorRemoved .clone() .setAlpha(0.24),
    'diffEditor.removedTextBorder': INHERIT, // TRANSPARENT
    'diffEditor.unchangedCodeBackground': INHERIT, 
    'diffEditor.unchangedRegionBackground': INHERIT, 
    'diffEditor.unchangedRegionForeground': INHERIT, 
    'diffEditor.unchangedRegionShadow': INHERIT, 
    'diffEditorGutter.insertedLineBackground': INHERIT, 
    'diffEditorGutter.removedLineBackground': INHERIT, 
    'diffEditorOverview.insertedForeground': INHERIT, 
    'diffEditorOverview.removedForeground': INHERIT, 
    'multiDiffEditor.background': INHERIT, 
    'multiDiffEditor.border': INHERIT, 
    'multiDiffEditor.headerBackground': INHERIT, 

    // Chat

    'chat.avatarBackground': INHERIT, 
    'chat.avatarForeground': INHERIT, 
    'chat.checkpointSeparator': INHERIT, 
    'chat.editedFileForeground': INHERIT, 
    'chat.linesAddedForeground': INHERIT, 
    'chat.linesRemovedForeground': INHERIT, 
    'chat.requestBackground': INHERIT, 
    'chat.requestBorder': INHERIT, 
    'chat.requestBubbleBackground': INHERIT, 
    'chat.requestBubbleHoverBackground': INHERIT, 
    'chat.requestCodeBorder': INHERIT, 
    'chat.slashCommandBackground': INHERIT, 
    'chat.slashCommandForeground': INHERIT, 
    'chat.thinkingShimmer': INHERIT, 
    'chatManagement.sashBorder': INHERIT, 

    // Inline Chat

    'inlineChat.background': INHERIT, 
    'inlineChat.border': INHERIT, 
    'inlineChat.foreground': INHERIT, 
    'inlineChat.shadow': INHERIT, 
    'inlineChatDiff.inserted': INHERIT, 
    'inlineChatDiff.removed': INHERIT, 
    'inlineChatInput.background': INHERIT, 
    'inlineChatInput.border': INHERIT, 
    'inlineChatInput.focusBorder': INHERIT, 
    'inlineChatInput.placeholderForeground': INHERIT, 

    // Panel Chat

    'interactive.activeCodeBorder': INHERIT, 
    'interactive.inactiveCodeBorder': INHERIT, 

    // Editor Widget
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/modal.less
    'editorWidget.background': palette.overlayBackgroundColor,
    'editorWidget.border': palette.overlayBorderColor,
    'editorWidget.foreground': INHERIT, // textColor
    'editorWidget.resizeBorder': palette.overlayBackgroundColor,

    'editorSuggestWidget.background': INHERIT, // overlayBackgroundColor
    'editorSuggestWidget.border': INHERIT, // overlayBorderColor
    'editorSuggestWidget.focusHighlightForeground': palette.textColorSelected,
    'editorSuggestWidget.foreground': INHERIT, // textColor
    'editorSuggestWidget.highlightForeground': palette.textColorHighlight,
    'editorSuggestWidget.selectedBackground': INHERIT, // backgroundColorInactive
    'editorSuggestWidget.selectedForeground': INHERIT, // textColorSelected
    'editorSuggestWidget.selectedIconForeground': INHERIT,
    'editorSuggestWidgetStatus.foreground': INHERIT,

    'editorHoverWidget.background': INHERIT, // overlayBackgroundColor
    'editorHoverWidget.border': INHERIT, // overlayBorderColor
    'editorHoverWidget.foreground': INHERIT, // textColor
    'editorHoverWidget.highlightForeground': INHERIT,
    'editorHoverWidget.statusBarBackground': palette.overlayBackgroundColor,

    'editorGhostText.background': INHERIT, // TRANSPARENT
    'editorGhostText.border': INHERIT, 
    'editorGhostText.foreground': INHERIT,

    'editorStickyScroll.background': palette.insetPanelBackgroundColor,
    'editorStickyScroll.border': INHERIT, 
    'editorStickyScroll.shadow': INHERIT, 
    'editorStickyScrollGutter.background': INHERIT, 
    'editorStickyScrollHover.background': palette.insetPanelBackgroundColor,

    'debugExceptionWidget.background': INHERIT, // overlayBackgroundColor
    'debugExceptionWidget.border': INHERIT, // overlayBorderColor

    'editorMarkerNavigation.background': palette.backgroundColorHighlight,
    'editorMarkerNavigationError.background': palette.backgroundColorError,
    'editorMarkerNavigationError.headerBackground': palette.backgroundColorError
      .clone()
      .setAlpha(0.2),
    'editorMarkerNavigationInfo.background': palette.backgroundColorInfo,
    'editorMarkerNavigationInfo.headerBackground': palette.backgroundColorInfo
      .clone()
      .setAlpha(0.2),
    'editorMarkerNavigationWarning.background': palette.backgroundColorWarning,
    'editorMarkerNavigationWarning.headerBackground':
      palette.backgroundColorWarning.clone().setAlpha(0.2),

    // Peek View
    'peekView.border': palette.accentColor,
    'peekViewEditor.background': palette.insetPanelBackgroundColor,
    'peekViewEditor.matchHighlightBackground': palette.syntaxResultMarkerColor,
    'peekViewEditor.matchHighlightBorder': INHERIT, // TRANSPARENT
    'peekViewEditorGutter.background': INHERIT, // insetPanelBackgroundColor
    'peekViewEditorStickyScroll.background': INHERIT, 
    'peekViewEditorStickyScrollGutter.background': INHERIT, 
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
    'editorOverviewRuler.commentForeground': INHERIT, 
    'editorOverviewRuler.commentUnresolvedForeground': INHERIT, 
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
    'mergeEditor.change.background': INHERIT, 
    'mergeEditor.change.word.background': INHERIT, 
    'mergeEditor.changeBase.background': INHERIT, 
    'mergeEditor.changeBase.word.background': INHERIT, 
    'mergeEditor.conflict.handled.minimapOverViewRuler': INHERIT, 
    'mergeEditor.conflict.handledFocused.border': INHERIT, 
    'mergeEditor.conflict.handledUnfocused.border': INHERIT, 
    'mergeEditor.conflict.input1.background': INHERIT, 
    'mergeEditor.conflict.input2.background': INHERIT, 
    'mergeEditor.conflict.unhandled.minimapOverViewRuler': INHERIT, 
    'mergeEditor.conflict.unhandledFocused.border': INHERIT, 
    'mergeEditor.conflict.unhandledUnfocused.border': INHERIT, 
    'mergeEditor.conflictingLines.background': INHERIT, 

    // Panel
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/panels.less
    'outputView.background': INHERIT, 
    'outputViewStickyScroll.background': INHERIT, 
    'panel.background': palette.toolPanelBackgroundColor,
    'panel.border': palette.toolPanelBorderColor,
    'panel.dropBorder': INHERIT, // tabTextColorActive
    'panelInput.border': palette.inputBorderColor,
    'panelSection.border': INHERIT, // toolPanelBorderColor
    'panelSection.dropBackground': INHERIT, // dropBackground
    'panelSectionHeader.background': palette.panelHeadingBackgroundColor,
    'panelSectionHeader.border': INHERIT, // TRANSPARENT
    'panelSectionHeader.foreground': INHERIT, // textColor
    'panelStickyScroll.background': INHERIT, 
    'panelStickyScroll.border': INHERIT, 
    'panelStickyScroll.shadow': INHERIT, 
    'panelTitle.activeBorder': TRANSPARENT,
    'panelTitle.activeForeground': palette.tabTextColorActive,
    'panelTitle.border': INHERIT, 
    'panelTitle.inactiveForeground': palette.tabTextColor,
    'panelTitleBadge.background': INHERIT, 
    'panelTitleBadge.foreground': INHERIT, 

    // Preview
    'imagePreview.border': palette.toolPanelBorderColor,

    // Status Bar
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/status-bar.less
    'statusBar.background': palette.toolPanelBackgroundColor,
    'statusBar.border': palette.toolPanelBorderColor,
    'statusBar.debuggingBackground': INHERIT,
    'statusBar.debuggingBorder': INHERIT, // toolPanelBorderColor
    'statusBar.debuggingForeground': palette.accentBgTextColor,
    'statusBar.focusBorder': INHERIT, 
    'statusBar.foreground': palette.textColor,
    'statusBar.noFolderBackground': palette.toolPanelBackgroundColor,
    'statusBar.noFolderBorder': INHERIT, // toolPanelBorderColor
    'statusBar.noFolderForeground': INHERIT, // textColor
    'statusBarItem.activeBackground': palette.level3ColorActive,
    'statusBarItem.compactHoverBackground': INHERIT, 
    'statusBarItem.errorBackground': INHERIT,
    'statusBarItem.errorForeground': INHERIT,
    'statusBarItem.errorHoverBackground': INHERIT, 
    'statusBarItem.errorHoverForeground': INHERIT, 
    'statusBarItem.focusBorder': INHERIT, 
    'statusBarItem.hoverBackground': palette.level3ColorHover,
    'statusBarItem.hoverForeground': INHERIT, 
    'statusBarItem.offlineBackground': INHERIT, 
    'statusBarItem.offlineForeground': INHERIT, 
    'statusBarItem.offlineHoverBackground': INHERIT, 
    'statusBarItem.offlineHoverForeground': INHERIT, 
    'statusBarItem.prominentBackground': palette.accentBgColor,
    'statusBarItem.prominentForeground': palette.accentBgTextColor,
    'statusBarItem.prominentHoverBackground': palette.accentBgColor,
    'statusBarItem.prominentHoverForeground': INHERIT, 
    'statusBarItem.remoteBackground': INHERIT, // badgeBackgroundColor
    'statusBarItem.remoteForeground': INHERIT, // textColorHighlight
    'statusBarItem.remoteHoverBackground': INHERIT, 
    'statusBarItem.remoteHoverForeground': INHERIT, 
    'statusBarItem.warningBackground': INHERIT,
    'statusBarItem.warningForeground': INHERIT,
    'statusBarItem.warningHoverBackground': INHERIT, 
    'statusBarItem.warningHoverForeground': INHERIT, 

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

    // Command Center

    'commandCenter.activeBackground': INHERIT, 
    'commandCenter.activeBorder': INHERIT, 
    'commandCenter.activeForeground': INHERIT, 
    'commandCenter.background': INHERIT, 
    'commandCenter.border': INHERIT, 
    'commandCenter.debuggingBackground': INHERIT, 
    'commandCenter.foreground': INHERIT, 
    'commandCenter.inactiveBorder': INHERIT, 
    'commandCenter.inactiveForeground': INHERIT, 

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

    // Banner

    'banner.background': INHERIT, 
    'banner.foreground': INHERIT, 
    'banner.iconForeground': INHERIT, 

    // Extensions
    'extensionBadge.remoteBackground': INHERIT, // badgeBackgroundColor
    'extensionBadge.remoteForeground': INHERIT, // textColorHighlight
    'extensionButton.background': INHERIT, 
    'extensionButton.border': INHERIT, 
    'extensionButton.foreground': INHERIT, 
    'extensionButton.hoverBackground': INHERIT, 
    'extensionButton.prominentBackground': palette.accentBgColor,
    'extensionButton.prominentForeground': palette.accentBgTextColor,
    'extensionButton.prominentHoverBackground': palette.accentBgColor,
    'extensionButton.separator': INHERIT, 
    'extensionIcon.preReleaseForeground': INHERIT,
    'extensionIcon.privateForeground': INHERIT, 
    'extensionIcon.sponsorForeground': INHERIT, 
    'extensionIcon.starForeground': INHERIT,
    'extensionIcon.verifiedForeground': INHERIT,
    'mcpIcon.starForeground': INHERIT, 

    // Quick Picker
    'pickerGroup.border': palette.overlayBorderColor,
    'pickerGroup.foreground': palette.textColor,
    'quickInput.background': palette.overlayBackgroundColor,
    'quickInput.foreground': INHERIT, // textColor
    'quickInputList.focusBackground': palette.backgroundColorSelected,
    'quickInputList.focusForeground': palette.textColorSelected,
    'quickInputList.focusIconForeground': INHERIT,
    'quickInputTitle.background': palette.overlayBackgroundColor,

    // Keybinding Label
    'keybindingLabel.background': undefined,
    'keybindingLabel.border': undefined,
    'keybindingLabel.bottomBorder': undefined,
    'keybindingLabel.foreground': undefined,

    // Keyboard Shortcut Table
    'keybindingTable.headerBackground': INHERIT,
    'keybindingTable.rowsBackground': INHERIT,

    // Integrated Terminal
    'terminal.ansiBlack': INHERIT,
    'terminal.ansiBlue': palette.hue2,
    'terminal.ansiBrightBlack': INHERIT,
    'terminal.ansiBrightBlue': INHERIT,
    'terminal.ansiBrightCyan': INHERIT,
    'terminal.ansiBrightGreen': INHERIT,
    'terminal.ansiBrightMagenta': INHERIT,
    'terminal.ansiBrightRed': INHERIT,
    'terminal.ansiBrightWhite': INHERIT,
    'terminal.ansiBrightYellow': INHERIT,
    'terminal.ansiCyan': palette.hue1,
    'terminal.ansiGreen': palette.hue4,
    'terminal.ansiMagenta': palette.hue3,
    'terminal.ansiRed': palette.hue5,
    'terminal.ansiWhite': palette.mono1,
    'terminal.ansiYellow': palette.hue6,
    'terminal.background': INHERIT,
    'terminal.border': INHERIT, // toolPanelBorderColor
    'terminal.dropBackground': INHERIT, 
    'terminal.findMatchBackground': INHERIT, 
    'terminal.findMatchBorder': INHERIT, 
    'terminal.findMatchHighlightBackground': INHERIT, 
    'terminal.findMatchHighlightBorder': INHERIT, 
    'terminal.foreground': INHERIT,
    'terminal.hoverHighlightBackground': INHERIT, 
    'terminal.inactiveSelectionBackground': INHERIT, 
    'terminal.initialHintForeground': INHERIT, 
    'terminal.selectionBackground': palette.syntaxSelectionColor,
    'terminal.selectionForeground': INHERIT, 
    'terminal.tab.activeBorder': INHERIT, // TRANSPARENT
    'terminalCommandDecoration.defaultBackground': INHERIT, 
    'terminalCommandDecoration.errorBackground': INHERIT, 
    'terminalCommandDecoration.successBackground': INHERIT, 
    'terminalCommandGuide.foreground': INHERIT, 
    'terminalCursor.background': INHERIT,
    'terminalCursor.foreground': INHERIT,
    'terminalOverviewRuler.border': INHERIT, 
    'terminalOverviewRuler.cursorForeground': INHERIT, 
    'terminalOverviewRuler.findMatchForeground': INHERIT, 
    'terminalStickyScroll.background': INHERIT, 
    'terminalStickyScroll.border': INHERIT, 
    'terminalStickyScrollHover.background': INHERIT, 

    'terminalSymbolIcon.aliasForeground': INHERIT, 
    'terminalSymbolIcon.argumentForeground': INHERIT, 
    'terminalSymbolIcon.branchForeground': INHERIT, 
    'terminalSymbolIcon.commitForeground': INHERIT, 
    'terminalSymbolIcon.fileForeground': INHERIT, 
    'terminalSymbolIcon.flagForeground': INHERIT, 
    'terminalSymbolIcon.folderForeground': INHERIT, 
    'terminalSymbolIcon.inlineSuggestionForeground': INHERIT, 
    'terminalSymbolIcon.methodForeground': INHERIT, 
    'terminalSymbolIcon.optionForeground': INHERIT, 
    'terminalSymbolIcon.optionValueForeground': INHERIT, 
    'terminalSymbolIcon.pullRequestDoneForeground': INHERIT, 
    'terminalSymbolIcon.pullRequestForeground': INHERIT, 
    'terminalSymbolIcon.remoteForeground': INHERIT, 
    'terminalSymbolIcon.stashForeground': INHERIT, 
    'terminalSymbolIcon.symbolText': INHERIT, 
    'terminalSymbolIcon.symbolicLinkFileForeground': INHERIT, 
    'terminalSymbolIcon.symbolicLinkFolderForeground': INHERIT, 
    'terminalSymbolIcon.tagForeground': INHERIT, 

    // Debug
    'debugTokenExpression.boolean': palette.hue6,
    'debugTokenExpression.error': palette.textColorError,
    'debugTokenExpression.name': palette.hue5,
    'debugTokenExpression.number': palette.hue6,
    'debugTokenExpression.string': palette.hue4,
    'debugTokenExpression.type': INHERIT, 
    'debugTokenExpression.value': palette.hue1,
    'debugToolBar.background': palette.overlayBackgroundColor,
    'debugToolBar.border': INHERIT, // TRANSPARENT
    'debugView.exceptionLabelBackground': palette.backgroundColorError,
    'debugView.exceptionLabelForeground': palette.textColor,
    'debugView.stateLabelBackground': palette.backgroundColorSuccess,
    'debugView.stateLabelForeground': INHERIT, // textColor
    'debugView.valueChangedHighlight': palette.backgroundColorInfo,
    'editor.focusedStackFrameHighlightBackground': INHERIT,
    'editor.stackFrameHighlightBackground': INHERIT,

    // Testing
    'testing.coverCountBadgeBackground': INHERIT, 
    'testing.coverCountBadgeForeground': INHERIT, 
    'testing.coveredBackground': INHERIT, 
    'testing.coveredBorder': INHERIT, 
    'testing.coveredGutterBackground': INHERIT, 
    'testing.iconErrored': undefined,
    'testing.iconErrored.retired': INHERIT, 
    'testing.iconFailed': undefined,
    'testing.iconFailed.retired': INHERIT, 
    'testing.iconPassed': undefined,
    'testing.iconPassed.retired': INHERIT, 
    'testing.iconQueued': undefined,
    'testing.iconQueued.retired': INHERIT, 
    'testing.iconSkipped': undefined,
    'testing.iconSkipped.retired': INHERIT, 
    'testing.iconUnset': undefined,
    'testing.iconUnset.retired': INHERIT, 
    'testing.message.error.badgeBackground': INHERIT, 
    'testing.message.error.badgeBorder': INHERIT, 
    'testing.message.error.badgeForeground': INHERIT, 
    'testing.message.error.decorationForeground': undefined,
    'testing.message.error.lineBackground': undefined,
    'testing.message.info.decorationForeground': undefined,
    'testing.message.info.lineBackground': undefined,
    'testing.messagePeekBorder': INHERIT, 
    'testing.messagePeekHeaderBackground': INHERIT, 
    'testing.peekBorder': undefined,
    'testing.peekHeaderBackground': undefined,
    'testing.runAction': undefined,
    'testing.uncoveredBackground': INHERIT, 
    'testing.uncoveredBorder': INHERIT, 
    'testing.uncoveredBranchBackground': INHERIT, 
    'testing.uncoveredGutterBackground': INHERIT, 

    // Welcome Page
    'welcomePage.background': INHERIT,
    'welcomePage.progress.background': INHERIT,
    'welcomePage.progress.foreground': INHERIT,
    'welcomePage.tileBackground': INHERIT,
    'welcomePage.tileBorder': INHERIT, 
    'welcomePage.tileHoverBackground': INHERIT,
    'welcomePage.tileShadow': INHERIT,

    'walkThrough.embeddedEditorBackground': palette.insetPanelBackgroundColor,
    'walkthrough.stepTitle.foreground': INHERIT, 

    // Git
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/git.less
    'git.blame.editorDecorationForeground': INHERIT, 
    'gitDecoration.addedResourceForeground': palette.textColorAdded,
    'gitDecoration.conflictingResourceForeground': INHERIT, // textColor
    'gitDecoration.deletedResourceForeground': palette.textColorRemoved,
    'gitDecoration.ignoredResourceForeground': palette.textColorIgnored,
    'gitDecoration.modifiedResourceForeground': palette.textColorModified,
    'gitDecoration.renamedResourceForeground': palette.textColorRenamed,
    'gitDecoration.stageDeletedResourceForeground': palette.textColorRemoved,
    'gitDecoration.stageModifiedResourceForeground': palette.textColorModified,
    'gitDecoration.submoduleResourceForeground': INHERIT, // textColor
    'gitDecoration.untrackedResourceForeground': palette.textColorAdded,

    // Source Control Graph

    'scmGraph.foreground1': INHERIT, 
    'scmGraph.foreground2': INHERIT, 
    'scmGraph.foreground3': INHERIT, 
    'scmGraph.foreground4': INHERIT, 
    'scmGraph.foreground5': INHERIT, 
    'scmGraph.historyItemBaseRefColor': INHERIT, 
    'scmGraph.historyItemHoverAdditionsForeground': INHERIT, 
    'scmGraph.historyItemHoverDefaultLabelBackground': INHERIT, 
    'scmGraph.historyItemHoverDefaultLabelForeground': INHERIT, 
    'scmGraph.historyItemHoverDeletionsForeground': INHERIT, 
    'scmGraph.historyItemHoverLabelForeground': INHERIT, 
    'scmGraph.historyItemRefColor': INHERIT, 
    'scmGraph.historyItemRemoteRefColor': INHERIT, 

    // Settings Editor
    // https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/settings.less
    'settings.checkboxBackground': INHERIT, // inputBackgroundColor
    'settings.checkboxBorder': INHERIT, // baseBorderColor
    'settings.checkboxForeground': INHERIT, // textColor
    'settings.dropdownBackground': INHERIT, // inputBackgroundColor
    'settings.dropdownBorder': INHERIT, // baseBorderColor
    'settings.dropdownForeground': INHERIT, // textColor
    'settings.dropdownListBorder': INHERIT, // overlayBorderColor
    'settings.focusedRowBackground': palette.backgroundColorInactive,
    'settings.focusedRowBorder': TRANSPARENT,
    'settings.headerBorder': INHERIT, 
    'settings.headerForeground': palette.textColorHighlight,
    'settings.modifiedItemIndicator': palette.textColorAdded,
    'settings.numberInputBackground': INHERIT, // inputBackgroundColor
    'settings.numberInputBorder': INHERIT, // inputBorderColor
    'settings.numberInputForeground': INHERIT, // textColorHighlight
    'settings.rowHoverBackground': palette.backgroundColorInactive .clone() .setAlpha(0.5),
    'settings.sashBorder': INHERIT, 
    'settings.settingsHeaderHoverForeground': INHERIT, 
    'settings.textInputBackground': INHERIT, // inputBackgroundColor
    'settings.textInputBorder': INHERIT, // inputBorderColor
    'settings.textInputForeground': INHERIT, // textColorHighlight

    // Breadcrumbs
    'breadcrumb.activeSelectionForeground': palette.textColorHighlight,
    'breadcrumb.background': INHERIT, 
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
    'debugIcon.stopForeground': INHERIT,

    'debugConsole.errorForeground': INHERIT, // textColorError
    'debugConsole.infoForeground': INHERIT, // textColorInfo
    'debugConsole.sourceForeground': INHERIT, // textColor
    'debugConsole.warningForeground': INHERIT, // textColorWarning
    'debugConsoleInputIcon.foreground': INHERIT, // textColor

    // Notebook
    'notebook.cellBorderColor': INHERIT,
    'notebook.cellEditorBackground': INHERIT, 
    'notebook.cellHoverBackground': INHERIT,
    'notebook.cellInsertionIndicator': INHERIT,
    'notebook.cellStatusBarItemHoverBackground': INHERIT,
    'notebook.cellToolbarSeparator': INHERIT,
    'notebook.editorBackground': INHERIT, 
    'notebook.focusedCellBackground': INHERIT,
    'notebook.focusedCellBorder': INHERIT,
    'notebook.focusedEditorBorder': INHERIT,
    'notebook.inactiveFocusedCellBorder': INHERIT,
    'notebook.inactiveSelectedCellBorder': INHERIT,
    'notebook.outputContainerBackgroundColor': INHERIT,
    'notebook.outputContainerBorderColor': INHERIT,
    'notebook.selectedCellBackground': INHERIT,
    'notebook.selectedCellBorder': INHERIT,
    'notebook.symbolHighlightBackground': INHERIT,
    'notebookEditorOverviewRuler.runningCellForeground': INHERIT, 
    'notebookScrollbarSlider.activeBackground': INHERIT,
    'notebookScrollbarSlider.background': INHERIT,
    'notebookScrollbarSlider.hoverBackground': INHERIT,
    'notebookStatusErrorIcon.foreground': INHERIT,
    'notebookStatusRunningIcon.foreground': INHERIT,
    'notebookStatusSuccessIcon.foreground': INHERIT,

    // Chart
    'chart.axis': INHERIT, 
    'chart.guide': INHERIT, 
    'chart.line': INHERIT, 
    'charts.blue': INHERIT,
    'charts.foreground': INHERIT,
    'charts.green': INHERIT,
    'charts.lines': INHERIT,
    'charts.orange': INHERIT,
    'charts.purple': INHERIT,
    'charts.red': INHERIT,
    'charts.yellow': INHERIT,

    // Ports
    'ports.iconRunningProcessForeground': INHERIT,

    // Comments View
    'commentsView.resolvedIcon': INHERIT, 
    'commentsView.unresolvedIcon': INHERIT, 

    // Action Bar
    'actionBar.toggledBackground': INHERIT, 

    // Simple Find Widget
    'simpleFindWidget.sashBorder': INHERIT, 

    // Gauge
    'gauge.background': INHERIT, 
    'gauge.border': INHERIT, 
    'gauge.errorBackground': INHERIT, 
    'gauge.errorForeground': INHERIT, 
    'gauge.foreground': INHERIT, 
    'gauge.warningBackground': INHERIT, 
    'gauge.warningForeground': INHERIT, 

    // Markdown
    'markdownAlert.caution.foreground': INHERIT, 
    'markdownAlert.important.foreground': INHERIT, 
    'markdownAlert.note.foreground': INHERIT, 
    'markdownAlert.tip.foreground': INHERIT, 
    'markdownAlert.warning.foreground': INHERIT, 

    // Agent Session
    'agentSessionReadIndicator.foreground': INHERIT, 
    'agentSessionSelectedBadge.border': INHERIT, 
    'agentSessionSelectedUnfocusedBadge.border': INHERIT, 
    'agentStatusIndicator.background': INHERIT, 
    'aiCustomizationManagement.sashBorder': INHERIT, 

    // For extension https://marketplace.visualstudio.com/items?itemName=outofsync42.inline-css-color
    // Workaround for https://github.com/textmate/html.tmbundle/issues/88
    'inline.css.propertyName': palette.mono1,
    'inline.css.punctuation': palette.mono1,
    'inline.css.supportFunction': palette.hue1,
    'inline.css.valueConstant': palette.hue6,
    'inline.css.valueNumeric': palette.hue6,
    'inline.css.valueNumericUnit': palette.hue6,
    'inline.css.keywordImportant': palette.hue3,
    'inline.css.string': palette.hue4
  }
}

export const WORKBENCH_DARK = generateWorkbench(darkPalette)
export const WORKBENCH_LIGHT = generateWorkbench(lightPalette)
