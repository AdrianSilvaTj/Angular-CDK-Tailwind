import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent {

  // recibimos el tipo de button
  @Input() typeBtn: 'button' |'reset'|'submit' = 'button';
  // recibimos el color de button
  @Input() color: 'success' |'primary'|'danger' = 'primary';

  get colorsPal(){
    return {
      // segun el valor de la variable color, se definirá los valores del objeto colorsPal
      'bg-success-700': this.color === 'success',
      'hover:bg-success-800': this.color === 'success',
      'focus:ring-success-300': this.color === 'success',
      'bg-primary-700': this.color === 'primary',
      'hover:bg-primary-800': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',
      'bg-danger-700': this.color === 'danger',
      'hover:bg-danger-800': this.color === 'danger',
      'focus:ring-danger-300': this.color === 'danger',
    };
  }

}
