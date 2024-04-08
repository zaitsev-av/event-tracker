import { useEffect, useState } from 'react';

//todo нужно нормальное подумать над названием хука

export function useSelectedDaysState() {
	const [selected, setSelected] = useState<string[]>([]);
	useEffect(() => {
		if (selected.length > 0) {
			setSelected(selected);
		}
	}, [selected]);

	return { selected, setSelected };
}
