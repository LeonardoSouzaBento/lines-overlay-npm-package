import { jsx as _jsx } from "react/jsx-runtime";
export const ButtonsWrapper = ({ children, className = '', gap = 3, }) => {
    const css = {
        container: {
            height: 'auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: `${gap * 0.25}rem`,
        },
    };
    return (_jsx("div", { style: css.container, className: className, children: children }));
};
