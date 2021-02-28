// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { showCode } from '../../Helper';
import InputComponent from './input.component';

export default {
  title: 'Scripty/Input',
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
    }),
  ],
  component: InputComponent,
  argTypes: {
    size: { control: 'select' },
  },
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  component: InputComponent,
  props: args,
});

export const TextInput = Template.bind({});
TextInput.args = {
  type: 'text',
  value: '',
  label: 'Gutscheincode'
};
showCode(`
            <InputComponent type="text" value="Mein Text"></InputComponent>
     `, Text);

export const NumberInput = Template.bind({});
NumberInput.args = {
  type: 'number',
  value: '42'
};
showCode(`
            <InputComponent type="number" value="35"></InputComponent>
     `, NumberInput);
