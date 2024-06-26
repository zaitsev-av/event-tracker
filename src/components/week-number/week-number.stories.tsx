import type { Meta, StoryObj } from '@storybook/react';
import { eachDayOfInterval, getISOWeek } from 'date-fns';

import { WeekNumber } from '@/components/week-number/week-number';

import { EventTrackerProvider, initialProps } from '@/context/сontext';

const meta = {
	title: 'Components/Week-number',
	component: WeekNumber,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof WeekNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		dates: [],
		number: 1
	},
	render: function () {
		const startDate = new Date();
		const endDate = new Date(
			startDate.getFullYear(),
			startDate.getMonth(),
			startDate.getDay() + 7
		);

		const dates = eachDayOfInterval({ start: startDate, end: endDate });
		const today = new Date();
		const weekNumber = getISOWeek(today);
		return (
			<EventTrackerProvider initialProps={initialProps}>
				{dates.map((_value, index) => (
					<WeekNumber
						key={index}
						number={weekNumber + index}
						dates={dates}
					/>
				))}
			</EventTrackerProvider>
		);
	}
};
