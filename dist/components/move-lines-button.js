import { jsx as _jsx } from "react/jsx-runtime";
import { Move } from 'lucide-react';
import { useRef } from 'react';
import { Button, Icon } from '../ui';
const css = {
    wrapper: {
        position: 'absolute',
        left: '50%',
        top: '44%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'auto',
    },
    button: {
        borderRadius: 9999,
        backgroundColor: 'rgba(255,255,255,0.75)',
        backdropFilter: 'blur(2px)',
    },
};
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
    return (_jsx("div", { style: css.wrapper, children: _jsx(Button, { size: "icon-sm", "data-black": true, variant: "ghost", onMouseDown: onMouseDown, style: css.button, children: _jsx(Icon, { Icon: Move, size: "lg", strokeWidth: "thin" }) }) }));
}
