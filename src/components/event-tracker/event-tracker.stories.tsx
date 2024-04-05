import type { Meta, StoryObj } from '@storybook/react';

import { EventTracker } from '@/components/event-tracker/event-tracker';
import { EventTrackerRoot } from '@/components/root';

const meta = {
	title: 'Components/Event-Tracker',
	component: EventTracker,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof EventTracker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: '',
		position: 'right'
	},
	render: function () {
		return <EventTrackerRoot />;
	}
};
