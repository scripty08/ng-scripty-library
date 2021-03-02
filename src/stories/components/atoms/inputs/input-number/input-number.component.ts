import { Component } from '@angular/core';
import {inputFocusBlurAnimation, labelFocusBlurAnimation} from "../input-base/animations-base";
import {InputBase} from "../input-base/input-base";

@Component({
  selector: 'sc-text-input',
  templateUrl: './input-number.component.html',
  styleUrls: ['../../../components.scss'],
  animations: [
    labelFocusBlurAnimation(),
    inputFocusBlurAnimation(),
  ],
})
export default class InputNumberComponent extends InputBase {
 constructor() {
   super();
 }
}
