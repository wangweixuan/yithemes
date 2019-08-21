import * as tc from 'tinycolor2'

// https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/colors.less
export const syntaxHue = 220
export const syntaxSaturation = 0.13
export const syntaxBrightness = 0.18

export const mono1 = tc({ h: syntaxHue, s: 0.14, l: 0.71 })
export const mono2 = tc({ h: syntaxHue, s: 0.09, l: 0.55 })
export const mono3 = tc({ h: syntaxHue, s: 0.1, l: 0.4 })

export const hue1 = tc({ h: 187, s: 0.47, l: 0.55 })
export const hue2 = tc({ h: 207, s: 0.82, l: 0.66 })
export const hue3 = tc({ h: 286, s: 0.6, l: 0.67 })
export const hue4 = tc({ h: 95, s: 0.38, l: 0.62 })
export const hue5 = tc({ h: 355, s: 0.65, l: 0.65 })
export const hue52 = tc({ h: 5, s: 0.48, l: 0.51 })
export const hue6 = tc({ h: 29, s: 0.54, l: 0.61 })
export const hue62 = tc({ h: 39, s: 0.67, l: 0.69 })

export const syntaxFg = mono1
export const syntaxBg = tc({
  h: syntaxHue,
  s: syntaxSaturation,
  l: syntaxBrightness
})
export const syntaxGutter = syntaxFg.clone().darken(26)
export const syntaxGuide = syntaxFg.clone().setAlpha(0.15)
export const syntaxAccent = tc({ h: syntaxHue, s: 1, l: 0.66 })

// https://github.com/atom/atom/blob/master/packages/one-dark-syntax/styles/syntax-variables.less
export const syntaxBackgroundColor = syntaxBg
export const syntaxTextColor = syntaxFg
export const syntaxCursorColor = syntaxAccent
export const syntaxSelectionColor = syntaxBackgroundColor.clone().lighten(10)
export const syntaxSelectionFlashColor = syntaxAccent

export const syntaxWrapGuideColor = syntaxGuide
export const syntaxIndentGuideColor = syntaxGuide
export const syntaxInvisibleCharacterColor = syntaxGuide

export const syntaxResultMarkerColor = syntaxAccent.clone().setAlpha(0.24)
export const syntaxResultMarkerColorSelected = syntaxAccent

export const syntaxGutterTextColor = syntaxGutter
export const syntaxGutterTextColorSelected = syntaxFg
export const syntaxGutterBackgroundColor = syntaxBg
export const syntaxGutterBackgroundColorSelected = syntaxBg.clone().lighten(8)

export const syntaxColorRenamed = tc({ h: 208, s: 1, l: 0.6 })
export const syntaxColorAdded = tc({ h: 150, s: 0.6, l: 0.54 })
export const syntaxColorModified = tc({ h: 40, s: 0.6, l: 0.7 })
export const syntaxColorRemoved = tc({ h: 0, s: 0.7, l: 0.6 })

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

export const syntaxCursorLine = tc({ h: syntaxHue, s: 1, l: 0.8, a: 0.04 })

export const syntaxDeprecatedFg = syntaxColorModified.clone().darken(50)
export const syntaxDeprecatedBg = syntaxColorModified
export const syntaxIllegalFg = tc('white')
export const syntaxIllegalBg = syntaxColorRemoved

// https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/ui-variables-custom.less#L1
export const uiSyntaxColor =
  syntaxBackgroundColor || tc({ h: 220, s: 0.24, l: 0.2 })

export const uiInv = 0.1

export const uiHue = uiSyntaxColor.toHsl().s ? uiSyntaxColor.toHsl().h : 220
export const uiSaturation =
  uiSyntaxColor.toHsl().h <= 80
    ? Math.min(uiSyntaxColor.toHsl().s, 0.05)
    : uiSyntaxColor.toHsl().h < 160
    ? Math.min(uiSyntaxColor.toHsl().s, 0.12)
    : uiSyntaxColor.toHsl().l < uiInv
    ? Math.min(uiSyntaxColor.toHsl().s, 0.48)
    : uiSyntaxColor.toHsl().s
export const uiLightness =
  uiSyntaxColor.toHsl().l < uiInv
    ? uiSyntaxColor.toHsl().l + 0.08
    : Math.min(uiSyntaxColor.toHsl().l, 0.2)
export const uiLightnessBorder =
  uiSyntaxColor.toHsl().l < uiInv ? uiLightness * 0.3 : uiLightness * 0.6

export const uiFg = tc({
  h: uiHue,
  s: Math.min(uiSaturation, 0.18),
  l: Math.max(uiLightness * 3, 0.66)
})
export const uiBg = tc({ h: uiHue, s: uiSaturation, l: uiLightness })
export const uiBorder = tc({ h: uiHue, s: uiSaturation, l: uiLightnessBorder })

// https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/ui-variables.less#L1
export const textColor = uiFg
export const textColorSubtle = textColor
  .clone()
  .setAlpha(textColor.getAlpha() - 0.4)
export const textColorHighlight = textColor.clone().lighten(20)
export const textColorSelected = tc('white')

export const textColorInfo = tc({ h: 219, s: 0.79, l: 0.66 })
export const textColorSuccess = tc({ h: 140, s: 0.44, l: 0.62 })
export const textColorWarning = tc({ h: 36, s: 0.6, l: 0.72 })
export const textColorError = tc({ h: 9, s: 1, l: 0.64 })

export const baseBackgroundColor = uiBg
export const baseBorderColor = uiBorder

