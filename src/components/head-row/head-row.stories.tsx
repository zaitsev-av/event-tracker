import type { Meta, StoryObj } from '@storybook/react';

import { HeadRow } from '@/components/head-row/head-row';

const meta = {
	title: 'Components/Head-row',
	component: HeadRow,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof HeadRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { date: new Date(), displayMonth: new Date() }
};
