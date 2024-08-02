export type TypographyVariant =
    | 'display-3xl'
    | 'display-2xl'
    | 'display-xl'
    | 'headline-3xl'
    | 'headline-2xl'
    | 'headline-xl'
    | 'headline-md'
    | 'headline-sm'
    | 'body-lg-bold'
    | 'body-lg-semibold'
    | 'body-lg-medium'
    | 'body-lg-regular'
    | 'body-md-bold'
    | 'body-md-semibold'
    | 'body-md-medium'
    | 'body-md-regular'
    | 'label-lg-bold'
    | 'label-lg-regular'
    | 'label-md-bold'
    | 'label-md-regular'
    | 'label-sm-bold'
    | 'label-sm-regular';

export type FontSize = number;
export type FontWeight = number | string;
export type LineHeight = number;
export type LetterSpacing = number;

export const typography: Record<
    TypographyVariant,
    {
        fontSize: FontSize;
        lineHeight: LineHeight;
        fontWeight: FontWeight;
        letterSpacing: LetterSpacing;
    }
> = {
    'display-3xl': {
        fontSize: 64,
        lineHeight: 70,
        fontWeight: '700',
        letterSpacing: -0.3,
    },
    'display-2xl': {
        fontSize: 54,
        lineHeight: 60,
        fontWeight: '700',
        letterSpacing: -0.3,
    },
    'display-xl': {
        fontSize: 48,
        lineHeight: 54,
        fontWeight: '700',
        letterSpacing: -0.3,
    },
    'headline-3xl': {
        fontSize: 40,
        lineHeight: 44,
        fontWeight: '700',
        letterSpacing: -0.3,
    },
    'headline-2xl': {
        fontSize: 36,
        lineHeight: 48,
        fontWeight: '700',
        letterSpacing: -0.3,
    },
    'headline-xl': {
        fontSize: 30,
        lineHeight: 40,
        fontWeight: '700',
        letterSpacing: -0.3,
    },
    'headline-md': {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: '700',
        letterSpacing: -0.3,
    },
    'headline-sm': {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: '700',
        letterSpacing: -0.3,
    },
    'body-lg-bold': {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '700',
        letterSpacing: -0.3,
    },
    'body-lg-semibold': {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
        letterSpacing: -0.3,
    },
    'body-lg-medium': {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '500',
        letterSpacing: -0.3,
    },
    'body-lg-regular': {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
        letterSpacing: -0.3,
    },
    'body-md-bold': {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '700',
        letterSpacing: -0.3,
    },
    'body-md-semibold': {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '600',
        letterSpacing: -0.3,
    },
    'body-md-medium': {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '500',
        letterSpacing: -0.3,
    },
    'body-md-regular': {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        letterSpacing: -0.3,
    },
    'label-lg-bold': {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '700',
        letterSpacing: -0.3,
    },
    'label-lg-regular': {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
        letterSpacing: -0.3,
    },
    'label-md-bold': {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '700',
        letterSpacing: -0.3,
    },
    'label-md-regular': {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        letterSpacing: -0.3,
    },
    'label-sm-bold': {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '700',
        letterSpacing: -0.3,
    },
    'label-sm-regular': {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '400',
        letterSpacing: -0.3,
    },
} as const;
