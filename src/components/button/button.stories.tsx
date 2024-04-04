import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/button/button';

const meta = {
	title: 'Components/TableButton',
	component: Button,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render: function (args) {
		return <Button {...args} />;
	}
};
