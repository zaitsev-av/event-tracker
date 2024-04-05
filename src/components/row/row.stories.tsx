import type { Meta, StoryObj } from '@storybook/react';
import { eachDayOfInterval, getISOWeek } from 'date-fns';

import { Row } from '@/components/row/row';

const meta = {
	title: 'Components/Row',
	component: Row,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		displayMonth: new Date(),
		dates: [],
		weekNumber: 1
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
			<>
				<Row
					displayMonth={today}
					dates={dates}
					weekNumber={weekNumber}
				/>
			</>
		);
	}
};
