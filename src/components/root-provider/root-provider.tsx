import { ReactNode } from 'react';

import { EventTrackerProvider, initialProps } from '@/context';
import { NavigationProvider } from '@/context/navigation-context';

export interface RootContextProvider {
	children?: ReactNode;
}

export function RootProvider(props: RootContextProvider) {
	const { children } = props;
	return (
		<EventTrackerProvider initialProps={initialProps}>
			<NavigationProvider>{children}</NavigationProvider>
		</EventTrackerProvider>
	);
}
