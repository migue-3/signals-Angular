import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLabelDirective } from './directives/custom-label.directive';



@NgModule({
  declarations: [
    CustomLabelDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    //para usar las directivas en otros modulos tenemos que exportarlas
    CustomLabelDirective
  ]
})
export class SharedModule { }
