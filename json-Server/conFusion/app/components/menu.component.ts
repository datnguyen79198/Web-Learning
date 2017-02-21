import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { MenuService } from '../services/menu.services';
import { Menu } from '../objects/Menu';
import { MenuPipes } from '../pipes/menu.pipes';
import { DishDetailComponent } from './dishdetail.component';

@Component({
  selector: 'my-menu',
  templateUrl: 'app/views/menu.component.html',
  providers: [MenuService],
  directives: [DishDetailComponent],
  pipes: [MenuPipes]
})

export class MenuComponent implements OnInit{
	dishes: Menu[];
	tab = 1;
	filtText = '';
	showMenu = true;
	showDetails = false;
	error: any;
	message =  "Loading...";

  	constructor(private router: Router, private menuService: MenuService) { }


	toggleDetails(){
		this.showDetails = !this.showDetails;
	}

	ngOnInit(){
    	this.menuService.getDishes().then(
    		dishes => {
    			this.dishes = dishes;
    		}
		);

	}

	isSelected(index: number){
		return (this.tab === index);
	}

	select(index: number){
 		this.tab = index;
                
        if (index === 2) {
			this.filtText = "appetizer";
		}
		else if (index === 3) {
			this.filtText = "mains";
        }
        else if (index === 4) {
            this.filtText = "dessert";
        }
        else {
            this.filtText = "";
        }		
	}

	gotoDetail(dish_id: number){
   	 this.router.navigate(['DishDetail', { id: dish_id }]);

	}
}