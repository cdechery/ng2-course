System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2;
    var AddItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            AddItemComponent = (function () {
                function AddItemComponent() {
                    this.item = { name: '', amount: 0 };
                    this.itemAdded = new core_2.EventEmitter();
                }
                AddItemComponent.prototype.addItem = function () {
                    this.itemAdded.emit(this.item);
                };
                AddItemComponent = __decorate([
                    core_1.Component({
                        selector: 'add-item',
                        templateUrl: 'html/add-item.template.html',
                        outputs: ['itemAdded']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AddItemComponent);
                return AddItemComponent;
            }());
            exports_1("AddItemComponent", AddItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QvYWRkLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUFBO29CQUNJLFNBQUksR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUMvQixjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFrQyxDQUFDO2dCQUtuRSxDQUFDO2dCQUhHLGtDQUFPLEdBQVA7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDO2dCQUNyQyxDQUFDO2dCQVhMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFdBQVcsRUFBRSw2QkFBNkI7d0JBQzFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztxQkFDekIsQ0FBQzs7b0NBQUE7Z0JBUUYsdUJBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELCtDQU9DLENBQUEiLCJmaWxlIjoibGlzdC9hZGQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWRkLWl0ZW0nLFxuICAgIHRlbXBsYXRlVXJsOiAnaHRtbC9hZGQtaXRlbS50ZW1wbGF0ZS5odG1sJyxcbiAgICBvdXRwdXRzOiBbJ2l0ZW1BZGRlZCddXG59KVxuZXhwb3J0IGNsYXNzIEFkZEl0ZW1Db21wb25lbnQge1xuICAgIGl0ZW0gPSB7IG5hbWU6ICcnLCBhbW91bnQ6IDAgfTtcbiAgICBpdGVtQWRkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtuYW1lOiBzdHJpbmcsIGFtb3VudDogbnVtYmVyfT4oKTtcblxuICAgIGFkZEl0ZW0oKSB7XG4gICAgICAgIHRoaXMuaXRlbUFkZGVkLmVtaXQoIHRoaXMuaXRlbSApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
