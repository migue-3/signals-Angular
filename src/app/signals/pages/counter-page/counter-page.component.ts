import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {

  public counter = signal(10);
  //Para crear una signal computed de solo lectura
  public squareCounter = computed( () => this.counter() * this.counter() );

  increaseBy( value: number ){
    // this.counter.set( this.counter() + value );
    // otra manera de hacerlo
    this.counter.update( current => current + value )
  }

}
