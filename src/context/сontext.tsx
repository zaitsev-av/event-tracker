import { Locale } from 'date-fns';
import { ru } from 'date-fns/locale';
import { createContext, CSSProperties, ReactNode, useContext } from 'react';

import { parseDate } from '@/utils/utils';

export interface IBase {
	className?: string;
	style?: CSSProperties;
	id?: string;
	defaultMonth?: Date;
	month?: Date;
	numberOfMonths?: number;
	fromDate?: Date;
	toDate?: Date;
	fromMonth?: Date;
	toMonth?: Date;
	fromYear?: number;
	toYear?: number;
	disableNavigation?: boolean;
	pagedNavigation?: boolean;
	reverseMonths?: boolean;
	fixedWeeks?: boolean;
	hideHead?: boolean;
	showOutsideDays?: boolean;
	showWeekNumber?: boolean;
	weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	firstWeekContainsDate?: 1 | 4;
	ISOWeek?: boolean;
	footer?: ReactNode;
	initialFocus?: boolean;
	today?: Date;
	locale?: Locale;
	onChangeMonth: (month: Date) => void;
}
export const initialProps: IBase = {
	className: '',
	style: {},
	id: '',
	defaultMonth: undefined,
	month: new Date(),
	numberOfMonths: 0,
	fromDate: undefined,
	toDate: undefined,
	fromMonth: undefined,
	toMonth: undefined,
	fromYear: 0,
	toYear: 0,
	disableNavigation: false,
	pagedNavigation: false,
	reverseMonths: false,
	fixedWeeks: false,
	hideHead: false,
	showOutsideDays: false,
	showWeekNumber: false,
	weekStartsOn: 1,
	firstWeekContainsDate: 1,
	ISOWeek: false,
	today: new Date(),
	locale: ru,
	onChangeMonth: (month: Date) => {
		initialProps.month = month;
	}
};

export interface DayPickerContextValue extends IBase {
	required?: boolean;
	min?: number;
	max?: number;
	numberOfMonths?: number;
	today?: Date;
	fromDate?: Date;
	toDate?: Date;
}

export const EventTrackerContext = createContext<
	DayPickerContextValue | undefined
>(undefined);

export interface EventTrackerProviderProps {
	initialProps: IBase;
	children?: ReactNode;
}
export function EventTrackerProvider(
	props: EventTrackerProviderProps
): JSX.Element {
	const { initialProps } = props;

	const { fromDate, toDate } = parseDate(
		//todo удалить костыль
		initialProps.fromYear ?? 1,
		initialProps.toYear ?? 2
	);

	const value = {
		...initialProps,

		fromDate,
		toDate
	};

	return (
		<EventTrackerContext.Provider value={value}>
			{props.children}
		</EventTrackerContext.Provider>
	);
}

export function useEventTracker(): DayPickerContextValue {
	const context = useContext(EventTrackerContext);
	if (!context) {
		throw new Error(
			`useEventTracker must be used within a EventTrackerProvider.`
		);
	}
	return context;
}
