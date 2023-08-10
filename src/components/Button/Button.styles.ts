import { cva } from 'class-variance-authority';

export const buttonDisabledStyles = cva(['opacity-50', 'pointer-events-none cursor-not-allowed']);

export const buttonStyles = cva(
  [
    'flex items-center justify-center',
    'px-4 py-2 shadow-sm',
    'rounded-md border-[1px]',
    'bg-gray-400 hover:bg-gray-500 active:bg-gray-600',
    'max-w-full',
    'select-none overflow-hidden',
    'transition-all duration-150 ease-in-out',
  ],
  {
    variants: {
      variant: {
        primary: [
          'border-primary-600 bg-primary-600 text-primary-600',
          'hover:border-primary-700 hover:bg-primary-700 hover:text-primary-700',
          'active:border-primary-800 active:bg-primary-800 active:text-primary-800',
        ],
        secondary: [
          'border-secondary-500 bg-secondary-500 text-secondary-500',
          'hover:border-secondary-600 hover:bg-secondary-600 hover:text-secondary-600',
          'active:border-secondary-800 active:bg-secondary-800 active:text-secondary-800',
        ],
        tertiary: [
          'border-tertiary-400 bg-tertiary-400 text-tertiary-400',
          'hover:border-tertiary-600 hover:bg-tertiary-600 hover:text-tertiary-600',
          'active:border-tertiary-800 active:bg-tertiary-800 active:text-tertiary-800',
        ],
        success: [
          'border-success-500 bg-success-500 text-success-500',
          'hover:border-success-600 hover:bg-success-600 hover:text-success-600',
          'active:border-success-800 active:bg-success-800 active:text-success-800',
        ],
        info: [
          'border-info-500 bg-info-500 text-info-500',
          'hover:border-info-600 hover:bg-info-600 hover:text-info-600',
          'active:border-info-800 active:bg-info-800 active:text-info-800',
        ],
        warning: [
          'border-warning-500 bg-warning-500 text-warning-500',
          'hover:border-warning-600 hover:bg-warning-600 hover:text-warning-600',
          'active:border-warning-800 active:bg-warning-800 active:text-warning-800',
        ],
        danger: [
          'border-danger-500 bg-danger-500 text-danger-500',
          'hover:border-danger-600 hover:bg-danger-600 hover:text-danger-600',
          'active:border-danger-800 active:bg-danger-800 active:text-danger-800',
        ],
        neutral: [
          'border-neutral-500 bg-neutral-500 text-neutral-500',
          'hover:border-neutral-600 hover:bg-neutral-600 hover:text-neutral-600',
          'active:border-neutral-800 active:bg-neutral-800 active:text-neutral-800',
        ],
      },
      btnType: {
        solid: 'text-white hover:text-white active:text-white',
        outline: 'bg-transparent hover:bg-gray-50 active:bg-gray-100',
        link: [
          'border-0 bg-transparent hover:bg-transparent active:bg-transparent',
          'underline underline-offset-2',
          'px-0 py-0 shadow-none',
        ],
      },
      fullWidth: {
        true: '!w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      fullWidth: false,
      btnType: 'solid',
    },
  }
);
