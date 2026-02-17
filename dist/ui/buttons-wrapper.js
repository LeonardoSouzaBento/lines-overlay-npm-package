import { jsx as _jsx } from "react/jsx-runtime";
const cn = (...classes) => classes.filter(Boolean).join(' ');
export const ButtonsWrapper = ({ children, className = '', gap = 3, }) => {
    return (_jsx("div", { style: { '--custom-gap': `${gap * 0.25}rem` }, className: cn(`h-auto flex flex-wrap items-center gap-(--custom-gap)`, className), children: children }));
};
