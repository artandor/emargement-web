import {Injectable} from '@angular/core';
import {Task} from '../model/task';
import {TASKMOCK} from '../mock/mock-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() {
  }

  public getAllTasks(): Task[] {
    return TASKMOCK;
  }
}
