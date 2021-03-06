import * as tc from 'tinycolor2'

// https://github.com/atom/atom/blob/master/packages/one-light-syntax/styles/colors.less
export const syntaxHue = 230
export const syntaxSaturation = 0.01
export const syntaxBrightness = 0.98

export const mono1 = tc({ h: syntaxHue, s: 0.08, l: 0.24 })
export const mono2 = tc({ h: syntaxHue, s: 0.06, l: 0.44 })
export const mono3 = tc({ h: syntaxHue, s: 0.04, l: 0.64 })

export const hue1 = tc({ h: 198, s: 0.99, l: 0.37 })
export const hue2 = tc({ h: 221, s: 0.87, l: 0.6 })
export const hue3 = tc({ h: 301, s: 0.63, l: 0.4 })
export const hue4 = tc({ h: 119, s: 0.34, l: 0.47 })
export const hue5 = tc({ h: 5, s: 0.74, l: 0.59 })
export const hue52 = tc({ h: 344, s: 0.84, l: 0.43 })
export const hue6 = tc({ h: 41, s: 0.99, l: 0.3 })
export const hue62 = tc({ h: 41, s: 0.99, l: 0.38 })

export const syntaxFg = mono1
export const syntaxBg = tc({
  h: syntaxHue,
  s: syntaxSaturation,
  l: syntaxBrightness
})
export const syntaxGutter = syntaxBg.clone().darken(36)
export const syntaxGuide = syntaxFg.clone().setAlpha(0.2)
export const syntaxAccent = tc({ h: syntaxHue, s: 1, l: 0.66 })

// https://github.com/atom/atom/blob/master/packages/one-light-syntax/styles/syntax-variables.less
export const syntaxBackgroundColor = syntaxBg
export const syntaxTextColor = syntaxFg
export const syntaxCursorColor = syntaxAccent
export const syntaxSelectionColor = syntaxBackgroundColor.clone().darken(8)
export const syntaxSelectionFlashColor = syntaxAccent

export const syntaxWrapGuideColor = syntaxGuide
export const syntaxIndentGuideColor = syntaxGuide
export const syntaxInvisibleCharacterColor = syntaxGuide

export const syntaxResultMarkerColor = syntaxAccent.clone().setAlpha(0.2)
export const syntaxResultMarkerColorSelected = syntaxAccent

export const syntaxGutterTextColor = syntaxGutter
export const syntaxGutterTextColorSelected = syntaxFg
export const syntaxGutterBackgroundColor = syntaxBg
export const syntaxGutterBackgroundColorSelected = syntaxBg.clone().darken(8)

export const syntaxColorRenamed = tc({ h: 208, s: 1, l: 0.66 })
export const syntaxColorAdded = tc({ h: 132, s: 0.6, l: 0.44 })
export const syntaxColorModified = tc({ h: 40, s: 0.9, l: 0.5 })
export const syntaxColorRemoved = tc({ h: 0, s: 1, l: 0.54 })

export const syntaxColorVariable = hue5
export const syntaxColorConst = hue6
export const syntaxColorProperty = syntaxFg
export const syntaxColorValue = syntaxFg
export const syntaxColorFunction = hue2
export const syntaxColorMethod = hue2
export const syntaxColorClass = hue62
export const syntaxColorKeyword = hue3
export const syntaxColorTag = hue5
export const syntaxColorAttribute = hue6
export const syntaxColorImport = hue3
export const syntaxColorSnippet = hue4

export const syntaxCursorLine = syntaxFg.clone().setAlpha(0.05)

export const syntaxDeprecatedFg = syntaxColorModified.clone().darken(50)
export const syntaxDeprecatedBg = syntaxColorModified
export const syntaxIllegalFg = tc('white')
export const syntaxIllegalBg = syntaxColorRemoved

// https://github.com/atom/atom/blob/master/packages/atom-light-ui/styles/ui-variables-custom.less#L1
export const uiSyntaxColor =
  syntaxBackgroundColor || tc({ h: 220, s: 0.01, l: 0.98 })

