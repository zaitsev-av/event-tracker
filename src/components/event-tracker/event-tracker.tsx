import { Navigation } from '@/components/navigation';
import { Table } from '@/components/table';

import { DayPickerProvider, initialProps } from '@/context';

// interface Props {
// fromYear: number;
// toYear: number;
// weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
// onChange: (value: string) => void;
// value: string;
// position?: 'left' | 'right';
// }
export const EventTracker = () => {
	return (
		<div>
			<DayPickerProvider initialProps={initialProps}>
				<Navigation />
				<Table displayMonth={new Date()} />
			</DayPickerProvider>
		</div>
	);
};
