import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent {

  // recibimos el tipo de button
  @Input() typeBtn: 'button' |'reset'|'submit' = 'button';
  // recibimos el color de button
  @Input() color: 'success' |'primary'|'danger'|'gray-light' = 'primary';
  // recibimos el color de texto del button
  @Input() text: 'white' |'gray' = 'white';

  //customClass = this.colorsPal + this.textPal

  get colorsPal(){
    return {
      // segun el valor de la variable color, se definirá los valores del objeto colorsPal
      'bg-success-700': this.color === 'success',
      'hover:bg-success-800': this.color === 'success',
      'focus:ring-success-300': this.color === 'success',
      'bg-gray-200': this.color === 'gray-light',
      'hover:bg-gray-500': this.color === 'gray-light',
      'focus:ring-gray-50': this.color === 'gray-light',
      'bg-primary-700': this.color === 'primary',
      'hover:bg-primary-800': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',
      'bg-red-700': this.color === 'danger',
      'hover:bg-red-800': this.color === 'danger',
      'focus:ring-red-300': this.color === 'danger',
      'text-gray-800': this.text === 'gray',
      'text-white': this.text === 'white',
    };
  }

}
