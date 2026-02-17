import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ConfigButton, ConfigOptions, MoveLinesButton, } from "./components/index";
import { Button, Icon } from "./ui";
const css = {
    overlay: {
        position: 'fixed',
        top: 100,
        left: 0,
        width: '100%',
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 9998,
    },
    grid: {
        width: '100%',
    },
    triggerButton: {
        position: 'fixed',
        bottom: 8,
        right: 8,
        zIndex: 9999,
        fontSize: '0.75rem',
        backgroundColor: 'rgba(255,255,255,0.66)',
    },
};
function RowGridCore({ show, setShow }) {
    const containerRef = useRef(null);
    const [lines, setLines] = useState(12);
    const [gap, setGap] = useState(24);
    const [opacity, setOpacity] = useState(0.3);
    const [color, setColor] = useState("#d71212");
    const [showConfig, setShowConfig] = useState(false);
    // Toggle por tecla
    useEffect(() => {
        const handler = (e) => {
            if (e.ctrlKey && e.key === ";") {
                setShow((v) => !v);
            }
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);
    if (!show)
        return null;
    const height = lines * gap;
    return (_jsxs("div", { children: [_jsxs("div", { ref: containerRef, style: { ...css.overlay, height }, children: [_jsx("div", { style: {
                            ...css.grid,
                            height,
                            backgroundImage: `repeating-linear-gradient(
                to bottom,
                ${color},
                ${color} 1px,
                transparent 1px,
                transparent ${gap}px
              )`,
                            opacity,
                        } }), _jsx(MoveLinesButton, { targetRef: containerRef })] }), _jsx(ConfigButton, { setShow: setShow, onToggleConfig: () => setShowConfig((v) => !v), open: showConfig }), showConfig && (_jsx(ConfigOptions, { lines: lines, gap: gap, opacity: opacity, color: color, setLines: setLines, setGap: setGap, setOpacity: setOpacity, setColor: setColor }))] }));
}
export function RowGrid() {
    const [show, setShow] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsxs(Button, { size: "sm", variant: "ghost", style: { ...css.triggerButton, visibility: show ? 'hidden' : 'visible' }, onClick: () => setShow((v) => !v), children: ["Mostrar linhas", _jsx(Icon, { Icon: Eye })] }), _jsx(RowGridCore, { setShow: setShow, show: show })] }));
}
