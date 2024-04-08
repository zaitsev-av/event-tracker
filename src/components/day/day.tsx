import { clsx } from 'clsx';
import { endOfMonth, isAfter, isBefore, isToday, startOfMonth } from 'date-fns';
import { useState } from 'react';

import style from './day.module.scss';

export interface DayProps {
	displayMonth: Date;
	date: Date;
}
const isMonthBoundary = (current: Date, target: Date) => {
	const startOfMonthDate = startOfMonth(current);
	const endOfMonthDate = endOfMonth(current);

	const isPreviousMonth = isBefore(target, startOfMonthDate);
	const isNextMonth = isAfter(target, endOfMonthDate);
	return isPreviousMonth || isNextMonth;
};

export function Day(props: DayProps): JSX.Element {
	const [isAnimated, setIsAnimated] = useState(false);

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

	return (
		<button
			className={classNames.root}
			disabled={isNoCurrentMonth}
			onDoubleClick={handleClick}
		>
			{props.date.getDate()}
		</button>
	);
}
