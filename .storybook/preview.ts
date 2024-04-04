import type { Preview } from "@storybook/react";
import '../src/styles/index.scss'
import {themes} from "@storybook/theming";

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
        date: /Date$/i,
      },
    },
  },
};

export default preview;
