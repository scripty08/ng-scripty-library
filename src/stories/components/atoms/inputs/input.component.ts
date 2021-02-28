import { Component, Input } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'sc-text-input',
  templateUrl: './input.html',
  styleUrls: ['../../components.scss'],
  animations: [
    trigger('labelFocusBlur', [
      state('focus', style({
        position: 'absolute',
        top: '-10px',
        fontSize: '13px'
      })),
      state('blur', style({

      })),
    ]),
    trigger('inputFocusBlur', [
      state('focus', style({
        paddingTop: '1.8rem',
        paddingBottom: '.7rem',
        paddingLeft: '1.1rem',
        height: '0.5rem',
        fontSize: '1rem'
      })),
      state('blur', style({

      })),
    ]),
  ],
})
export default class InputComponent {

  @Input()
  id: string;

  @Input()
  label: string;

  @Input()
  name: string;

  @Input()
  type: 'text';

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  value: string;

  focused = false;

  public handleInput(e): void {
    this.value = e.target.value;
  }

  public handleBlur(e): void {
    if (this.value === '') {
      this.focused = false;
    }
  }

  public handleFocus(e): void {
    this.focused = true;
  }

  public get classes(): string[] {
    return [`${this.size}`];
  }
}
