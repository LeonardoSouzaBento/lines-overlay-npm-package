import React, { ReactNode } from 'react';

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ');

interface ButtonsWrapperProps {
  children: ReactNode;
  className?: string;
  gap?: number;
}

export const ButtonsWrapper: React.FC<ButtonsWrapperProps> = ({
  children,
  className = '',
  gap = 3,
}) => {
  return (
    <div
      style={{ '--custom-gap': `${gap * 0.25}rem` } as React.CSSProperties}
      className={cn(`h-auto flex flex-wrap items-center gap-(--custom-gap)`, className)}>
      {children}
    </div>
  );
};
