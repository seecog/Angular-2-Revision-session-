import { TemplateRef, ViewContainerRef, Input, Directive } from '@angular/core';


@Directive({
    selector : '[myif]'
})
export class MyIf{

constructor(private tempref : TemplateRef<string>,private container : ViewContainerRef){

}

@Input('myif') set MyIf(stt : boolean){
    if(stt){
   console.log('The status is ',stt);
   this.container.createEmbeddedView(this.tempref);
    }
}


}

