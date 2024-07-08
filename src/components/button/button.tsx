import { ComponentProps } from 'react';
import { ButtonVariants, variants } from './button-variants';

/*
type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'small' | 'medium' | 'large';
};
*/

type ButtonProps = ComponentProps<'button'> & ButtonVariants;
export const Button = ({ variant = 'primary', size = 'medium', ...props }: ButtonProps) => {
  return <button className={variants({ variant, size })} {...props} />;
};
