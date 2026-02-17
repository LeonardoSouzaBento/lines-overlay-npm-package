import * as React from 'react';
type ButtonVariant = 'default' | 'ghost' | 'transparent';
type ButtonSize = 'default' | 'sm' | 'icon-sm';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    selected?: boolean;
    disabled?: boolean;
    closeButton?: boolean;
    variant?: ButtonVariant;
    size?: ButtonSize;
}
type ResolveButtonStyleParams = {
    variant: ButtonVariant;
    size: ButtonSize;
    selected?: boolean;
    disabled?: boolean;
    closeButton?: boolean;
    style?: React.CSSProperties;
};
export declare function resolveButtonStyles({ variant, size, selected, disabled, closeButton, style, }: ResolveButtonStyleParams): React.CSSProperties;
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
