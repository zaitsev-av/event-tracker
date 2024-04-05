import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

import { RootProvider } from '../src/components/root-provider/root-provider';
import '../src/styles/index.scss';

const preview: Preview = {
	parameters: {
		darkMode: {
			dark: {
				...themes.dark,
				appBg: 'rgb(28, 28, 33)',
				appContentBg: 'rgb(28, 28, 33)',
				barBg: 'rgb(28, 28, 33)',
				appBorderRadius: 24
			},
			light: { ...themes.light, appBg: '#fffdfd', appBorderRadius: 24 }
		},
		docs: {
			theme: themes.dark
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},
	decorators: [
		Story => (
			<RootProvider>
				<Story />
			</RootProvider>
		)
	]
};

export default preview;
