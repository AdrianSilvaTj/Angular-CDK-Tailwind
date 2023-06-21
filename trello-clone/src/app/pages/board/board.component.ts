import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Dialog, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';

import { Column, ToDo } from 'src/app/models/todo.model';
import { TodoDialogComponent } from 'src/app/components/todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  // estilos para las animaciones
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  newTitle = new FormControl('');
  isAddingCol = false;

  columns: Column[] = [
    {
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'Comer',
        },
        {
          id: '2',
          title: 'Trabajar',
        },
        {
          id: '3',
          title: 'Limpiar',
        },
      ],
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '1',
          title: 'Programar',
        },
        {
          id: '2',
          title: 'Leyendo',
        },
        {
          id: '3',
          title: 'Observando',
        },
      ],
    },
    {
      title: 'Done',
      todos: [
        {
          id: '1',
          title: 'Trabajar',
        },
      ],
    },
  ];

  todos: ToDo[] = [];
  doing: ToDo[] = [];
  done: ToDo[] = [];

  constructor(
    private dialog: Dialog
  ){}

  /* Se ejecuta cada vez que se mueve algun elemento dentro del contenedor,
  moveItemInArray, ordena automaticamente los elementos en el array
  - si el container anterior y el actual son el mismo, entonces se esta moviendo en el mismo array,
  - sino con transferArrayItem, se transfiere entre Arrays
  */
  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addColumn() {
    if (this.isAddingCol === false) {
      this.isAddingCol = true;
      // para el focus del input
      setTimeout(() => {
        document.getElementById('newTitle')?.focus();
      }, 10);
    } else {
      this.columns.push({
        title: this.newTitle.value!,
        todos: [],
      });
      this.isAddingCol = false;
      this.newTitle.setValue('');
    }
  }

  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '25%',
      maxWidth: '50%',
      //para enviar datos a el dialog
      data:{
        todo: todo
      }
    });

    //Recibir data del Dialog
    dialogRef.closed.subscribe(output => {
      console.log(output);
    })
  }

}
