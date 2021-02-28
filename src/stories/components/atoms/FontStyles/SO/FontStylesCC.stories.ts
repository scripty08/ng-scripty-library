// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import FontStyles from '../CC/FontStylesCC.component';

export default {
  title    : 'Components/Atoms/FontStyles',
  component: FontStyles,
} as Meta;

const Template: Story<FontStyles> = (args: FontStyles) => ({
  component: FontStyles,
  props    : args,
});

export const SO = Template.bind({});
SO.args         = {
  title: 'Street One Title',
};

