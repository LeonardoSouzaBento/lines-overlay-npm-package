import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
const cn = (...classes) => classes.filter(Boolean).join(' ');
const buttonVariants = cva('w-auto tracking-wide inline-flex items-center justify-center gap-2 rounded-xs ring-offset-background transition-colors disabled:pointer-events-none disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 relative data-w-full:w-full data-round:rounded-full focus:outline-none data-option:rounded-full data-black:text-foreground', {
    variants: {
        variant: {
            default: 'bg-primary hover:bg-primary/90 text-primary-foreground disabled:bg-neutral-300 disabled:text-neutral-500/80 data-active:bg-primary-800 data-hover:bg-primary-600 data-focus:border-3 data-focus:border-selected/75',
            outline: 'border-2 border-primary/88 text-primary bg-transparent hover:bg-gray-50 shadow-xs/12 disabled:bg-neutral-100 disabled:border-neutral-300 disabled:text-neutral-500/75 data-hover:bg-primary-50 data-focus:outline-selected/70 data-focus:outline-2 data-active:bg-primary-100',
            ghost: 'hover:bg-primary-50 border text-primary bg-transparent disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-none data-hover:bg-primary-50 data-focus:outline-selected/70 data-focus:outline-3 data-focus:border-primary-400 data-active:bg-primary-100',
            transparent: 'bg-transparent text-primary hover:bg-primary-50',
            link: 'text-primary underline-offset-4 hover:underline',
            secondary: 'bg-primary-50 text-primary hover:bg-primary-100 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-none data-hover:bg-primary-50/75 data-focus:outline-3 data-focus:outline-selected/75 data-active:bg-primary-100',
            destructive: 'bg-red-700 text-red-50 hover:bg-red-600 data-hover:bg-red-600 data-focus:outline-3 data-focus:outline-red-200 data-active:bg-red-800',
        },
        size: {
            sm: 'min-h-9 small-button',
            default: `min-h-10`,
            lg: 'min-h-11 large-text large-button',
            'icon-sm': 'size-8',
            icon: 'size-8.5',
            'icon-md': 'size-9.5',
            'icon-lg': 'size-10',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});
const paddings = {
    default: {
        sm: 'px-[0.93em] py-[0.63885rem]',
        default: 'px-[0.93em] py-[0.73438rem]',
        lg: 'px-[0.93em] py-[0.82813rem]',
    },
    outline: {
        sm: 'px-[0.82716em] py-[0.54794rem]',
        default: 'px-[0.83304em] py-[0.64347rem]',
        lg: 'px-[0.83857em] py-[0.73722rem]',
    },
    ghost: {
        sm: 'px-[0.82841em] py-[0.6076rem]',
        default: 'px-[0.83429em] py-[0.70313rem]',
        lg: 'px-[0.83982em] py-[0.79688rem]',
    },
};
const paddingExptions = {
    variants: ['link', 'transparent'],
    sizes: ['icon', 'icon-sm', 'icon-md', 'icon-lg'],
};
const getPaddings = (variant, size) => {
    let padding = '';
    if (!paddingExptions.sizes.includes(size) && !paddingExptions.variants.includes(variant)) {
        if (variant === 'destructive' || variant === 'secondary') {
            padding = paddings.default[size];
        }
        else {
            padding = paddings[variant][size];
        }
    }
    return padding;
};
const Button = React.forwardRef(({ className, variant = 'default', size = "default", asChild = false, selected, disabled, closeButton = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const padding = getPaddings(variant, size);
    const selectedCSS = selected
        ? 'border-2 border-selected text-primary bg-primary-50/25 hover:bg-card'
        : '';
    const closeButtonCSS = closeButton ? 'rounded-full text-foreground' : '';
    return (_jsx(Comp, { className: cn(buttonVariants({ variant, size }), selectedCSS, closeButtonCSS, padding, className), ref: ref, disabled: disabled, ...props }));
});
Button.displayName = 'Button';
export { Button };
