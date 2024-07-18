export type TypographyVariant =
    | 'headline-xl-regular'
    | 'headline-lg-medium'
    | 'headline-base-medium'
    | 'headline-sm-semibold'
    | 'headline-sm-medium'
    | 'title-lg-semibold'
    | 'title-lg-medium'
    | 'title-base-semibold'
    | 'title-base-medium'
    | 'title-sm-semibold'
    | 'title-sm-medium'
    | 'title-xs-semibold'
    | 'title-xs-medium'
    | 'label-lg-semibold'
    | 'label-lg-medium'
    | 'label-base-semibold'
    | 'label-base-medium'
    | 'label-sm-semibold'
    | 'label-sm-medium'
    | 'body-lg-regular'
    | 'body-base-regular'
    | 'body-sm-regular';

export type FontSize = number;
export type FontWeight = number | string;
export type LineHeight = number;

export const typography: Record<
    TypographyVariant,
    { fontSize: FontSize; lineHeight: LineHeight; fontWeight: FontWeight }
> = {
    'headline-xl-regular': {
        fontSize: 36,
        lineHeight: 45,
        fontWeight: '400',
    },
    'headline-lg-medium': {
        fontSize: 32,
        lineHeight: 40,
        fontWeight: '500',
    },
    'headline-base-medium': {
        fontSize: 28,
        lineHeight: 35,
        fontWeight: '500',
    },
    'headline-sm-semibold': {
        fontSize: 24,
        lineHeight: 30,
        fontWeight: '600',
    },
    'headline-sm-medium': {
        fontSize: 24,
        lineHeight: 30,
        fontWeight: '500',
    },
    'title-lg-semibold': {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: '600',
    },
    'title-lg-medium': {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: '500',
    },
    'title-base-semibold': {
        fontSize: 18,
        lineHeight: 23,
        fontWeight: '600',
    },
    'title-base-medium': {
        fontSize: 18,
        lineHeight: 23,
        fontWeight: '500',
    },
    'title-sm-semibold': {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '600',
    },
    'title-sm-medium': {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '500',
    },
    'title-xs-semibold': {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '600',
    },
    'title-xs-medium': {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '500',
    },
    'label-lg-semibold': {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '600',
    },
    'label-lg-medium': {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '500',
    },
    'label-base-semibold': {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '600',
    },
    'label-base-medium': {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '500',
    },
    'label-sm-semibold': {
        fontSize: 12,
        lineHeight: 15,
        fontWeight: '600',
    },
    'label-sm-medium': {
        fontSize: 12,
        lineHeight: 15,
        fontWeight: '500',
    },
    'body-lg-regular': {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: '400',
    },
    'body-base-regular': {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '400',
    },
    'body-sm-regular': {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '400',
    },
} as const;
