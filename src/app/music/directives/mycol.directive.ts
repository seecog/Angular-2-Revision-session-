import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';


@Directive({
    selector : '[mycol]'
})
export class Mycol{

constructor(private rend : Renderer,private ele : ElementRef){

}

@HostListener('mouseenter') enter(){
    this.rend.setElementStyle(this.ele.nativeElement ,'color','red')
}

@HostListener('mouseleave') out(){
this.rend.setElementStyle(this.ele.nativeElement,'color','green')
}

}