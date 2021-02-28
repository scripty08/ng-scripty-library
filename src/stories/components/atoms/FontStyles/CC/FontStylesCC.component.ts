import { Component, Input } from '@angular/core';

@Component({
  selector   : 'font-styles',
  templateUrl: '../FontStyles.component.html',
  styleUrls  : ['./FontStylesCC.scss'],
})
export default class FontStylesCCComponent {
  /**
   * Title contents
   *
   * @required
   */
  @Input()
  title = 'Im a title!';
}
