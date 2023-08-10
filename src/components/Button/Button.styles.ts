import { cva } from 'class-variance-authority';

export const buttonDisabledStyles = cva(['opacity-50', 'cursor-not-allowed pointer-events-none']);

export const buttonStyles = cva(
  [
    'flex items-center justify-center box-border',
    'px-4 py-2 border rounded-md shadow-sm text-white',
    'bg-gray-600 hover:bg-gray-700 transition-all duration-150 ease-in-out',
    'max-w-full',
    'overflow-hidden select-none',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-primary-600 hover:bg-primary-700 active:bg-primary-800',
        secondary: 'bg-secondary-500 hover:bg-secondary-600 active:bg-secondary-800',
        tertiary: 'bg-tertiary-400 hover:bg-tertiary-600 active:bg-tertiary-800',
        success: 'bg-success-600 hover:bg-success-700 active:bg-success-800',
        info: 'bg-info-600 hover:bg-info-700 active:bg-info-800',
        warning: 'bg-warning-600 hover:bg-warning-700 active:bg-warning-800',
        danger: 'bg-danger-600 hover:bg-danger-700 active:bg-danger-800',
        neutral: 'bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-800',
      },
      fullWidth: {
        true: '!w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      fullWidth: false,
    },
  }
);
