import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      description: 'The label of the button',
      defaultValue: 'Button',
      control: 'text',
      table: {
        defaultValue: { summary: 'Button' },
      },
    },
    variant: {
      description: 'The variant of the button',
      defaultValue: 'primary',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    fullWidth: {
      description: 'Whether the button should take up the full width of its container',
      defaultValue: false,
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    disabled: {
      description: 'Whether the button should be disabled',
      defaultValue: false,
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};
