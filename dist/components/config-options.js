import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '../ui';
import { NUMBER_FIELDS, colorOptions } from './data';
const css = {
    container: {
        position: 'fixed',
        bottom: 52,
        right: 8,
        pointerEvents: 'auto',
        fontSize: '0.875rem',
        backgroundColor: 'rgba(255,255,255,0.94)',
        backdropFilter: 'blur(4px)',
        boxShadow: '0 4px 6px rgba(15,23,42,0.12)',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(148,163,184,0.5)',
        paddingInline: 12,
        paddingBlock: 8,
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
    fieldRow: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: 'rgba(148,163,184,0.4)',
        paddingBottom: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
    },
    wrapper: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: 8,
    },
    inputWrapper: {
        width: 104,
    },
    label: {
        display: 'block',
        fontSize: '0.75rem',
        fontWeight: 500,
        marginBottom: 4,
    },
    numberInput: {
        width: '100%',
        height: 32,
        borderRadius: 6,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#e5e7eb',
        paddingInline: 8,
        fontSize: '0.875rem',
    },
    quickRow: {
        display: 'flex',
        gap: 5,
        marginTop: 4,
    },
    quickButton: {
        fontWeight: 500,
        fontSize: '0.875rem',
    },
    colorSection: {
        marginTop: 8,
    },
    colorLabel: {
        display: 'block',
        fontSize: '0.75rem',
        fontWeight: 500,
        marginBottom: 4,
    },
    colorRow: {
        display: 'flex',
        gap: 8,
    },
    colorDot: {
        display: 'block',
        width: '80%',
        height: '80%',
        borderRadius: 9999,
    },
};
export function ConfigOptions(props) {
    const fieldBindings = {
        lines: { value: props.lines, set: props.setLines },
        gap: { value: props.gap, set: props.setGap },
        opacity: { value: props.opacity, set: props.setOpacity },
    };
    return (_jsxs("div", { style: css.container, children: [NUMBER_FIELDS.map((field) => {
                const binding = fieldBindings[field.key];
                return (_jsx("div", { style: css.fieldRow, children: _jsxs("div", { style: css.wrapper, children: [_jsxs("div", { style: css.inputWrapper, children: [_jsx("label", { style: css.label, children: field.label }), _jsx("input", { style: css.numberInput, type: "number", step: field.step, value: binding.value, onChange: (e) => binding.set(+e.target.value) })] }), _jsx("div", { style: css.quickRow, children: field.quick.map((v) => {
                                    return (_jsx(Button, { selected: binding.value === v, "data-option": true, variant: "ghost", size: "icon-sm", style: css.quickButton, onClick: () => binding.set(v), children: v }, v));
                                }) })] }) }, field.key));
            }), _jsxs("div", { style: css.colorSection, children: [_jsx("span", { style: css.colorLabel, children: "Cor" }), _jsx("div", { style: css.colorRow, children: colorOptions.map((c) => (_jsx(Button, { variant: "ghost", size: "icon-sm", title: c.name, onClick: () => props.setColor(c.value), children: _jsx("span", { style: { ...css.colorDot, backgroundColor: c.value } }) }, c.value))) })] })] }));
}
