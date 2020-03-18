  import { Component, OnInit } from '@angular/core';
  import {Team} from '../../shared/model/team';
  import {TeamService} from '../../shared/service/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teamService : TeamService;

  constructor(teamService: TeamService) {
    this.teamService = teamService;
  }

  ngOnInit() {
    this.getAllTeams();
  }

  getAllTeams(): Team[] {
    return this.teamService.getAllTasks();
  }
}
