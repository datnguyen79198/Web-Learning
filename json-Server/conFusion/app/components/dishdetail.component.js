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
var router_deprecated_2 = require('@angular/router-deprecated');
var DishDetailComponent = (function () {
    function DishDetailComponent(router, menuService, routeParams) {
        this.router = router;
        this.menuService = menuService;
        this.routeParams = routeParams;
        this.message = "Loading...";
        this.showDish = false;
    }
    DishDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mycomment = { comment: '', rating: 5, author: '', date: Date.now() };
        var id = +this.routeParams.get('id');
        this.menuService.getDish(id).then(function (dish) {
            _this.dish = dish;
            _this.message = "";
            _this.showDish = true;
        });
    };
    DishDetailComponent.prototype.submitComment = function () {
        var _this = this;
        this.menuService.addcomment(this.mycomment, this.dish).then(function (dish) {
            _this.menuService.put(dish).then(function (dish) {
                _this.dish = dish;
            });
        });
    };
    DishDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-dishdetail',
            templateUrl: 'app/views/dishdetail.component.html',
            providers: [menu_services_1.MenuService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, menu_services_1.MenuService, router_deprecated_2.RouteParams])
    ], DishDetailComponent);
    return DishDetailComponent;
}());
exports.DishDetailComponent = DishDetailComponent;
//# sourceMappingURL=dishdetail.component.js.map