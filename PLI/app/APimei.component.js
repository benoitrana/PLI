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
var APimeiComponent = (function () {
    function APimeiComponent() {
        this.childEvent = new core_1.EventEmitter();
        this.printInput = true;
    }
    APimeiComponent.prototype.ngDoCheck = function (completed) {
        for (var i = 0; i < this.completed.length; i++)
            if (this.completed[i].component == 'apimei')
                this.pannelClass = this.completed[i].class;
    };
    APimeiComponent.prototype.saveStep = function (deviceValue) {
        this.childEvent.emit({ status: 'completed', etape: 3 });
    };
    APimeiComponent.prototype.ignoreStep = function (value) {
        this.printInput = false;
        //this.printInput = true;
        this.saveStep('deviceValue');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], APimeiComponent.prototype, "completed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], APimeiComponent.prototype, "childEvent", void 0);
    APimeiComponent = __decorate([
        core_1.Component({
            selector: 'ap-imei',
            templateUrl: 'app/APimei.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], APimeiComponent);
    return APimeiComponent;
}());
exports.APimeiComponent = APimeiComponent;
//# sourceMappingURL=APimei.component.js.map