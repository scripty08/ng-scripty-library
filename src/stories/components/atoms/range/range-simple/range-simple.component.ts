import {Component, Input, ViewChild, AfterViewInit} from '@angular/core';
import {Renderer2, ElementRef} from '@angular/core';

@Component({
  selector: 'sc-range-simple',
  templateUrl: './range-simple.component.html',
  styleUrls: ['./range-simple.component.scss'],
})
export default class RangeSimpleComponent implements AfterViewInit {
  @Input() value: number;
  @Input() suffix = '';
  @Input() min = 0;
  @Input() max = 100;
  @ViewChild("sliderRef", {read: ElementRef}) sliderRef: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.setStyle(this.value);
  }

  handleInput(e): void {
    this.setStyle(e.target.value);
  }

  setStyle(value): void {
    this.renderer.setAttribute(
      this.sliderRef.nativeElement,
      'style', '--min:'+this.min+'; --max:'+this.max+'; --value:' + value + '; --text-value:"' + value + '"; --suffix:"'+this.suffix+'"'
    );
  }
}
