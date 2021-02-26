import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'scripty-input',
  templateUrl: './input.html',
  styleUrls: ['./input.scss'],
})
export default class InputComponent {

  @Input()
  primary = false;

  @Input()
  type: 'text';

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  value: string;

  @Output()
  onInput = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'scripty-input--primary' : 'scripty-input--secondary';
    return ['scripty-input', `scripty-input--${this.size}`, mode];
  }
}
