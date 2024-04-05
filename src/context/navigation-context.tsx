import { createContext, useContext } from 'react';

import { useEventTracker } from '@/context/сontext';
import { useMonthsNavigation } from '@/hooks';

type NavigationContextValue = {
	displayedMonth: Date;
	currentMonth: Date;
	nextMonthHandler: () => void;
	prevMonthHandler: () => void;
};

export const NavigationContext = createContext<
	NavigationContextValue | undefined
>(undefined);

//todo убрать any
export function NavigationProvider(props: any): JSX.Element {
	const { month } = useEventTracker();
	const { newMoths, nextMonthHandler, prevMonthHandler } =
		useMonthsNavigation();

	const value: NavigationContextValue = {
		displayedMonth: newMoths,
		currentMonth: month ?? new Date(),
		nextMonthHandler,
		prevMonthHandler
	};

	return (
		<NavigationContext.Provider value={value}>
			{props.children}
		</NavigationContext.Provider>
	);
}

export function useNavigation(): NavigationContextValue {
	const context = useContext(NavigationContext);
	if (!context) {
		throw new Error('useNavigation must be used within a NavigationProvider');
	}
	return context;
}
