import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
const cn = (...classes) => classes.filter(Boolean).join(' ');
const Separator = React.forwardRef(({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (_jsx(SeparatorPrimitive.Root, { ref: ref, decorative: decorative, orientation: orientation, className: cn('shrink-0 bg-border', orientation === 'horizontal' ? 'h-px w-full scale-y-99' : 'h-full w-px scale-x-99', className), ...props })));
Separator.displayName = SeparatorPrimitive.Root.displayName;
export { Separator };
