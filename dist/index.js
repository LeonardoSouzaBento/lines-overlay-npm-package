"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  RowGrid: () => RowGrid
});
module.exports = __toCommonJS(index_exports);

// src/lines-overlay.tsx
var import_lucide_react3 = require("lucide-react");
var import_react2 = require("react");

// src/components/move-lines-button.tsx
var import_lucide_react = require("lucide-react");
var import_react = require("react");

// src/ui/button.tsx
var React = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
var styles = {
  base: {
    width: "auto",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 6,
    position: "relative",
    outline: "none",
    userSelect: "none"
  },
  variants: {
    default: {
      backgroundColor: "#0ea5e9",
      color: "#ffffff"
    },
    ghost: {
      backgroundColor: "transparent",
      color: "#111827",
      border: "1px solid #e5e7eb"
    },
    transparent: {
      backgroundColor: "transparent",
      color: "#0ea5e9"
    }
  },
  sizes: {
    default: {
      minHeight: 40,
      paddingInline: 12,
      paddingBlock: 12 * 0.73438 / 0.93
    },
    sm: {
      minHeight: 36,
      paddingInline: 12,
      paddingBlock: 10
    },
    "icon-sm": {
      width: 32,
      height: 32,
      padding: 0
    }
  },
  selected: {
    border: "2px solid #60a5fa",
    color: "#0ea5e9",
    backgroundColor: "rgba(59,130,246,0.08)"
  },
  closeButton: {
    color: "#0f172a"
  }
};
function resolveButtonStyles({
  variant,
  size,
  selected,
  disabled,
  closeButton,
  style
}) {
  return {
    ...styles.base,
    ...styles.variants[variant],
    ...styles.sizes[size],
    ...disabled && { opacity: 0.6, cursor: "not-allowed" },
    ...selected && styles.selected,
    ...closeButton && styles.closeButton,
    ...style
  };
}
var Slot = React.forwardRef(
  ({ children, className, style, ...slotProps }, ref) => {
    if (!children || !React.isValidElement(children)) {
      return null;
    }
    const child = children;
    const mergedClassName = [className, child.props.className].filter(Boolean).join(" ");
    const mergedStyle = { ...style, ...child.props.style };
    return React.cloneElement(child, {
      ...slotProps,
      ...child.props,
      className: mergedClassName || void 0,
      style: mergedStyle,
      ref
    });
  }
);
var Button = React.forwardRef(
  ({
    className,
    variant = "default",
    size = "default",
    asChild = false,
    selected = false,
    disabled = false,
    closeButton = false,
    style,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Comp,
      {
        ref,
        className,
        disabled,
        style: resolveButtonStyles({
          variant,
          size,
          selected,
          disabled,
          closeButton,
          style
        }),
        ...props
      }
    );
  }
);

// src/ui/lucide-icon.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var weights = {
  thin: 2.25,
  light: 2.35,
  normal: 2.65,
  semibold: 2.75,
  bold: 2.85,
  extrabold: 3
};
var iconSizes = {
  xs: "0.937em",
  sm: "0.968em",
  base: "1em",
  md: "1.033em",
  lg: "1.067em",
  xl: "1.138em",
  "2xl": "1.215em",
  "3xl": "1.296em",
  h6: "1.067em",
  h5: "1.138em",
  h4: "1.215em",
  h3: "1.296em",
  h2: "1.383em",
  h1: "1.4757em"
};
var css = {
  wrapper: {
    height: "0.75rem",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible"
  }
};
var Icon = ({ Icon: Icon2, size, className, strokeWidth, fill }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { "data-icon": true, style: css.wrapper, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    Icon2,
    {
      size: iconSizes[size] || size || "1.067em",
      strokeWidth: weights[strokeWidth] || strokeWidth || 2.6,
      className,
      fill: fill || "none"
    }
  ) });
};

// src/ui/separator.tsx
var React2 = __toESM(require("react"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var css2 = {
  base: {
    flexShrink: 0,
    backgroundColor: "#e5e7eb"
  },
  horizontal: {
    height: 1,
    width: "100%"
  },
  vertical: {
    height: "100%",
    width: 1
  }
};
var Separator = React2.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, style, ...props }, ref) => {
    const dimensionStyle = orientation === "horizontal" ? css2.horizontal : css2.vertical;
    const ariaProps = decorative ? { role: "none" } : {
      role: "separator",
      "aria-orientation": orientation
    };
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "div",
      {
        ref,
        style: { ...css2.base, ...dimensionStyle, ...style },
        className,
        ...ariaProps,
        ...props
      }
    );
  }
);
Separator.displayName = "Separator";

