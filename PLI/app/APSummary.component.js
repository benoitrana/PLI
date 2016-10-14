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
var APSummaryComponent = (function () {
    function APSummaryComponent() {
        this.childEvent = new core_1.EventEmitter();
    }
    APSummaryComponent.prototype.ngDoCheck = function (completed) {
        for (var i = 0; i < this.completed.length; i++)
            if (this.completed[i].component == 'apsummary')
                this.pannelClass = this.completed[i].class;
    };
    APSummaryComponent.prototype.saveStep = function (deviceValue) {
        this.childEvent.emit({ status: 'completed', etape: 9 });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], APSummaryComponent.prototype, "completed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], APSummaryComponent.prototype, "childEvent", void 0);
    APSummaryComponent = __decorate([
        core_1.Component({
            selector: 'ap-summary',
            templateUrl: 'app/APSummary.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], APSummaryComponent);
    return APSummaryComponent;
}());
exports.APSummaryComponent = APSummaryComponent;
//# sourceMappingURL=APSummary.component.js.map