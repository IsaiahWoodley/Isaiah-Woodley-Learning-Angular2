import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAppHighlightOnFocus]',
  standalone: true
})
export class AppHighlightOnFocusDirective {
  @Input() appAppHighlightOnFocus: string = 'yellow';  // Default highlight color

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // When the element gains focus, apply the highlight style (border color)
  @HostListener('focus') onFocus() {
    this.highlight(this.appAppHighlightOnFocus || 'purple');
  }
  @HostListener('nonfocused') onNonFocused() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
