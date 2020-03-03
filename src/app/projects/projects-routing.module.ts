import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectComponent} from './project/project.component';
import {ProjectListComponent} from './project-list/project-list.component';


const routes: Routes = [
  { path: '', component: ProjectListComponent },
    { path: ':projectname', component: ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
