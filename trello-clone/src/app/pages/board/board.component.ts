import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Column, ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  // estilos para las animaciones
  styleUrls: ['./board.component.scss'],

})
export class BoardComponent {

  columns : Column[] = [
    {
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'Task 1',
        },
        {
          id: '2',
          title: 'Task 2',
        },
        {
          id: '3',
          title: 'Task 3',
        }
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '1',
          title: 'Task 1',
        },
        {
          id: '2',
          title: 'Task 2',
        },
        {
          id: '3',
          title: 'Task 3',
        }
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: '1',
          title: 'Task 1',
        }
      ]
    }

  ];

  todos: ToDo[] =[];
  doing: ToDo[] =[];
  done: ToDo[] =[];

  /* Se ejecuta cada vez que se mueve algun elemento dentro del contenedor,
  moveItemInArray, ordena automaticamente los elementos en el array
  - si el container anterior y el actual son el mismo, entonces se esta moviendo en el mismo array,
  - sino con transferArrayItem, se transfiere entre Arrays
  */
  drop(event:CdkDragDrop<ToDo[]>){
    if (event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }

  addColumn(){
    this.columns.push({
      title: 'New Column',
      todos: [],
    })
  }

}
