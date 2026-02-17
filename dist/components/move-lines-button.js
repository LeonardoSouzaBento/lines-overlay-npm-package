import { jsx as _jsx } from "react/jsx-runtime";
import { Move } from 'lucide-react';
import { useRef } from 'react';
import { Button, Icon } from '../ui';
export function MoveLinesButton({ targetRef }) {
    const dragging = useRef(false);
    const last = useRef({ x: 0, y: 0 });
    function onMouseDown(e) {
        dragging.current = true;
        last.current = { x: e.clientX, y: e.clientY };
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
    }
    function onMove(e) {
        if (!dragging.current || !targetRef.current)
            return;
        const dx = e.clientX - last.current.x;
        const dy = e.clientY - last.current.y;
        const el = targetRef.current;
        el.style.left = `${el.offsetLeft + dx}px`;
        el.style.top = `${el.offsetTop + dy}px`;
        last.current = { x: e.clientX, y: e.clientY };
    }
    function onUp() {
        dragging.current = false;
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
    }
    return (_jsx("div", { className: "pointer-events-auto absolute left-1/2 top-[44%]\r\n        -translate-x-1/2 -translate-y-1/2", children: _jsx(Button, { size: "icon-sm", "data-black": true, variant: "ghost", onMouseDown: onMouseDown, className: "rounded-full bg-white/75 backdrop-blur-xs", children: _jsx(Icon, { Icon: Move, size: "lg", strokeWidth: "thin" }) }) }));
}
