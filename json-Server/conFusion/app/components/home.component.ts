import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Menu } from '../objects/Menu';
import { Promotion } from '../objects/Promotion';
import { Leadership } from '../objects/Leadership';

import { MenuService } from '../services/menu.services';
import { LeadershipService } from '../services/leadership.services';
import { PromotionService } from '../services/promotion.services';
import { DishDetailComponent } from './dishdetail.component';

@Component({
  selector: 'my-home',
  templateUrl: 'app/views/home.component.html',
  providers: [MenuService, LeadershipService, PromotionService],
  directives: [DishDetailComponent]
})

export class HomeComponent implements OnInit{
	dish : Menu;
	showDish = false;
	message = "Loading...";

	promotion : Promotion;
	showPromotion = false;
	promotionMessage = "Loading...";

	leadership : Leadership;
	showLeadership = false;
	leadershipMessage = "Loading...";

  constructor(private router: Router, private menuService: MenuService, private leadershipService: LeadershipService, private promotionService: PromotionService) { }


	ngOnInit(){
		this.menuService.getDish(0).then(
    		dish => {
          console.log(dish);
    			this.dish = dish;
    			this.showDish = true;
    			this.message = "";
    		}
		);

		this.promotionService.getPromotion(0).then(
    		promotion => {
    			this.promotion = promotion;
    			this.showPromotion = true;
    			this.promotionMessage = "";

    		}
		);

		this.leadershipService.getLeadership(0).then(
    		leadership => {
    			this.leadership = leadership;
    			this.leadershipMessage = "";
    			this.showLeadership = true;
    		}
		);

	}
}