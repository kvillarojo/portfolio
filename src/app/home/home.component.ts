import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import bulmaCarousel from 'bulma-carousel';
import {ProfileService} from '../core/services/profile.service';
import {NgForm} from '@angular/forms';

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
    this.profileService.getProjects()
      .subscribe(project => {
        this.projects = project['projects'].filter(x => x.role === 'Full Stack');
      });
  }
  onSubmit(f: NgForm): void {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
