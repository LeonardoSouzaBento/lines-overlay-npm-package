import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ConfigButton, ConfigOptions, MoveLinesButton, } from "./components/index";
import { Button, Icon } from "./ui";
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
    return (_jsxs("div", { children: [_jsxs("div", { ref: containerRef, className: "fixed w-full pointer-events-none flex justify-center", style: {
                    top: 100,
                    left: 0,
                    height,
                }, children: [_jsx("div", { className: "w-full", style: {
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
    return (_jsxs("div", { className: "fixed z-7000 bottom-0 left-0 min-h-screen w-full", children: [_jsxs(Button, { size: "sm", variant: "ghost", style: { visibility: show ? "hidden" : "visible" }, onClick: () => setShow((v) => !v), className: "fixed bottom-2 right-2 z-50 text-xs bg-white/66 ", children: ["Mostrar linhas", _jsx(Icon, { Icon: Eye })] }), _jsx(RowGridCore, { setShow: setShow, show: show })] }));
}
