import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOver]'
})
export class OverDirective {

  constructor(private el:ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('');
  }

  private changeColor(color:string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
