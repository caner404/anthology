import { PropsWithChildren } from 'react';
import { CalloutVariants, variants } from './callout-variants';

type CalloutProps = PropsWithChildren<CalloutVariants & { title: string }>;

export const Callout = ({ title, children, type }: CalloutProps) => (
  <div className={variants({ type })}>
    <h2 className="font-semibold">{title}</h2>
    <p>{children}</p>
  </div>
);
