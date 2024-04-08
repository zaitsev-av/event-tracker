import { createContext, useContext } from 'react';

type SelectedDaysContextValue = {
	selectedDays: string[];
	onSelectedDays: () => void;
};

export const SelectedDaysContext = createContext<
	SelectedDaysContextValue | undefined
>(undefined);

//todo убрать any
export function SelectedDaysProvider(props: any): JSX.Element {
	const value: SelectedDaysContextValue = {
		selectedDays: [],
		onSelectedDays: () => {}
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
