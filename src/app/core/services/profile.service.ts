import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

   apiUrl = 'https://raw.githubusercontent.com/kvillarojo/profile-endpoints/master/profile.json';
   constructor( private http: HttpClient ) {}

   getProjects() {
     return this.http.get(`${this.apiUrl}`);
   }
}
