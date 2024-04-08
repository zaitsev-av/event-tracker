import { createContext, useContext } from 'react';

import { useSelectedDaysState } from '@/hooks';

type SelectedDaysContextValue = {
	selectedDays: string[];
	onSelectedDays: (value: Date) => void;
};

export const SelectedDaysContext = createContext<
	SelectedDaysContextValue | undefined
>(undefined);

//todo убрать any
export function SelectedDaysProvider(props: any): JSX.Element {
	const { selected, setSelected } = useSelectedDaysState();

	const onSelectedDaysHandler = (day: any) => {
		if (selected.length === 1) {
			setSelected([...selected, day]);
			return;
		}

		if (selected.length === 2) {
			setSelected([...selected[0], day]);
		}
		setSelected([day]);
	};

	const value: SelectedDaysContextValue = {
		selectedDays: selected,
		onSelectedDays: onSelectedDaysHandler
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
