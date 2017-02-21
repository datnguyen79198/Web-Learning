import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Menu } from '../objects/Menu';
import { Comment } from '../objects/Comments';

import { MenuService } from '../services/menu.services';
import { RouteParams } from '@angular/router-deprecated';

@Component({
  selector: 'my-dishdetail',
  templateUrl: 'app/views/dishdetail.component.html',
  providers: [MenuService]
})

export class DishDetailComponent implements OnInit{
	dish : Menu;
  mycomment : Comment

	message = "Loading...";
	showDish = false;


	constructor(private router: Router, private menuService: MenuService, private routeParams: RouteParams) { }

	ngOnInit(){
    this.mycomment = {comment: '', rating: 5, author: '', date: Date.now()};

		let id = +this.routeParams.get('id');
  	this.menuService.getDish(id).then(
    		dish => {
    			this.dish = dish;
    			this.message = "";
    			this.showDish = true;
    		}
		);		
	}



  submitComment(){
      this.menuService.addcomment(this.mycomment, this.dish).then(
        dish => {
          this.menuService.put(dish).then(
            dish => {
              this.dish = dish;
            }
          );

        }
      );
  }
}