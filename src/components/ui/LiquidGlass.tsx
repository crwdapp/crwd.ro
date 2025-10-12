'use client';

import React from 'react';
import clsx from 'clsx';

type Tone = 'neutral' | 'aqua' | 'blue' | 'purple';
type Elevation = 1 | 2 | 3;
type Border = 'soft' | 'glow' | 'none';

type Props<T extends React.ElementType = 'div'> = {
  as?: T;
  tone?: Tone;
  elevation?: Elevation;
  interactive?: boolean;
  border?: Border;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

export default function LiquidGlass<T extends React.ElementType = 'div'>(props: Props<T>) {
  const {
    as,
    tone = 'aqua',
    elevation = 2,
    interactive = false,
    border = 'soft',
    className,
    children,
    ...rest
  } = props;

  const Component = (as || 'div') as React.ElementType;

  const classes = clsx(
    'liquid-glass',
    `tone-${tone}`,
    `lgv-${elevation}`,
    interactive && 'liquid-interactive',
    border === 'glow' && 'liquid-border-glow',
    border === 'none' && 'liquid-border-none',
    className,
  );

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}

