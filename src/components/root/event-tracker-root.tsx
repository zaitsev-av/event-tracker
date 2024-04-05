import { EventTracker } from '@/components/event-tracker';
import { RootProvider } from '@/components/root-provider/root-provider';

export function EventTrackerRoot() {
	//todo удалить initialProps из NavigationProvider
	return (
		<RootProvider>
			<EventTracker />
		</RootProvider>
	);
}
