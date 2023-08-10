import { twMerge } from 'tailwind-merge';
import { ButtonProps } from './Button.types';
import { buttonDisabledStyles, buttonStyles } from './Button.styles';

const Button = (props: ButtonProps) => {
  const { variant, fullWidth, className, label = 'Button', ...rest } = props;
  return (
    <button
      className={twMerge(
        buttonStyles({ variant, fullWidth }),
        className,
        rest.disabled && buttonDisabledStyles()
      )}
      {...rest}
    >
      <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">{label}</span>
    </button>
  );
};

export default Button;
