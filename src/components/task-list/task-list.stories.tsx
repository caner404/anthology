import type { Meta, StoryObj } from '@storybook/react';
import { TaskList } from './task-list';
import { TaskListProvider } from './task-list-context';

const meta = {
  title: 'Components/TaskList',
  component: TaskList,
  decorators: [
    (Story) => (
      <TaskListProvider
        tasks={[
          { id: '1', title: 'Task 1', completed: false },
          { id: '2', title: 'Task 2', completed: true },
        ]}
      >
        <Story />
      </TaskListProvider>
    ),
  ],
} as Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof TaskList>;
export const Default: Story = {
  args: {},
};
