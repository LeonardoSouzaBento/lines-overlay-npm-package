import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { Button, Icon, Separator } from '../ui/index';
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
    return (_jsxs("div", { className: "h-10 border pointer-events-auto fixed bottom-2 right-2 bg-white/66 \r\n    shadow-sm flex items-center pl-[0.9em] pr-1", children: [_jsx("span", { className: "font-medium text-sm-button tracking-wide pr-2", children: "Configurar" }), _jsx("div", { className: "h-full flex items-center gap-1", children: [1, 2, 3].map((item) => item !== 2 ? (_jsx(Button, { variant: 'transparent', size: "icon-sm", "data-black": true, onClick: (e) => {
                        handleClick(e, item);
                    }, children: item === 1 ? (_jsx(Icon, { Icon: open ? ChevronDown : ChevronUp, size: 'xl', strokeWidth: "light" })) : (_jsx(Icon, { Icon: X, size: "sm", className: "text-red-600", strokeWidth: "light" })) }, item)) : (_jsx(Separator, { orientation: "vertical" }))) })] }));
}
