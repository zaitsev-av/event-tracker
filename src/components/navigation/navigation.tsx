import { format } from 'date-fns';

import style from './navigation.module.scss';
import { ArrowLeftIcon, ArrowRightIcon } from '@/assets';
import { useNavigation } from '@/context/navigation-context';
import { useEventTracker } from '@/context/сontext';

export const Navigation = () => {
	const { locale } = useEventTracker();
	const { displayedMonth, nextMonths } = useNavigation();

	// const onChangeMonth = () => {
	// 	const nextMonth = addMonths(month!, 1);
	// 	// month = nextMonth
	// };

	const monthName = format(displayedMonth, 'MMMM', {
		locale
	});
	return (
		<div className={style.container}>
			<button className={style.root}>
				<ArrowLeftIcon />
				{/*Prev*/}
			</button>
			Название месяца: {monthName}
			<button
				className={style.root}
				onClick={nextMonths}
			>
				{/*Next*/}
				<ArrowRightIcon />
			</button>
		</div>
	);
};