export const uiHue = uiSyntaxColor.toHsl().h || 220
export const uiSaturation = Math.min(uiSyntaxColor.toHsl().s, 0.24)
export const uiLightness = Math.max(uiSyntaxColor.toHsl().l, 0.92)

export const uiFg = tc({ h: uiHue, s: uiSaturation, l: uiLightness - 0.72 })
export const uiBg = tc({ h: uiHue, s: uiSaturation, l: uiLightness })

// https://github.com/atom/atom/blob/master/packages/atom-light-ui/styles/ui-variables.less#L1
export const textColor = uiFg
export const textColorSubtle = textColor.clone().lighten(30)
export const textColorHighlight = textColor.clone().darken(12)
export const textColorSelected = textColorHighlight.clone().darken(12)

export const textColorInfo = tc({ h: 208, s: 1, l: 0.54 })
export const textColorSuccess = tc({ h: 132, s: 0.6, l: 0.44 })
export const textColorWarning = tc({ h: 37, s: 0.9, l: 0.44 })
export const textColorError = tc({ h: 0, s: 0.9, l: 0.56 })

// https://github.com/atom/atom/blob/master/packages/atom-light-ui/styles/ui-variables.less#L37
export const baseBackgroundColor = uiBg

// https://github.com/atom/atom/blob/master/packages/atom-light-ui/styles/ui-variables-custom.less#L27
export const textColorFaded = textColor.clone().setAlpha(0.3)

export const textColorAdded = textColorSuccess
export const textColorIgnored = textColorSubtle
export const textColorModified = textColorWarning
export const textColorRemoved = textColorError
export const textColorRenamed = textColorInfo

export const level1Color = baseBackgroundColor.clone().lighten(4)
export const level2Color = baseBackgroundColor
export const level3Color = baseBackgroundColor.clone().darken(6)
export const level3ColorHover = level3Color.clone().darken(6)
export const level3ColorActive = level3Color.clone().darken(3)

export const accentLuma = tc({ h: uiHue, s: 0.5, l: 0.5 }).getLuminance()

export const accentColor = tc('#556de8')
/* tc.mix(
  tc({ h: uiHue, s: 0.6, v: 0.6 }), tc({ h: uiHue, s: 1, l: 0.68 }), accentLuma * 2
) */
export const accentTextColor = tc.mostReadable(accentColor, [
  tc({ h: uiHue, s: 1, l: 0.16 }),
  tc('white')
])

export const accentBgColor = tc('#5871ef')
/* tc.mix(
  tc({ h: uiHue, s: 0.4, v: 0.72 }), tc({ h: uiHue, s: 1, l: 0.66 }), accentLuma * 2
) */
export const accentBgTextColor = tc('white')
/* tc.mostReadable(
  accentBgColor, [tc({ h: uiHue, s: 1, l: 0.1 }), tc('white')]
) */

export const accentOnlyTextColor = tc.mix(
  tc({ h: uiHue, s: 0.7, v: 0.5 }),
  tc({ h: uiHue, s: 1, l: 0.6 }),
  accentLuma * 2
)

// https://github.com/atom/atom/blob/master/packages/atom-light-ui/styles/ui-variables-custom.less#L22
export const uiBorder = level3Color.clone().darken(6)

// https://github.com/atom/atom/blob/master/packages/atom-light-ui/styles/ui-variables.less#L25
export const backgroundColorInfo = tc({ h: 208, s: 1, l: 0.56 })
export const backgroundColorSuccess = tc({ h: 132, s: 0.52, l: 0.48 })
export const backgroundColorWarning = tc({ h: 40, s: 0.6, l: 0.48 })
export const backgroundColorError = tc({ h: 5, s: 0.72, l: 0.56 })

export const backgroundColorHighlight = baseBackgroundColor.clone().darken(2)
export const backgroundColorSelected = baseBackgroundColor.clone().darken(6)
export const backgroundColorInactive = tc('#dbdbdc')

export const appBackgroundColor = level3Color

// https://github.com/atom/atom/blob/master/packages/atom-light-ui/styles/ui-variables.less#L39
export const baseBorderColor = uiBorder

