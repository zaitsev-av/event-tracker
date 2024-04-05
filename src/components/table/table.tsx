import { getMonthWeeks } from '@/utils/utils';

import { HeadRow } from '../head-row';
import { Row } from '../row';

import style from './table.module.scss';
import { useEventTracker } from '@/context/сontext';

export interface TableProps {
	id?: string;
	['aria-labelledby']?: string;
	displayMonth: Date;
}

export function Table(props: TableProps): JSX.Element {
	const { locale, fixedWeeks, weekStartsOn, firstWeekContainsDate, ISOWeek } =
		useEventTracker();

	console.log(props.displayMonth, 'props.displayMonth');

	const weeks = getMonthWeeks(props.displayMonth, {
		useFixedWeeks: Boolean(fixedWeeks),
		ISOWeek,
		locale,
		weekStartsOn,
		firstWeekContainsDate
	});

	return (
		<table
			id={props.id}
			role='grid'
			aria-labelledby={props['aria-labelledby']}
			className={style.root}
		>
			<HeadRow />
			<tbody>
				{weeks.map(week => (
					<Row
						displayMonth={props.displayMonth}
						key={week.weekNumber}
						dates={week.dates}
						weekNumber={week.weekNumber}
					/>
				))}
			</tbody>
			{/*<Footer displayMonth={props.displayMonth} />*/}
		</table>
	);
}
