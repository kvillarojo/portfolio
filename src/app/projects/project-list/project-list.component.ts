import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../profile.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
 projects;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {

    this.profileService.getProjects()
      .subscribe(project => {
        this.projects = project['projects'];
      });
  }

}
