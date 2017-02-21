"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var header_component_1 = require('./header.component');
var footer_component_1 = require('./footer.component');
var home_component_1 = require('./home.component');
var aboutus_component_1 = require('./aboutus.component');
var menu_component_1 = require('./menu.component');
var dishdetail_component_1 = require('./dishdetail.component');
var contact_component_1 = require('./contact.component');
//router
var router_deprecated_1 = require('@angular/router-deprecated');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "ConFusion";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/views/app.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, footer_component_1.FooterComponent]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/home',
                name: 'Home',
                component: home_component_1.HomeComponent,
                useAsDefault: true
            },
            {
                path: '/about',
                name: 'About',
                component: aboutus_component_1.AboutComponent,
            },
            {
                path: '/menu',
                name: 'Menu',
                component: menu_component_1.MenuComponent
            },
            {
                path: '/menu/:id',
                name: 'DishDetail',
                component: dishdetail_component_1.DishDetailComponent
            },
            {
                path: '/contact',
                name: 'Contact',
                component: contact_component_1.ContactComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map