import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#24195a',
  colorSecondary: '#3fc6f3',

  // UI
  appBg: '#f5f6f8',
  appContentBg: '#fff',
  appBorderColor: '#dfe3e8',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Montserrat", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#212b36',
  textInverseColor: '#fff',

  // Toolbar default and active colors
  barTextColor: '#fff',
  barSelectedColor: '#3fc6f3',
  barBg: '#24195a',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#dfe3e8',
  inputTextColor: '#212b36',
  inputBorderRadius: 4,

  brandTitle: 'Applio Design System',
  brandUrl: 'https://example.com',
  brandImage: 'https://placehold.it/350x150',
});