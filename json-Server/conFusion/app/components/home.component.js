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
var leadership_services_1 = require('../services/leadership.services');
var promotion_services_1 = require('../services/promotion.services');
var dishdetail_component_1 = require('./dishdetail.component');
var HomeComponent = (function () {
    function HomeComponent(router, menuService, leadershipService, promotionService) {
        this.router = router;
        this.menuService = menuService;
        this.leadershipService = leadershipService;
        this.promotionService = promotionService;
        this.showDish = false;
        this.message = "Loading...";
        this.showPromotion = false;
        this.promotionMessage = "Loading...";
        this.showLeadership = false;
        this.leadershipMessage = "Loading...";
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.getDish(0).then(function (dish) {
            console.log(dish);
            _this.dish = dish;
            _this.showDish = true;
            _this.message = "";
        });
        this.promotionService.getPromotion(0).then(function (promotion) {
            _this.promotion = promotion;
            _this.showPromotion = true;
            _this.promotionMessage = "";
        });
        this.leadershipService.getLeadership(0).then(function (leadership) {
            _this.leadership = leadership;
            _this.leadershipMessage = "";
            _this.showLeadership = true;
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-home',
            templateUrl: 'app/views/home.component.html',
            providers: [menu_services_1.MenuService, leadership_services_1.LeadershipService, promotion_services_1.PromotionService],
            directives: [dishdetail_component_1.DishDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, menu_services_1.MenuService, leadership_services_1.LeadershipService, promotion_services_1.PromotionService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map