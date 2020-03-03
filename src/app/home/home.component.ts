import { Component, OnInit } from '@angular/core';
import bulmaCarousel from 'bulma-carousel';
import {ProfileService} from '../core/services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    bulmaCarousel.attach('#carousel-demo', {
      slidesToScroll: 1,
      slidesToShow: 4
    });

    // this.projects = this.profileService.getProjects()['projects'];

    this.profileService.getProjects()
      .subscribe(project => {
        this.projects = project['projects'].filter(x => x.role === 'Full Stack');
      });
  }
}
