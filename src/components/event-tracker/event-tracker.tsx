import { Navigation } from '@/components/navigation';
import { Table } from '@/components/table';

import { useNavigation } from '@/context/navigation-context';

// interface Props {
// fromYear: number;
// toYear: number;
// weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
// onChange: (value: string) => void;
// value: string;
// position?: 'left' | 'right';
// }
export const EventTracker = () => {
	const { displayedMonth } = useNavigation();
	return (
		<div>
			<Navigation />
			<Table displayMonth={displayedMonth} />
		</div>
	);
};
