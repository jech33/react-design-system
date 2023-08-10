import { twMerge } from 'tailwind-merge';
import { ButtonProps } from './Button.types';
import { buttonDisabledStyles, buttonStyles } from './Button.styles';

export const Button = (props: ButtonProps) => {
  const {
    variant = 'primary',
    fullWidth,
    btnType = 'solid',
    className,
    label = 'Button',
    ...rest
  } = props;

  const defaultValues = {
    variant: variant || 'primary',
    fullWidth: fullWidth || false,
    btnType: btnType || 'solid',
  };

  return (
    <button
      className={twMerge(
        buttonStyles({ ...defaultValues }),
        rest.disabled && buttonDisabledStyles(),
        className
      )}
      {...rest}
    >
      <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">{label}</span>
    </button>
  );
};
