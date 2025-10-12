'use client';

import React from 'react';
import LiquidGlass from './LiquidGlass';
import clsx from 'clsx';

type Tone = 'neutral' | 'aqua' | 'blue' | 'purple';
type Elevation = 1 | 2 | 3;

type Size = 'sm' | 'md' | 'lg';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: Tone;
  elevation?: Elevation;
  size?: Size;
  fullWidth?: boolean;
};

export default function GlassButton(props: Props) {
  const {
    tone = 'aqua',
    elevation = 2,
    size = 'md',
    fullWidth = false,
    className,
    children,
    ...rest
  } = props;

  const sizeClasses =
    size === 'sm'
      ? 'px-4 py-2 text-sm rounded-xl'
      : size === 'lg'
      ? 'px-8 py-4 text-lg rounded-2xl'
      : 'px-6 py-3 text-base rounded-xl';

  return (
    <button
      className={clsx(
        'aqua-glass inline-flex items-center justify-center font-semibold tracking-tight shadow-lg select-none',
        'transition-transform duration-200 will-change-transform',
        sizeClasses,
        fullWidth && 'w-full',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

