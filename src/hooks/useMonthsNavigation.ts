import { addMonths } from 'date-fns';
import { useState } from 'react';

import { useEventTracker } from '@/context';

export function useMonthsNavigation() {
	const currentDate = new Date();
	const { month, onChangeMonth } = useEventTracker();
	const [newMoths, setNewMonths] = useState(month ?? currentDate);
	// const currentMonth = getMonth(currentDate);
	console.log(month, ' month -> useNavigation');
	console.log(newMoths, ' newMoths -> useNavigation');
	const nextMonthHandler = () => {
		console.log('функция вызвалась');
		// if (month?.getMonth() !== currentMonth) {
		const nextMoth = addMonths(newMoths, 1);
		setNewMonths(nextMoth);
		onChangeMonth(nextMoth);
		console.log('функция прошла условие и выполнила код');
		// }

		// return;
	};

	return { nextMonthHandler, newMoths };
}