export const paneItemBackgroundColor = baseBackgroundColor
export const paneItemBorderColor = baseBorderColor

export const inputBackgroundColor = level1Color
export const inputBorderColor = baseBorderColor

export const toolPanelBackgroundColor = level3Color
export const toolPanelBorderColor = baseBorderColor

export const insetPanelBackgroundColor = level2Color.clone().lighten(4)
export const insetPanelBorderColor = baseBorderColor
  .clone()
  .setAlpha(baseBorderColor.getAlpha() - 0.15)

export const panelHeadingBackgroundColor = level2Color
export const panelHeadingBorderColor = baseBorderColor

export const overlayBackgroundColor = tc.mix(level2Color, level3Color)
export const overlayBorderColor = baseBorderColor

export const buttonBackgroundColor = level1Color
export const buttonBackgroundColorHover = buttonBackgroundColor
  .clone()
  .darken(4)
export const buttonBackgroundColorSelected = accentBgColor
export const buttonBorderColor = baseBorderColor

export const tabBarBackgroundColor = level3Color
export const tabBarBorderColor = baseBorderColor
export const tabBackgroundColor = level3Color
export const tabBackgroundColorActive = level2Color
export const tabBorderColor = baseBorderColor

export const treeViewBackgroundColor = level3Color
export const treeViewBorderColor = baseBorderColor

export const uiSiteColor1 = tc({ h: 208, s: 1, l: 0.56 })
export const uiSiteColor2 = tc({ h: 132, s: 0.48, l: 0.48 })
export const uiSiteColor3 = tc({ h: 40, s: 0.6, l: 0.52 })
export const uiSiteColor4 = tc('#D831B0')
export const uiSiteColor5 = tc('#EBDD5B')

// https://github.com/atom/atom/blob/master/packages/atom-light-ui/styles/ui-variables-custom.less#L83
export const badgeBackgroundColor = backgroundColorSelected

export const buttonTextColorSelected = accentBgTextColor
export const buttonBorderColorSelected = accentColor

export const checkboxBackgroundColor = accentBgColor.clone().setAlpha(0.33)

export const inputBackgroundColorFocus = tc({ h: uiHue, s: 1, l: 0.96 })
export const inputSelectionColor = tc.mix(
  tc({ h: uiHue, s: 0.33, l: 0.95 }),
  tc({ h: uiHue, s: 1, l: 0.98 }),
  accentLuma * 2
)
export const inputSelectionColorFocus = tc.mix(
  tc({ h: uiHue, s: 0.44, l: 0.9 }),
  tc({ h: uiHue, s: 1, l: 0.94 }),
  accentLuma * 2
)

export const overlayBackdropColor = tc({
  h: uiHue,
  s: uiSaturation * 0.4,
  l: uiLightness * 0.8
})
export const overlayBackdropOpacity = 0.66

export const progressBackgroundColor = accentColor

export const scrollbarColor = level3Color.clone().darken(14)
export const scrollbarBackgroundColor = level3Color
export const scrollbarColorEditor = tc.mostReadable(uiSyntaxColor, [
  uiSyntaxColor.clone().darken(14),
  uiSyntaxColor.clone().lighten(9)
])
export const scrollbarBackgroundColorEditor = uiSyntaxColor

export const tabTextColor = textColorSubtle
export const tabTextColorActive = textColorHighlight
export const tabTextColorEditor = tc.mostReadable(uiSyntaxColor, [
  uiSyntaxColor.clone().lighten(70),
  textColorHighlight
])
export const tabBackgroundColorEditor = uiSyntaxColor
export const tabInactiveStatusAdded = textColorSuccess.clone().setAlpha(0.77)
export const tabInactiveStatusModified = textColorWarning.clone().setAlpha(0.77)

export const tooltipBackgroundColor = accentBgColor
export const tooltipTextColor = accentBgTextColor
export const tooltipTextKeyColor = tooltipBackgroundColor
export const tooltipBackgroundKeyColor = tooltipTextColor
