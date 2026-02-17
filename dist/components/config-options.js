import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '../ui';
import { NUMBER_FIELDS, colorOptions } from './data';
const css = {
    container: `text-sm pointer-events-auto fixed bottom-13 right-2 
      bg-white/94 backdrop-blur-sm shadow-md border border-border/50 p-3 pt-2 w-auto flex flex-col gap-2
      [&>div]:flex [&>div]:gap-2`,
    wrapper: `flex items-end gap-2`,
    inputWrapper: `[&>input]:h-8 w-26`,
};
export function ConfigOptions(props) {
    const fieldBindings = {
        lines: { value: props.lines, set: props.setLines },
        gap: { value: props.gap, set: props.setGap },
        opacity: { value: props.opacity, set: props.setOpacity },
    };
    return (_jsxs("div", { className: css.container, children: [NUMBER_FIELDS.map((field) => {
                const binding = fieldBindings[field.key];
                return (_jsx("div", { className: "w-full border-b border-border/66 pb-3", children: _jsxs("div", { className: css.wrapper, children: [_jsxs("div", { className: css.inputWrapper, children: [_jsx("label", { className: "block text-xs font-medium mb-1", children: field.label }), _jsx("input", { className: "w-full h-8 rounded border border-border px-2 text-sm", type: "number", step: field.step, value: binding.value, onChange: (e) => binding.set(+e.target.value) })] }), _jsx("div", { className: "flex gap-1.25 mt-1", children: field.quick.map((v) => {
                                    return (_jsx(Button, { selected: binding.value === v, "data-option": true, variant: "ghost", size: "icon-sm", className: "text-sm-button font-medium", onClick: () => binding.set(v), children: v }, v));
                                }) })] }) }, field.key));
            }), _jsxs("div", { className: "mt-2", children: [_jsx("span", { className: "block text-xs font-medium mb-1", children: "Cor" }), _jsx("div", { className: "flex gap-2", children: colorOptions.map((c) => (_jsx(Button, { variant: "ghost", size: "icon-sm", title: c.name, className: "rounded-full", onClick: () => props.setColor(c.value), children: _jsx("span", { className: "block size-4/5 rounded-full", style: { backgroundColor: c.value } }) }, c.value))) })] })] }));
}
