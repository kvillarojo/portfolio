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
     // return {
     //   "projects": [
     //     {
     //       "name": "Dev Partnerns CRM",
     //       "img_url": "",
     //       "url": "devpartners.co/crm"
     //     },
     //     {
     //       "name": "RTV Foundation",
     //       "img_url": "''",
     //       "url": "rtvfoundation.org"
     //     },
     //     {
     //       "name": "HT Realty",
     //       "img_url": "''",
     //       "url": "sellers.htrealty.com"
     //     },
     //     {
     //       "name": "Don Sakagawa Realty",
     //       "img_url": "",
     //       "url": "portal.donsakagawarealty.com"
     //     }
     //   ],
     //   "techSupport": [
     //     {
     //       "name": "Nature Help",
     //       "img_url": "",
     //       "url": "natureshelp.com.au"
     //     },
     //     {
     //       "name": "Turmeric Australia",
     //       "img_url": "",
     //       "url": "turmericaustralia.com.au"
     //     },
     //     {
     //       "name": "That's My Spot",
     //       "img_url": "",
     //       "url": "thatsmyspot.com.au"
     //     },
     //     {
     //       "name": "Vera May",
     //       "img_url": "",
     //       "url": "veramay.com.au"
     //     },
     //     {
     //       "name": "Eren & Tara",
     //       "img_url": "",
     //       "url": "erinandtara.com.au/"
     //     },
     //     {
     //       "name": "WonderHub",
     //       "img_url": "",
     //       "url": "wonderhub.co.uk"
     //     }
     //   ]
     // }
   }
}
