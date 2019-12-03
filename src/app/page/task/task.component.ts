import {Component, OnInit} from '@angular/core';
import {Task} from 'src/app/shared/model/task';
import {TaskService} from '../../shared/service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

}