// src/components/move-lines-button.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var css3 = {
  wrapper: {
    position: "absolute",
    left: "50%",
    top: "44%",
    transform: "translate(-50%, -50%)",
    pointerEvents: "auto"
  },
  button: {
    backgroundColor: "rgba(255,255,255,0.75)",
    backdropFilter: "blur(2px)"
  }
};
function MoveLinesButton({ targetRef }) {
  const dragging = (0, import_react.useRef)(false);
  const last = (0, import_react.useRef)({ x: 0, y: 0 });
  function onMouseDown(e) {
    dragging.current = true;
    last.current = { x: e.clientX, y: e.clientY };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  }
  function onMove(e) {
    if (!dragging.current || !targetRef.current) return;
    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;
    const el = targetRef.current;
    el.style.left = `${el.offsetLeft + dx}px`;
    el.style.top = `${el.offsetTop + dy}px`;
    last.current = { x: e.clientX, y: e.clientY };
  }
  function onUp() {
    dragging.current = false;
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onUp);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: css3.wrapper, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    Button,
    {
      size: "icon-sm",
      "data-black": true,
      variant: "ghost",
      onMouseDown,
      style: css3.button,
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, { Icon: import_lucide_react.Move, size: "lg", strokeWidth: "thin" })
    }
  ) });
}

// src/components/config-button.tsx
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var css4 = {
  container: {
    position: "fixed",
    bottom: 8,
    right: 8,
    zIndex: 9999,
    pointerEvents: "auto",
    height: 40,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(148,163,184,0.8)",
    backgroundColor: "rgba(255,255,255,0.70)",
    boxShadow: "0 1px 3px rgba(15,23,42,0.2)",
    display: "flex",
    alignItems: "center",
    paddingLeft: 14,
    paddingRight: 4
  },
  label: {
    fontWeight: 500,
    fontSize: "0.8125rem",
    letterSpacing: "0.03em",
    paddingRight: 8
  },
  buttonsRow: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    gap: 4
  },
  closeIcon: {
    color: "#dc2626"
  }
};
function ConfigButton({
  onToggleConfig,
  open,
  setShow
}) {
  const handleClick = (e, item) => {
    if (item === 1) {
      onToggleConfig();
    } else {
      e.stopPropagation();
      setShow((v) => !v);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: css4.container, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { style: css4.label, children: "Configurar" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: css4.buttonsRow, children: [1, 2, 3].map(
      (item) => item !== 2 ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        Button,
        {
          variant: "transparent",
          size: "icon-sm",
          "data-black": true,
          onClick: (e) => {
            handleClick(e, item);
          },
          children: item === 1 ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Icon, { Icon: open ? import_lucide_react2.ChevronDown : import_lucide_react2.ChevronUp, size: "xl", strokeWidth: "light" }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Icon, { Icon: import_lucide_react2.X, size: "sm", strokeWidth: "light", className: void 0 })
        },
        item
      ) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Separator, { orientation: "vertical" })
    ) })
  ] });
}

// src/components/data.ts
var NUMBER_FIELDS = [
  {
    key: "lines",
    label: "Linhas",
    quick: [2, 4, 8, 12],
    step: 4
  },
  {
    key: "gap",
    label: "Gap",
    quick: [16, 24, 32, 40, 44],
    step: 4
  },
  {
    key: "opacity",
    label: "Opacidade",
    quick: [0.2, 0.3, 0.5, 0.7],
    step: 0.05
  }
];
var colorOptions = [
  { name: "Azul", value: "#2563eb" },
  { name: "Amarelo", value: "#eab308" },
  { name: "Verde", value: "#16a34a" },
  { name: "Roxo", value: "#7c3aed" },
  { name: "Violeta", value: "#9333ea" },
  { name: "Violeta", value: "#d71212" }
];