export const backgroundColorInfo = tc({ h: 208, s: 0.88, l: 0.48 })
export const backgroundColorSuccess = tc({ h: 132, s: 0.58, l: 0.4 })
export const backgroundColorWarning = tc({ h: 42, s: 0.88, l: 0.36 })
export const backgroundColorError = tc({ h: 5, s: 0.64, l: 0.5 })

export const backgroundColorHighlight = baseBackgroundColor.clone().lighten(4)
export const backgroundColorSelected = baseBackgroundColor.clone().lighten(8)
export const backgroundColorInactive = tc('#3a3f4b')

// https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/ui-variables-custom.less#L44
export const textColorFaded = textColor.clone().setAlpha(0.2)

export const textColorAdded = textColorSuccess
export const textColorIgnored = textColorSubtle
export const textColorModified = textColorWarning
export const textColorRemoved = textColorError
export const textColorRenamed = textColorInfo

export const level1Color = baseBackgroundColor.clone().lighten(6)
export const level2Color = baseBackgroundColor
export const level3Color = baseBackgroundColor.clone().darken(3)
export const level3ColorHover = level3Color.clone().lighten(6)
export const level3ColorActive = level3Color.clone().lighten(3)

export const accentLuma = tc({ h: uiHue, s: 0.5, l: 0.5 }).getLuminance()

export const accentColor = tc.mix(
  tc({ h: uiHue, s: 1, l: 0.66 }),
  tc({ h: uiHue, s: 1, l: 0.7 }),
  accentLuma
)
export const accentTextColor = tc.mostReadable(accentColor, [
  tc({ h: uiHue, s: 1, l: 0.1 }),
  tc('white')
]) // TODO: threshold 0.25 missing

export const accentBgColor = tc.mix(
  tc({ h: uiHue, s: 0.66, v: 0.66 }),
  tc({ h: uiHue, s: 0.66, l: 0.6 }),
  accentLuma * 2
)
export const accentBgTextColor = tc.mostReadable(accentBgColor, [
  tc({ h: uiHue, s: 1, l: 0.1 }),
  tc('white')
]) // TODO: threshold 0.3 missing

export const accentOnlyTextColor = tc.mix(
  tc({ h: uiHue, s: 1, v: 0.66 }),
  tc({ h: uiHue, s: 1, l: 0.77 }),
  accentLuma
)

// https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/ui-variables.less#L34
export const appBackgroundColor = level3Color

export const paneItemBackgroundColor = baseBackgroundColor
export const paneItemBorderColor = baseBorderColor

export const inputBackgroundColor = baseBackgroundColor.clone().darken(6)
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
  .lighten(2)
export const buttonBackgroundColorSelected = accentBgColor
export const buttonBorderColor = baseBorderColor

export const tabBarBackgroundColor = level3Color
export const tabBarBorderColor = baseBorderColor
export const tabBackgroundColor = level3Color
export const tabBackgroundColorActive = level2Color
export const tabBorderColor = baseBorderColor

export const treeViewBackgroundColor = level3Color
export const treeViewBorderColor = baseBorderColor

export const uiSiteColor1 = tc({ h: 208, s: 1, l: 0.5 })
export const uiSiteColor2 = tc({ h: 160, s: 0.7, l: 0.42 })
export const uiSiteColor3 = tc({ h: 32, s: 0.6, l: 0.5 })
export const uiSiteColor4 = tc('#D831B0')
export const uiSiteColor5 = tc('#EBDD5B')

// https://github.com/atom/atom/blob/master/packages/atom-dark-ui/styles/ui-variables-custom.less#L83
export const badgeBackgroundColor = backgroundColorHighlight.clone().lighten(6)

export const buttonTextColorSelected = accentBgTextColor
export const buttonBorderColorSelected = baseBorderColor

export const checkboxBackgroundColor = accentBgColor.clone().setAlpha(0.33)

export const inputBackgroundColorFocus = tc.mix(
  accentBgColor,
  inputBackgroundColor,
  0.1
)
export const inputSelectionColor = tc.mix(
  accentColor,
  inputBackgroundColor,
  0.25
)
export const inputSelectionColorFocus = tc.mix(
  accentColor,
  inputBackgroundColor,
  0.5
)

export const overlayBackdropColor = tc({
  h: uiHue,
  s: uiSaturation,
  l: uiLightness * 0.2
})
export const overlayBackdropOpacity = 0.75

export const progressBackgroundColor = accentColor

export const scrollbarColor = uiSyntaxColor.clone().lighten(16)
export const scrollbarBackgroundColor = level3Color
export const scrollbarColorEditor = uiSyntaxColor.clone().lighten(16)
export const scrollbarBackgroundColorEditor = uiSyntaxColor

export const tabTextColor = textColorSubtle
export const tabTextColorActive = textColorHighlight
export const tabTextColorEditor = tc.mostReadable(uiSyntaxColor, [
  uiSyntaxColor.clone().darken(50),
  textColorHighlight
])
export const tabBackgroundColorEditor = uiSyntaxColor
export const tabInactiveStatusAdded = textColorSuccess.clone().setAlpha(0.55)
export const tabInactiveStatusModified = textColorWarning.clone().setAlpha(0.55)

export const tooltipBackgroundColor = accentBgColor
export const tooltipTextColor = accentBgTextColor
export const tooltipTextKeyColor = tooltipBackgroundColor
export const tooltipBackgroundKeyColor = tooltipTextColor
