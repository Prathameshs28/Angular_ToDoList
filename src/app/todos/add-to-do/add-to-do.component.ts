import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css'],
})
export class AddToDoComponent implements OnInit {
  @Output() todoAdd = new EventEmitter();

  title!: any;
  description!: any;
  active: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(userForm: NgForm) {
    const todo = {
      title: this.title,
      description: this.description,
      active: this.active,
      taskDate: new Date(),
    };
    // console.log(todo);
    this.todoAdd.emit(todo);
    userForm.resetForm();
  }
}
