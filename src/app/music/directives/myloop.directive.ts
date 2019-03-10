import { ViewContainerRef, TemplateRef, Input, Directive } from '@angular/core';

@Directive({
    selector : '[myloop]'
})
export class MyLoopDirective{

    constructor(private template : TemplateRef<string>,private con : ViewContainerRef){

    }

    @Input('myloop') set MyLoop(n){
for(let i=1;i<=n;i++){
    this.con.createEmbeddedView(this.template)
}
    }

}