// src/components/config-options.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var css5 = {
  container: {
    position: "fixed",
    bottom: 52,
    right: 8,
    zIndex: 1e3,
    pointerEvents: "auto",
    fontSize: "0.875rem",
    backgroundColor: "rgba(255,255,255,0.94)",
    backdropFilter: "blur(4px)",
    boxShadow: "0 4px 6px rgba(15,23,42,0.12)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(148,163,184,0.5)",
    paddingInline: 12,
    paddingBlock: 8,
    width: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 8
  },
  fieldRow: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: "rgba(148,163,184,0.4)",
    paddingBottom: 12,
    display: "flex",
    flexDirection: "column",
    gap: 4
  },
  wrapper: {
    display: "flex",
    alignItems: "flex-end",
    gap: 8,
    borderRadius: 6
  },
  inputWrapper: {
    width: 104
  },
  label: {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 500,
    marginBottom: 4
  },
  numberInput: {
    width: "100%",
    height: 32,
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e5e7eb",
    paddingInline: 8,
    fontSize: "0.875rem"
  },
  quickRow: {
    display: "flex",
    gap: 5,
    marginTop: 4
  },
  quickButton: {
    fontWeight: 500,
    fontSize: "0.875rem"
  },
  colorSection: {
    marginTop: 8
  },
  colorLabel: {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 500,
    marginBottom: 4
  },
  colorRow: {
    display: "flex",
    gap: 8
  },
  colorDot: {
    display: "block",
    width: "80%",
    height: "80%"
  }
};
function ConfigOptions(props) {
  const fieldBindings = {
    lines: { value: props.lines, set: props.setLines },
    gap: { value: props.gap, set: props.setGap },
    opacity: { value: props.opacity, set: props.setOpacity }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: css5.container, children: [
    NUMBER_FIELDS.map((field) => {
      const binding = fieldBindings[field.key];
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: css5.fieldRow, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: css5.wrapper, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: css5.inputWrapper, children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("label", { style: css5.label, children: field.label }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "input",
            {
              style: css5.numberInput,
              type: "number",
              step: field.step,
              value: binding.value,
              onChange: (e) => binding.set(+e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: css5.quickRow, children: field.quick.map((v) => {
          return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            Button,
            {
              selected: binding.value === v,
              "data-option": true,
              variant: "ghost",
              size: "icon-sm",
              style: css5.quickButton,
              onClick: () => binding.set(v),
              children: v
            },
            v
          );
        }) })
      ] }) }, field.key);
    }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: css5.colorSection, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { style: css5.colorLabel, children: "Cor" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: css5.colorRow, children: colorOptions.map((c) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        Button,
        {
          variant: "ghost",
          size: "icon-sm",
          title: c.name,
          onClick: () => props.setColor(c.value),
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { style: { ...css5.colorDot, backgroundColor: c.value } })
        },
        c.value
      )) })
    ] })
  ] });
}

// src/lines-overlay.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var css6 = {
  overlay: {
    position: "absolute",
    top: 100,
    left: 0,
    width: "100%",
    pointerEvents: "none",
    display: "flex",
    justifyContent: "center",
    zIndex: 10
  },
  grid: {
    width: "100%"
  },
  triggerButton: {
    position: "absolute",
    bottom: 8,
    right: 8,
    zIndex: 20,
    fontSize: "1rem",
    backgroundColor: "rgba(255,255,255,0.70)"
  }
};
function RowGridCore({ show, setShow }) {
  const containerRef = (0, import_react2.useRef)(null);
  const [lines, setLines] = (0, import_react2.useState)(12);
  const [gap, setGap] = (0, import_react2.useState)(24);
  const [opacity, setOpacity] = (0, import_react2.useState)(0.3);
  const [color, setColor] = (0, import_react2.useState)("#d71212");
  const [showConfig, setShowConfig] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.key === ";") {
        setShow((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  if (!show) return null;
  const height = lines * gap;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { ref: containerRef, style: { ...css6.overlay, height }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "div",
        {
          style: {
            ...css6.grid,
            height,
            backgroundImage: `repeating-linear-gradient(
                to bottom,
                ${color},
                ${color} 1px,
                transparent 1px,
                transparent ${gap}px
              )`,
            opacity
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(MoveLinesButton, { targetRef: containerRef })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      ConfigButton,
      {
        setShow,
        onToggleConfig: () => setShowConfig((v) => !v),
        open: showConfig
      }
    ),
    showConfig && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      ConfigOptions,
      {
        lines,
        gap,
        opacity,
        color,
        setLines,
        setGap,
        setOpacity,
        setColor
      }
    )
  ] });
}
function RowGrid() {
  const [show, setShow] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "div",
    {
      style: {
        position: "fixed",
        zIndex: 9e3,
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100dvh"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(RowGridCore, { setShow, show }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          Button,
          {
            size: "sm",
            variant: "ghost",
            style: {
              ...css6.triggerButton,
              visibility: show ? "hidden" : "visible"
            },
            onClick: () => setShow((v) => !v),
            children: [
              "Mostrar linhas",
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Icon, { Icon: import_lucide_react3.Eye })
            ]
          }
        )
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RowGrid
});
//# sourceMappingURL=index.js.map