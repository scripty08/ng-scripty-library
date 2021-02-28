import { Component, Input } from '@angular/core';

@Component({
  selector   : 'font-styles',
  templateUrl: '../FontStyles.component.html',
  styleUrls  : ['./FontStylesSO.scss'],
})
export default class FontStylesSOComponent {
  /**
   * Title contents
   *
   * @required
   */
  @Input()
  title = 'Im a title!';
}
