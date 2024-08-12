import { foundation } from '@pinecone-cake/design-tokens';
import { StyleProp, ViewStyle } from 'react-native';
import { BoxProps } from './Box';

export function getBoxStyle(params: Omit<BoxProps, 'style'>): StyleProp<ViewStyle> {
    return {
        display: params.visible ? 'flex' : 'none',
        flex: params.flex || undefined,
        flexDirection: params.flexDirection || 'column',
        justifyContent: params.justifyContent || 'flex-start',
        alignItems: params.alignItems || 'stretch',
        alignSelf: params.alignSelf || 'auto',
        gap: foundation.spacing[params.gap || 'space-0'],
        padding: foundation.spacing[params.padding || 'space-0'],
        paddingHorizontal: params.paddingHorizontal
            ? foundation.spacing[params.paddingHorizontal]
            : undefined,
        paddingVertical: params.paddingVertical
            ? foundation.spacing[params.paddingVertical]
            : undefined,
        paddingLeft: params.paddingLeft ? foundation.spacing[params.paddingLeft] : undefined,
        paddingRight: params.paddingRight ? foundation.spacing[params.paddingRight] : undefined,
        paddingTop: params.paddingTop
            ? foundation.spacing[params.paddingTop || 'space-0']
            : undefined,
        paddingBottom: params.paddingBottom
            ? foundation.spacing[params.paddingBottom || 'space-0']
            : undefined,
        margin: foundation.spacing[params.margin || 'space-0'],
        marginHorizontal: params.marginHorizontal
            ? foundation.spacing[params.marginHorizontal]
            : undefined,
        marginVertical: params.marginVertical
            ? foundation.spacing[params.marginVertical]
            : undefined,
        marginLeft: params.marginLeft ? foundation.spacing[params.marginLeft] : undefined,
        marginRight: params.marginRight ? foundation.spacing[params.marginRight] : undefined,
        marginTop: params.marginTop ? foundation.spacing[params.marginTop] : undefined,
        marginBottom: params.marginBottom ? foundation.spacing[params.marginBottom] : undefined,
        borderWidth: foundation.borderWidth[params.borderWidth || 'border-0'],
        borderTopWidth: params.borderTopWidth
            ? foundation.borderWidth[params.borderTopWidth]
            : undefined,
        borderBottomWidth: params.borderBottomWidth
            ? foundation.borderWidth[params.borderBottomWidth]
            : undefined,
        borderLeftWidth: params.borderLeftWidth
            ? foundation.borderWidth[params.borderLeftWidth]
            : undefined,
        borderRightWidth: params.borderRightWidth
            ? foundation.borderWidth[params.borderRightWidth]
            : undefined,
        borderRadius: params.borderRadius ? foundation.radius[params.borderRadius] : undefined,
        backgroundColor: params.backgroundColor
            ? foundation.colors.light[params.backgroundColor]
            : undefined,
        borderColor: params.borderColor ? foundation.colors.light[params.borderColor] : undefined,
        width: params.width ? foundation.spacing[params.width] : undefined,
        height: params.height ? foundation.spacing[params.height] : undefined,
        aspectRatio: params.aspectRatio,
    };
}
