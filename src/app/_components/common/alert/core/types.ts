import React from 'react';

export type ToastType = 'default' | 'success' | 'error' | 'loading';

export type ToasterPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export type ToastState = 'enter' | 'idle' | 'leave';

export interface ToasterProps {
  position?: ToasterPosition;
  duration?: number;
  reverse?: boolean;
  style?: React.CSSProperties;
  className?: string;
  theme?: 'light' | 'dark';
}

export interface ToastProps {
  toast: IToast;
}

export interface IToast {
  id: number;
  state: ToastState;
  type: ToastType;
  zIndex: number;
  title?: string;
  theme?: 'light' | 'dark';
}
