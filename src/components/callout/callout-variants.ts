import { cva, VariantProps } from 'class-variance-authority';

export const variantsKeys = [
  'default',
  'primary',
  'information',
  'success',
  'warning',
  'warning',
  'danger',
] as const;
//type CalloutVariantTypes = (typeof variantsKeys)[number];

export const variants = cva(['p-4', 'rounded', 'border', 'shadow-md', 'space-y-4'], {
  variants: {
    type: {
      default: ['bg-slate-200', 'border-slate-500', 'text-slate-900'],
      primary: ['bg-primary-200', 'border-primary-500', 'text-primary-900'],
      information: ['bg-information-200', 'border-information-500', 'text-information-900'],
      success: ['bg-success-200', 'border-success-500', 'text-success-900'],
      warning: ['bg-warning-200', 'border-warning-500', 'text-warning-900'],
      danger: ['bg-danger-200', 'border-danger-500', 'text-danger-900'],
    },
  },
  defaultVariants: {
    type: 'default',
  },
});

export type CalloutVariants = VariantProps<typeof variants>;
