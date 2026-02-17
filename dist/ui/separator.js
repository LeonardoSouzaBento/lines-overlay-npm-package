import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
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
    const ariaProps = decorative
        ? { role: 'none' }
        : {
            role: 'separator',
            'aria-orientation': orientation,
        };
    return (_jsx("div", { ref: ref, style: { ...css.base, ...dimensionStyle, ...style }, className: className, ...ariaProps, ...props }));
});
Separator.displayName = 'Separator';
export { Separator };
