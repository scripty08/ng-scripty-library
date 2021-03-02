import { Component, Input } from '@angular/core';
import {inputFocusBlurAnimation, labelFocusBlurAnimation} from "../input-base/animations-base";
import {InputBase} from "../input-base/input-base";

@Component({
  selector: 'sc-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['../../../components.scss'],
  animations: [
    labelFocusBlurAnimation(),
    inputFocusBlurAnimation(),
  ],
})
export default class InputPasswordComponent extends InputBase {
  constructor() {
    super();
  }
}
