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
	// const [hover, setHover] = useState<boolean>(false);

	const isNoCurrentMonth = isMonthBoundary(props.displayMonth, props.date);
	const today = isToday(props.date ?? new Date());

	const isHighlighted =
		selectedDays &&
		props.date >= selectedDays[0] &&
		props.date <= selectedDays[1];

	const classNames = {
		root: clsx(
			style.root,
			today && style.today,
			isNoCurrentMonth && style.noCurrent,
			isAnimated && style.animation,
			isHighlighted && style.highlighted
			// hover && style.hover
		)
	};
	console.log(isDragging, '->  isDragging');
	console.log(props.date >= selectedDays[0], ' props.date >= selectedDays[0]');
	console.log(
		selectedDays[selectedDays?.length],
		'selectedDays[selectedDays?.length]'
	);
	console.log(isHighlighted, '-> isHighlited');

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

	// useEffect(() => {
	// 	const buttons = document.querySelectorAll('.gavno');
	// 	buttons.forEach(el => el.addEventListener('hover', handleClick));
	// }, []);

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
			onMouseOver={() => {
				if (selectedDays[0] <= props.date) {
					// setHover(true);
				}
				// setHover(true);
			}}
			onMouseLeave={() => {
				// setHover(false);
			}}
		>
			{props.date.getDate()}
		</button>
	);
}
