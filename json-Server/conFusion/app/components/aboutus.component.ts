import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Leadership } from '../objects/Leadership';
import { LeadershipService } from '../services/leadership.services';


@Component({
  selector: 'my-about',
  templateUrl: 'app/views/aboutus.component.html',
  providers: [LeadershipService]

})

export class AboutComponent implements OnInit{
	leaderships : Leadership[];

  	constructor(private router: Router, private leadershipService: LeadershipService) { }

	ngOnInit(){
    	this.leadershipService.getLeaderships().then(
    		leaderships => {
    			this.leaderships = leaderships;
    		}
		);
	}
}