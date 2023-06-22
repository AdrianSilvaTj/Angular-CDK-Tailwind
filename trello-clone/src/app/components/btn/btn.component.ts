import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent {

  // recibimos el tipo de button
  @Input() typeBtn: 'button' |'reset'|'submit' = 'button';
  // recibimos el color de button
  @Input() color: 'success' |'primary'|'danger'|'grayLight' = 'primary';
  // recibimos el color de texto del button
  @Input() text: 'white' |'gray' = 'white';

  //customClass = this.colorsPal + this.textPal

  mapColors = {
    success: {
      'bg-success-700': true,
      'hover:bg-success-800': true,
      'focus:ring-success-300': true,
      'text-white': true
    },
    primary: {
      'bg-primary-700': true,
      'hover:bg-primary-800': true,
      'focus:ring-primary-300': true,
      'text-white': true
    },
    grayLight: {
      'bg-gray-200': true,
      'hover:bg-gray-500': true,
      'focus:ring-gray-50': true,
      'text-gray-800': true,
    },
    danger: {
      'bg-red-700': true,
      'hover:bg-red-800': true,
      'focus:ring-red-300': true,
      'text-white': true
    }
  }

  get colorsPal(){
    const colors = this.mapColors[this.color];
    if(colors){
      return colors;
    }
    return {};
  }

}
