import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoLIstComponent implements OnInit {

  todoText='';
  todos: string[]=[];
  completedTasks: string[]=[]
  finished

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(){
    this.todos.push(this.todoText)
    console.log(this.todos)
    this.todoText=''
  }

  remove(item){
    console.log('wants to remove', item);

    for(let i=0; i<=this.todos.length; i++){
    if(this.todos[i]==item){
       this.todos.splice(i,1)
      }
    }
  }

  done(item){

    for(let i=0; i<=this.todos.length; i++){
      if(this.todos[i]==item){
         this.finished= this.todos.splice(i,1)
         this.completedTasks.push(this.finished)
        }
      }

  }
}
