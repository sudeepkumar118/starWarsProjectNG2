import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';


@Directive({ selector: '[appMainmenu]' })
export class MainmenuDirective{
  constructor(elem: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elem.nativeElement, 'box-shadow', '2px 2px 12px #f0f0f0');
 }
}
