import { Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  ConfigButton,
  ConfigOptions,
  MoveLinesButton,
} from "./components/index";
import { StateSetter } from "./types";
import { Button, Icon } from "./ui";

type Props = {
  setShow: StateSetter<boolean>;
  show: boolean;
};

const css = {
  overlay: {
    position: 'fixed' as const,
    top: 100,
    left: 0,
    width: '100%',
    pointerEvents: 'none' as const,
    display: 'flex',
    justifyContent: 'center',
    zIndex: 9998,
  },
  grid: {
    width: '100%',
  },
  triggerButton: {
    position: 'fixed' as const,
    bottom: 8,
    right: 8,
    zIndex: 9999,
    fontSize: '0.75rem',
    backgroundColor: 'rgba(255,255,255,0.66)',
  },
} as const;

function RowGridCore({ show, setShow }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [lines, setLines] = useState(12);
  const [gap, setGap] = useState(24);
  const [opacity, setOpacity] = useState(0.3);
  const [color, setColor] = useState("#d71212");
  const [showConfig, setShowConfig] = useState(false);

  // Toggle por tecla
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === ";") {
        setShow((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (!show) return null;

  const height = lines * gap;

  return (
    <div>
      <div
        ref={containerRef}
        style={{ ...css.overlay, height }}
      >
        {/* linhas */}
        <div
          style={{
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
          }}
        />
        {/* Move */}
        <MoveLinesButton targetRef={containerRef} />
      </div>
      {/* Config */}
      <ConfigButton
        setShow={setShow}
        onToggleConfig={() => setShowConfig((v) => !v)}
        open={showConfig}
      />
      {showConfig && (
        <ConfigOptions
          lines={lines}
          gap={gap}
          opacity={opacity}
          color={color}
          setLines={setLines}
          setGap={setGap}
          setOpacity={setOpacity}
          setColor={setColor}
        />
      )}
    </div>
  );
}

export function RowGrid() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        size="sm"
        variant="ghost"
        style={{ ...css.triggerButton, visibility: show ? 'hidden' : 'visible' }}
        onClick={() => setShow((v) => !v)}
      >
        Mostrar linhas
        <Icon Icon={Eye} />
      </Button>

      <RowGridCore setShow={setShow} show={show} />
    </>
  );
}
