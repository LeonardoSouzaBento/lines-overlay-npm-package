import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
const css = {
    base: {
        flexShrink: 0,
        backgroundColor: '#e5e7eb',
    },
    horizontal: {
        height: 1,
        width: '100%',
    },
    vertical: {
        height: '100%',
        width: 1,
    },
};
const Separator = React.forwardRef(({ className, orientation = 'horizontal', decorative = true, style, ...props }, ref) => {
    const dimensionStyle = orientation === 'horizontal' ? css.horizontal : css.vertical;
    return (_jsx(SeparatorPrimitive.Root, { ref: ref, decorative: decorative, orientation: orientation, style: { ...css.base, ...dimensionStyle, ...style }, className: className, ...props }));
});
Separator.displayName = SeparatorPrimitive.Root.displayName;
export { Separator };
