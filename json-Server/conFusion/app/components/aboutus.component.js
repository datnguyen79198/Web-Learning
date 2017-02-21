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
var leadership_services_1 = require('../services/leadership.services');
var AboutComponent = (function () {
    function AboutComponent(router, leadershipService) {
        this.router = router;
        this.leadershipService = leadershipService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leadershipService.getLeaderships().then(function (leaderships) {
            _this.leaderships = leaderships;
        });
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'my-about',
            templateUrl: 'app/views/aboutus.component.html',
            providers: [leadership_services_1.LeadershipService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, leadership_services_1.LeadershipService])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=aboutus.component.js.map