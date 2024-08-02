import { typography, TypographyVariant, FontSize, FontWeight, LineHeight } from './typography';
import { borderWidth, radius, spacing, Spacing, Radius, BorderWidth } from './layout';
import { themeColors as colors, ColorKeys } from './colors';

export const foundation = {
    colors,
    spacing,
    radius,
    borderWidth,
    typography,
};

export type {
    TypographyVariant,
    FontSize,
    FontWeight,
    LineHeight,
    ColorKeys,
    Spacing,
    Radius,
    BorderWidth,
};
