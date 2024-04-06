import type { Meta, StoryObj } from '@storybook/react';
import { eachDayOfInterval } from 'date-fns';

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
	args: { date: new Date(), displayMonth: new Date() },
	render: function (args) {
		const startDate = new Date();
		const endDate = new Date(
			startDate.getFullYear(),
			startDate.getMonth(),
			startDate.getDay() + 7
		);

		const dates = eachDayOfInterval({ start: startDate, end: endDate });
		return (
			<div style={{ display: 'flex', width: '500px', gap: 16 }}>
				{dates.map(day => (
					<Day
						displayMonth={args.displayMonth}
						date={day}
					/>
				))}
			</div>
		);
	}
};
