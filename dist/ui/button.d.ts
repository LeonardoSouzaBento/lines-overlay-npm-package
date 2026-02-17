import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
export type ButtonVariants = VariantProps<typeof buttonVariants>;
declare const buttonVariants: (props?: ({
    variant?: "default" | "outline" | "ghost" | "transparent" | "link" | "secondary" | "destructive" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon-sm" | "icon" | "icon-md" | "icon-lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    selected?: boolean;
    disabled?: boolean;
    closeButton?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button };
