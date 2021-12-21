import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit, AfterViewInit{

  @Input() defaultColor = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;
  @Input('appBasicHighlight') highlightColor = 'lightgreen';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}


  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener ('mouseenter') mouseEnter(event: Event) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener ('mouseleave') mouseLeave(event: Event) {
    this.backgroundColor = this.defaultColor;
  }

}

