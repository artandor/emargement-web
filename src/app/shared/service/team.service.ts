import {Injectable} from '@angular/core';
import {Team} from '../model/team';
import {TEAMMOCK} from '../mock/mock-team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() {
  }

  public getAllTasks(): Team[] {
    return TEAMMOCK;
  }
}
