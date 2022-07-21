import { Component, OnInit, Input } from '@angular/core';
import { TodoList } from 'src/ToData';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  @Input() listData: TodoList | any;

  editBtn: boolean = false;

  updatedTitle!: any;
  updateddescription!: any;

  localItem?: any;

  idx!: number | undefined;

  toDos?: TodoList[] | any;

  constructor() {}

  ngOnInit(): void {
    this.localItem = localStorage.getItem('toDos');
    if (this.localItem == null) {
      this.toDos = [];
    } else {
      this.toDos = JSON.parse(this.localItem);
      // console.log(this.toDos);
    }
  }

  addTodo(todo: any) {
    // console.log(todo);
    this.toDos?.push(todo);
    localStorage.setItem('toDos', JSON.stringify(this.toDos));
  } 

  deleteList(lst: any) {
    // console.log(lst);
    const index: any = this.toDos?.indexOf(lst);
    this.toDos?.splice(index, 1);
    localStorage.setItem('toDos', JSON.stringify(this.toDos));
  }

  editTask(lst: any) {
    console.log(lst);

    this.editBtn = true;
    this.updatedTitle = lst.title;
    this.updateddescription = lst.description;

    this.idx = this.toDos?.indexOf(lst);
  }

  update(t: any, d: any) {
    // console.log(this.idx);

    let nData: any = localStorage.getItem('toDos');
    nData = JSON.parse(nData);
    let temp = {
      title: t,
      description: d,
      taskDate: new Date(),
      active: true,
    };

    nData?.splice(this.idx, 1, temp);
    localStorage.setItem('toDos', JSON.stringify(nData));

    this.editBtn = false;
    this.ngOnInit();
  }

  cancel() {
    // console.log('cancel')

    this.editBtn = !this.editBtn;
  }

  onCheckboxClick(todo: any) {
    const index = this.toDos?.indexOf(todo);
    this.toDos[index].active = !this.toDos[index].active;
    localStorage.setItem('toDos', JSON.stringify(this.toDos));
  }
}
