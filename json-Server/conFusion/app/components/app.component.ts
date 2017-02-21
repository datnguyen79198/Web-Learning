import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

import { HomeComponent } from './home.component';
import { AboutComponent } from './aboutus.component';
import { MenuComponent } from './menu.component';
import { DishDetailComponent } from './dishdetail.component';
import { ContactComponent } from './contact.component';

//router
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
	selector: 'my-app',
	templateUrl: 'app/views/app.component.html',
	directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent]
})

@RouteConfig([
	{
		path: '/home',
		name: 'Home',
		component: HomeComponent,
		useAsDefault: true

	},
	{
		path: '/about',
		name: 'About',
		component: AboutComponent,
	},
	{
		path: '/menu',
		name: 'Menu',
		component: MenuComponent
	},
	{
		path: '/menu/:id',
		name: 'DishDetail',
		component: DishDetailComponent
	},
	{
		path: '/contact',
		name: 'Contact',
		component: ContactComponent
	}
])

export class AppComponent{
	title = "ConFusion";
}