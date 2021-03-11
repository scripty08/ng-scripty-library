import {Input} from '@angular/core';

export class InputBase {

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
  showError: boolean;

  @Input()
  errorText: string;

  @Input()
  value: string;

  @Input()
  required: boolean;

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
