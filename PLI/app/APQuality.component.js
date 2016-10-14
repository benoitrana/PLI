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
var APQualityComponent = (function () {
    function APQualityComponent() {
        this.childEvent = new core_1.EventEmitter();
        this.blockquote = [
            { name: 'blockquotesuccess', className: 'blockquote-success', class: '', selected: false },
            { name: 'blockquotewarning', className: 'blockquote-warning', class: '', selected: false },
            { name: 'blockquotedanger', className: 'blockquote-danger', class: '', selected: false }
        ];
    }
    APQualityComponent.prototype.ngDoCheck = function (completed) {
        for (var i = 0; i < this.completed.length; i++)
            if (this.completed[i].component == 'apquality')
                this.pannelClass = this.completed[i].class;
    };
    APQualityComponent.prototype.saveStep = function (deviceValue) {
        this.childEvent.emit({ status: 'completed', etape: 7 });
    };
    APQualityComponent.prototype.selectedQuality = function (who) {
        for (var i = 0; i < this.blockquote.length; i++) {
            if (who == this.blockquote[i].name) {
                this.blockquote[i].class = this.blockquote[i].className;
                this.blockquote[i].selected = true;
            }
            else {
                this.blockquote[i].class = '';
                this.blockquote[i].selected = false;
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], APQualityComponent.prototype, "completed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], APQualityComponent.prototype, "childEvent", void 0);
    APQualityComponent = __decorate([
        core_1.Component({
            selector: 'ap-quality',
            templateUrl: 'app/APQuality.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], APQualityComponent);
    return APQualityComponent;
}());
exports.APQualityComponent = APQualityComponent;
//# sourceMappingURL=APQuality.component.js.map