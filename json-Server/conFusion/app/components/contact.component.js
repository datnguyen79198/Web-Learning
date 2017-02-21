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
var feedback_services_1 = require('../services/feedback.services');
var ContactComponent = (function () {
    function ContactComponent(feedbackService) {
        this.feedbackService = feedbackService;
        this.channels = [{ value: "tel", label: "Tel." }, { value: "Email", label: "Email" }];
        this.invalidChannelSelection = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.tel = { areaCode: '', number: '' };
        this.feedback = {
            id: null,
            mychannel: '',
            firstName: '',
            lastName: '',
            agree: false,
            email: '',
            myChannel: '',
            comments: '',
            tel: this.tel
        };
    };
    ContactComponent.prototype.sendFeedback = function () {
        var _this = this;
        this.feedbackService.save(this.feedback).then(function (feedback) {
            _this.tel = { areaCode: '', number: '' };
            _this.feedback = {
                id: null,
                mychannel: '',
                firstName: '',
                lastName: '',
                agree: false,
                email: '',
                myChannel: '',
                comments: '',
                tel: _this.tel
            };
        });
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'my-contact',
            templateUrl: 'app/views/contact.component.html',
            providers: [feedback_services_1.FeedbackServices]
        }), 
        __metadata('design:paramtypes', [feedback_services_1.FeedbackServices])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map