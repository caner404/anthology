import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { buttonVariants, sizes } from './button-variants';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,

  args: {
    children: 'Components/Button',
    disabled: false,
    variant: 'primary',
    size: 'medium',
  },
  argTypes: {
    children: {
      name: 'Label',
      control: 'text',
    },
    size: {
      control: 'select',
      options: Object.keys(sizes),
    },
    variant: {
      control: 'select',
      options: Object.keys(buttonVariants),
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Primary UI Component for User Interaction',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};
export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};
export const Large: Story = {
  args: {
    size: 'large',
  },
};
