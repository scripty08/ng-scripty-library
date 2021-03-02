// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { showCode } from '../../Helper';
import InputPasswordComponent from './input-password/input-password.component';
import InputNumberComponent from './input-number/input-number.component';
import InputComponent from './input-text/input.component';

export default {
  title: 'Scripty/Inputs',
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

const TextTemplate: Story<InputComponent> = (args: InputComponent) => ({
  component: InputComponent,
  props: args,
});

const PasswordTemplate: Story<InputPasswordComponent> = (args: InputPasswordComponent) => ({
  component: InputPasswordComponent,
  props: args,
});

const NumberTemplate: Story<InputNumberComponent> = (args: InputNumberComponent) => ({
  component: InputNumberComponent,
  props: args,
});

export const TextInput = TextTemplate.bind({});
TextInput.args = {
  value: '',
  label: 'Gutscheincode'
};
showCode(`
            <sc-input-text type="text" value="Gutscheincode"></sc-input-text>
     `, TextInput);

export const PasswordInput = PasswordTemplate.bind({});
PasswordInput.args = {
  value: '',
  label: 'Password',
  required: true
};
showCode(`
            <sc-input-password type="password" required></sc-input-password>
     `, PasswordInput);

export const NumberInput = NumberTemplate.bind({});
NumberInput.args = {
  value: '',
  label: 'Age'
};
showCode(`
            <sc-input-number type="number"></sc-input-number>
     `, NumberInput);
