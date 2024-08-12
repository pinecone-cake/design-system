import { PropsWithChildren } from 'react';
import { TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { ColorKeys, BorderWidth, Radius, Spacing } from '@pinecone-cake/design-tokens';
import { Margin, Padding } from './Box.types';
import { getBoxStyle } from './Box.styles';

export interface BoxProps
    extends Padding,
        Margin,
        Omit<TouchableOpacityProps, 'disabled' | 'onPress'> {
    gap?: Spacing;
    flex?: ViewStyle['flex'];
    flexDirection?: ViewStyle['flexDirection'];
    justifyContent?: ViewStyle['justifyContent'];
    alignItems?: ViewStyle['alignItems'];
    alignSelf?: ViewStyle['alignSelf'];
    backgroundColor?: ColorKeys;
    borderColor?: ColorKeys;
    borderRadius?: Radius;
    borderWidth?: BorderWidth;
    borderBottomWidth?: BorderWidth;
    borderLeftWidth?: BorderWidth;
    borderTopWidth?: BorderWidth;
    borderRightWidth?: BorderWidth;
    width?: Spacing;
    height?: Spacing;
    aspectRatio?: ViewStyle['aspectRatio'];
    pressable?: boolean;
    onPress?: () => void;
    visible?: boolean;
}

export function Box({
    gap,
    margin,
    marginHorizontal,
    marginVertical,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    padding,
    paddingHorizontal,
    paddingVertical,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    backgroundColor,
    borderColor,
    borderRadius,
    borderWidth,
    borderTopWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderRightWidth,
    width,
    height,
    aspectRatio,
    style,
    children,
    pressable = false,
    activeOpacity = 0.7,
    visible = true,
    ...props
}: PropsWithChildren<BoxProps>) {
    return (
        <TouchableOpacity
            style={[
                getBoxStyle({
                    gap,
                    margin,
                    marginVertical,
                    marginHorizontal,
                    marginTop,
                    marginBottom,
                    marginLeft,
                    marginRight,
                    padding,
                    paddingHorizontal,
                    paddingVertical,
                    paddingTop,
                    paddingBottom,
                    paddingLeft,
                    paddingRight,
                    backgroundColor,
                    borderColor,
                    borderWidth,
                    borderTopWidth,
                    borderBottomWidth,
                    borderLeftWidth,
                    borderRightWidth,
                    borderRadius,
                    visible,
                    width,
                    height,
                    aspectRatio,
                    ...props,
                }),
                style,
            ]}
            disabled={!pressable}
            activeOpacity={activeOpacity}
            {...props}
        >
            {children}
        </TouchableOpacity>
    );
}

export default Box;
