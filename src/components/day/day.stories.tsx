import type { Meta, StoryObj } from '@storybook/react';
import { Day } from '@/components/day/day';


const meta = {
	title: 'Components/Day',
	component: Day,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof Day>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { date: new Date(), displayMonth: new Date() }
};
