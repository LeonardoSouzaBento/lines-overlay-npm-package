import { jsx as _jsx } from "react/jsx-runtime";
/* Ajuste depois */
const weights = {
    thin: 2.25,
    light: 2.35,
    normal: 2.65, // valor padrão
    semibold: 2.75,
    bold: 2.85,
    extrabold: 3,
};
const iconSizes = {
    xs: '0.937em',
    sm: '0.968em',
    base: '1em',
    md: '1.033em',
    lg: '1.067em',
    xl: '1.138em',
    '2xl': '1.215em',
    '3xl': '1.296em',
    h6: '1.067em',
    h5: '1.138em',
    h4: '1.215em',
    h3: '1.296em',
    h2: '1.383em',
    h1: '1.4757em',
};
export const Icon = ({ Icon, size, className, strokeWidth, fill }) => {
    return (_jsx("div", { "data-icon": true, className: "h-3 inline-flex justify-center items-center overflow-visible [&_svg]:shrink-0", children: _jsx(Icon, { size: iconSizes[size] || size || '1.067em', strokeWidth: weights[strokeWidth] || strokeWidth || 2.6, className: className, fill: fill || 'none' }) }));
};
