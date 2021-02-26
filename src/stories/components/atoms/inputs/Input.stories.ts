// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { showCode } from '../../Helper';
import InputComponent from './input.component';

export default {
  title: 'Example/Input',
  component: InputComponent,
  argTypes: {
  }
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  component: InputComponent,
  props: args,
});

export const TextInput = Template.bind({});
TextInput.args = {
  primary: true,
  type: 'text',
  value: 'Mein Text'
};
showCode(`
            <InputComponent class="primary" type="text" value="Mein Text"></InputComponent>
     `, Text);

export const NumberInput = Template.bind({});
NumberInput.args = {
  primary: true,
  type: 'number',
  value: '42'
};
showCode(`
            <InputComponent class="primary" type="number" value="35"></InputComponent>
     `, NumberInput);