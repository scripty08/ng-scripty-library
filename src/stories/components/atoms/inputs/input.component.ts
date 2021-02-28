import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'scripty-input',
  templateUrl: './input.html',
  styleUrls: ['./input.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        backgroundColor: 'yellow'
      })),
    ]),
  ],
})
export default class InputComponent implements OnInit {

  @Input()
  id: string;

  @Input()
  label: string;

  @Input()
  name: string;

  @Input()
  type: 'text';

  @Input()
  size: 'xs' | 's' | 'm' | 'l' = 'm';

  @Input()
  value: string;

  @Output()
  onInput = new EventEmitter<Event>();

  state = '';

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  async ngOnInit() {
    this.state = this.label;
  }

  public onBlur() {
    console.log('onBlur');
    this.label = this.state
  }

  public onFocus() {
    console.log('onFocus');
    this.label = ''
  }

  public get classes(): string[] {
    return ['scripty-input', `scripty-input--${this.size}`];
  }
}
