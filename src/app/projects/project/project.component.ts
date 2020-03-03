import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivationEnd} from '@angular/router';
import {ProfileService} from '../../profile.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project;
  img;
  name;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const projectName = params.projectname;

      this.profileService.getProjects()
        .subscribe(project => {
          this.project = project['projects'].filter(x => x.name === projectName)[0];
          this.img = this.project.img_url;
          this.name = this.project.name;
        });
    });
  }

}
