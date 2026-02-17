import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
const styles = {
    base: {
        width: 'auto',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        borderRadius: 6,
        position: 'relative',
        outline: 'none',
        userSelect: 'none',
    },
    variants: {
        default: {
            backgroundColor: '#0ea5e9',
            color: '#ffffff',
        },
        ghost: {
            backgroundColor: 'transparent',
            color: '#111827',
            border: '1px solid #e5e7eb',
        },
        transparent: {
            backgroundColor: 'transparent',
            color: '#0ea5e9',
        },
    },
    sizes: {
        default: {
            minHeight: 40,
            paddingInline: 12,
            paddingBlock: 12 * 0.73438 / 0.93,
        },
        sm: {
            minHeight: 36,
            paddingInline: 12,
            paddingBlock: 10,
        },
        'icon-sm': {
            width: 32,
            height: 32,
            padding: 0,
        },
    },
    selected: {
        border: '2px solid #60a5fa',
        color: '#0ea5e9',
        backgroundColor: 'rgba(59,130,246,0.08)',
    },
    closeButton: {
        borderRadius: 9999,
        color: '#0f172a',
    },
};
export function resolveButtonStyles({ variant, size, selected, disabled, closeButton, style, }) {
    return {
        ...styles.base,
        ...styles.variants[variant],
        ...styles.sizes[size],
        ...(disabled && { opacity: 0.6, cursor: 'not-allowed' }),
        ...(selected && styles.selected),
        ...(closeButton && styles.closeButton),
        ...style,
    };
}
export const Button = React.forwardRef(({ className, variant = 'default', size = 'default', asChild = false, selected = false, disabled = false, closeButton = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (_jsx(Comp, { ref: ref, className: className, disabled: disabled, style: resolveButtonStyles({
            variant,
            size,
            selected,
            disabled,
            closeButton,
            style,
        }), ...props }));
});
