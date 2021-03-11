import { Component } from '@angular/core';
import {inputFocusBlurAnimation, labelFocusBlurAnimation} from "../input-base/animations-base";
import {InputBase} from "../input-base/input-base";

@Component({
  selector: 'sc-text-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  animations: [
    labelFocusBlurAnimation(),
    inputFocusBlurAnimation(),
  ],
})
export default class InputComponent extends InputBase {
 constructor() {
   super();
 }
}
