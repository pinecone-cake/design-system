import { layout, LayoutRadius, LayoutSpacing, LayoutBorderWidth } from './layout';
import { typography, TypographyVariant, FontSize, FontWeight, LineHeight } from './typography';
import { themeColors as colors, ColorKeys } from './colors';

export const foundation = {
    colors,
    layout,
    typography,
};

export type {
    TypographyVariant,
    FontSize,
    FontWeight,
    LineHeight,
    ColorKeys,
    LayoutSpacing,
    LayoutRadius,
    LayoutBorderWidth,
};
