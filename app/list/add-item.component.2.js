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
    var ItemListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            ItemListComponent = (function () {
                function ItemListComponent() {
                    this.itemList = [{ name: '', amount: 0 }];
                    this.itemAdded = new core_2.EventEmitter();
                }
                ItemListComponent.prototype.addItem = function () {
                    this.itemAdded.emit(this.item);
                };
                ItemListComponent = __decorate([
                    core_1.Component({
                        selector: 'item-list',
                        templateUrl: 'html/item-list.template.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ItemListComponent);
                return ItemListComponent;
            }());
            exports_1("ItemListComponent", ItemListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QvYWRkLWl0ZW0uY29tcG9uZW50LjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBQUE7b0JBQ0ksYUFBUSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNyQyxjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFrQyxDQUFDO2dCQUtuRSxDQUFDO2dCQUhHLG1DQUFPLEdBQVA7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDO2dCQUNyQyxDQUFDO2dCQVZMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFdBQVcsRUFBRSw4QkFBOEI7cUJBQzlDLENBQUM7O3FDQUFBO2dCQVFGLHdCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCxpREFPQyxDQUFBIiwiZmlsZSI6Imxpc3QvYWRkLWl0ZW0uY29tcG9uZW50LjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaXRlbS1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2h0bWwvaXRlbS1saXN0LnRlbXBsYXRlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1MaXN0Q29tcG9uZW50IHtcbiAgICBpdGVtTGlzdCA9IFt7IG5hbWU6ICcnLCBhbW91bnQ6IDAgfV07XG4gICAgaXRlbUFkZGVkID0gbmV3IEV2ZW50RW1pdHRlcjx7bmFtZTogc3RyaW5nLCBhbW91bnQ6IG51bWJlcn0+KCk7XG5cbiAgICBhZGRJdGVtKCkge1xuICAgICAgICB0aGlzLml0ZW1BZGRlZC5lbWl0KCB0aGlzLml0ZW0gKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
