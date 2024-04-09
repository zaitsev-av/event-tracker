import { clsx } from 'clsx';
import { isToday } from 'date-fns';
import { useState } from 'react';

import style from './day.module.scss';
import { isMonthBoundary } from '@/utils';
import { useSelectedDays } from '@/context/selected-days-context';

export interface DayProps {
	displayMonth: Date;
	date: Date;
}

export function Day(props: DayProps): JSX.Element {
	const [isAnimated, setIsAnimated] = useState(false);
	const { selectedDays, onSelectedDays } = useSelectedDays();

	const isNoCurrentMonth = isMonthBoundary(props.displayMonth, props.date);
	const today = isToday(props.date ?? new Date());
	const classNames = {
		root: clsx(
			style.root,
			today && style.today,
			isNoCurrentMonth && style.noCurrent,
			isAnimated && style.animation
		)
	};

	const handleClick = () => {
		setIsAnimated(!isAnimated);
	};

	console.log(selectedDays, '-> selectedDays');
	const handleSelectedDays = () => {
		onSelectedDays(props.date);
	};

	return (
		<button
			className={classNames.root}
			disabled={isNoCurrentMonth}
			onDoubleClick={handleClick}
			onClick={handleSelectedDays}
		>
			{props.date.getDate()}
		</button>
	);
}
