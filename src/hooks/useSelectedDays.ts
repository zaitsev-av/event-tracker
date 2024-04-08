import { useEffect, useState } from 'react';

export function useSelectedDays() {
	const [selected, setSelected] = useState([] as string[]);
	useEffect(() => {
		if (selected.length > 0) {
			setSelected(selected);
		}
	}, [selected]);

	return { selected, setSelected };
}
