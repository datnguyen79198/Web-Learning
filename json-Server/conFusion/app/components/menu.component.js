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
var router_deprecated_1 = require('@angular/router-deprecated');
var menu_services_1 = require('../services/menu.services');
var menu_pipes_1 = require('../pipes/menu.pipes');
var dishdetail_component_1 = require('./dishdetail.component');
var MenuComponent = (function () {
    function MenuComponent(router, menuService) {
        this.router = router;
        this.menuService = menuService;
        this.tab = 1;
        this.filtText = '';
        this.showMenu = true;
        this.showDetails = false;
        this.message = "Loading...";
    }
    MenuComponent.prototype.toggleDetails = function () {
        this.showDetails = !this.showDetails;
    };
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.getDishes().then(function (dishes) {
            _this.dishes = dishes;
        });
    };
    MenuComponent.prototype.isSelected = function (index) {
        return (this.tab === index);
    };
    MenuComponent.prototype.select = function (index) {
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
    };
    MenuComponent.prototype.gotoDetail = function (dish_id) {
        this.router.navigate(['DishDetail', { id: dish_id }]);
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'my-menu',
            templateUrl: 'app/views/menu.component.html',
            providers: [menu_services_1.MenuService],
            directives: [dishdetail_component_1.DishDetailComponent],
            pipes: [menu_pipes_1.MenuPipes]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, menu_services_1.MenuService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map