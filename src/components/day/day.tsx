import { clsx } from 'clsx';
import { isToday } from 'date-fns';
import { useState } from 'react';

import style from './day.module.scss';
import { useSelectedDays } from '@/context';
import { isMonthBoundary } from '@/utils';

export interface DayProps {
	displayMonth: Date;
	date: Date;
}

export function Day(props: DayProps): JSX.Element {
	const [isAnimated, setIsAnimated] = useState(false);
	const { isDragging, selectedDays, onMouseUpHandler, onMouseDownHandler } =
		useSelectedDays();

	// const [startDate, setStartDate] = useState<Date[] | null>(null);
	// const [endDate, setEndDate] = useState<Date | null>(null);

	const isNoCurrentMonth = isMonthBoundary(props.displayMonth, props.date);
	const today = isToday(props.date ?? new Date());

	const Highlited =
		selectedDays &&
		props.date >= selectedDays[0] &&
		props.date <= selectedDays[1];

	const classNames = {
		root: clsx(
			style.root,
			today && style.today,
			isNoCurrentMonth && style.noCurrent,
			isAnimated && style.animation,
			Highlited && style.highlighted
		)
	};
	console.log(isDragging, '->  isDragging');
	console.log(props.date >= selectedDays[0], ' props.date >= selectedDays[0]');
	console.log(
		selectedDays[selectedDays?.length],
		'selectedDays[selectedDays?.length]'
	);
	console.log(Highlited, '-> Highlited');

	const handleClick = () => {
		setIsAnimated(!isAnimated);
	};

	console.log(selectedDays, '-> selectedDays');

	// const handleSelectedDays = (event: MouseEventHandler<HTMLButtonElement>) => {
	// 	onSelectedDays(event, props.date);
	// };

	// const onMousDownHandler = (
	// 	event: MouseEventHandler<HTMLButtonElement, MouseEvent>
	// ): void => {
	// 	console.log(event);
	// 	console.log(props.date, ' -> props.date');
	// };
	//
	// const onMousUpHandler = (
	// 	event: MouseEventHandler<HTMLButtonElement, MouseEvent>
	// ): void => {
	// 	console.log(event);
	// 	console.log(props.date, ' -> props.date');
	// };

	return (
		<button
			className={classNames.root}
			disabled={isNoCurrentMonth}
			onDoubleClick={handleClick}
			// onClick={handleSelectedDays}
			onMouseDown={event => onMouseDownHandler(event, props.date)}
			onMouseUp={event => onMouseUpHandler(event, props.date)}
			// onMouseDown={() => handleMouseDown(props.date)}
			// onMouseUp={() => handleMouseUp(props.date)}
			// onMouseEnter={() => handleMouseEnter(props.date)}
		>
			{props.date.getDate()}
		</button>
	);
}
