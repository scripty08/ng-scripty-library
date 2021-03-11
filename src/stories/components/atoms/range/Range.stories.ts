// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { showCode } from '../../Helper';
import RangeSimpleComponent from './range-simple/range-simple.component';

export default {
  title: 'Scripty/Range',
  component: RangeSimpleComponent,
  argTypes: {
    showError: {control: 'boolean'}
  },
} as Meta;

const SimpleTemplate: Story<RangeSimpleComponent> = (args: RangeSimpleComponent) => ({
  component: RangeSimpleComponent,
  props: args,
});

export const SimpleRange = SimpleTemplate.bind({});
SimpleRange.args = {
  value: '30',
  min: 0,
  max: 60,
  label: 'Start',
  info: true,
  errorText: 'Dieses Feld darf nicht leer sein'
};
showCode(`
            <sc-range-simple type="text" value="35"></sc-range-simple>
     `, SimpleRange);


