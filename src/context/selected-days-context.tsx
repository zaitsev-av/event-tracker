import { createContext, useContext, useState } from 'react';

import { useSelectedDaysState } from '@/hooks';

type SelectedDaysContextValue = {
	selectedDays: Date[];
	onMouseDownHandler: (
		event: React.MouseEvent<HTMLButtonElement>,
		day: Date
	) => void;
	onMouseUpHandler: (
		event: React.MouseEvent<HTMLButtonElement>,
		day: Date
	) => void;
	isDragging: boolean;
};

export const SelectedDaysContext = createContext<
	SelectedDaysContextValue | undefined
>(undefined);

//todo убрать any
export function SelectedDaysProvider(props: any): JSX.Element {
	const { selected, setSelected } = useSelectedDaysState();
	const [isDragging, setIsDragging] = useState(false);

	// const onSelectedDaysHandler = (day: any) => {
	// 	if (selected.length === 1) {
	// 		setSelected([...selected, day]);
	// 		return;
	// 	}
	//
	// 	if (selected.length === 2) {
	// 		setSelected([...selected[0], day]);
	// 	}
	// 	setSelected([day]);
	// };
	//
	// function onMouseHandler(event: MouseEvent<HTMLButtonElement>, day: Date) {
	// 	if (event.type === 'mousedown') {
	// 		setSelected([day]);
	// 	}
	// 	if (event.type === 'mouseup') {
	// 		setSelected([...selected, day]);
	// 	}
	// }

	const onMouseDownHandler = (
		event: React.MouseEvent<HTMLButtonElement>,
		day: Date
	): void => {
		console.log(event);
		console.log(day, ' -> props.date');
		setSelected([day]);
		setIsDragging(true);
	};

	const onMouseUpHandler = (
		event: React.MouseEvent<HTMLButtonElement>,
		day: Date
	): void => {
		console.log(event);
		console.log(day, ' -> props.date');
		setSelected([...selected, day]);
		setIsDragging(false);
	};

	const value: SelectedDaysContextValue = {
		selectedDays: selected,
		// onSelectedDays: onMouseHandler
		onMouseDownHandler,
		onMouseUpHandler,
		isDragging
	};

	return (
		<SelectedDaysContext.Provider value={value}>
			{props.children}
		</SelectedDaysContext.Provider>
	);
}

export function useSelectedDays(): SelectedDaysContextValue {
	const context = useContext(SelectedDaysContext);
	if (!context) {
		throw new Error(
			'useSelectedDays must be used within a SelectedDaysProvider'
		);
	}
	return context;
}
