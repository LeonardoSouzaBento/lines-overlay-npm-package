import { Button } from '../ui';
import { ConfigOptionsProps, NUMBER_FIELDS, colorOptions } from './data';

const css = {
  container: {
    position: 'fixed',
    bottom: 52,
    right: 8,
    zIndex: 1000,
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
    borderRadius: 6,
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
} as const;

export function ConfigOptions(props: ConfigOptionsProps) {
  const fieldBindings = {
    lines: { value: props.lines, set: props.setLines },
    gap: { value: props.gap, set: props.setGap },
    opacity: { value: props.opacity, set: props.setOpacity },
  };

  return (
    <div style={css.container}>
      {NUMBER_FIELDS.map((field) => {
        const binding = fieldBindings[field.key];

        return (
          <div style={css.fieldRow} key={field.key}>
            <div style={css.wrapper}>
              <div style={css.inputWrapper}>
                <label style={css.label}>{field.label}</label>
                <input
                  style={css.numberInput}
                  type="number"
                  step={field.step}
                  value={binding.value}
                  onChange={(e) => binding.set(+e.target.value)}
                />
              </div>
              <div style={css.quickRow}>
                {field.quick.map((v) => {
                  return (
                    <Button
                      selected={binding.value === v}
                      key={v}
                      data-option
                      variant="ghost"
                      size="icon-sm"
                      style={css.quickButton}
                      onClick={() => binding.set(v)}>
                      {v}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}

      <div style={css.colorSection}>
        <span style={css.colorLabel}>Cor</span>
        <div style={css.colorRow}>
          {colorOptions.map((c) => (
            <Button
              key={c.value}
              variant="ghost"
              size="icon-sm"
              title={c.name}
              onClick={() => props.setColor(c.value)}>
              <span style={{ ...css.colorDot, backgroundColor: c.value }} />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
