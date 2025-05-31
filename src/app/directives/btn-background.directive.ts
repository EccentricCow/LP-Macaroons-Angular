import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '<a>[appBtnBackground]'
})
export class BtnBackgroundDirective implements OnInit {
  private initialBg: string = 'linear-gradient(0deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';
  private initialHoverBg: string = 'linear-gradient(0deg, rgb(181, 13, 49) 0%, rgb(234, 121, 136) 100%)';

  @Input('appBtnBackgroundDefault') defaultBg: string = '';
  @Input('appBtnBackgroundHover') hoverBg: string = '';

  @HostListener('mouseover')
  onHoverStart(): void {
    this.rend.setStyle(this.el.nativeElement, 'background',
      this.hoverBg ? this.hoverBg : this.initialHoverBg);
  }

  @HostListener('mouseout')
  onHoverEnd(): void {
    this.rend.setStyle(this.el.nativeElement, 'background',
      this.defaultBg ? this.defaultBg : this.initialBg);
  }

  constructor(private el: ElementRef,
              private rend: Renderer2
  ) {  }

  ngOnInit() {
    this.rend.setStyle(this.el.nativeElement, 'background',
      this.defaultBg ? this.defaultBg : this.initialBg);
  }
}
