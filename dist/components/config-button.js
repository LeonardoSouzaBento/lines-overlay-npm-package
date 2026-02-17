import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { Button, Icon, Separator } from '../ui/index';
const css = {
    container: {
        position: 'fixed',
        bottom: 8,
        right: 8,
        zIndex: 9999,
        pointerEvents: 'auto',
        height: 40,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(148,163,184,0.8)',
        backgroundColor: 'rgba(255,255,255,0.70)',
        boxShadow: '0 1px 3px rgba(15,23,42,0.2)',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 14,
        paddingRight: 4,
    },
    label: {
        fontWeight: 500,
        fontSize: '0.8125rem',
        letterSpacing: '0.03em',
        paddingRight: 8,
    },
    buttonsRow: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 4,
    },
    closeIcon: {
        color: '#dc2626',
    },
};
export function ConfigButton({ onToggleConfig, open, setShow, }) {
    const handleClick = (e, item) => {
        if (item === 1) {
            onToggleConfig();
        }
        else {
            e.stopPropagation();
            setShow((v) => !v);
        }
    };
    return (_jsxs("div", { style: css.container, children: [_jsx("span", { style: css.label, children: "Configurar" }), _jsx("div", { style: css.buttonsRow, children: [1, 2, 3].map((item) => item !== 2 ? (_jsx(Button, { variant: 'transparent', size: "icon-sm", "data-black": true, onClick: (e) => {
                        handleClick(e, item);
                    }, children: item === 1 ? (_jsx(Icon, { Icon: open ? ChevronDown : ChevronUp, size: 'xl', strokeWidth: "light" })) : (_jsx(Icon, { Icon: X, size: "sm", strokeWidth: "light", className: undefined })) }, item)) : (_jsx(Separator, { orientation: "vertical" }))) })] }));
}
