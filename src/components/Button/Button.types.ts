import { ButtonHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import { buttonStyles } from './Button.styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    label?: React.ReactNode;
  };

// export type RecursivePartial<T> = {
//   [P in keyof T]?: RecursivePartial<T[P]>;
// };

// export type NoNullField<T> = { [P in keyof T]-?: NoNullField<Exclude<T[P], null>> };
