System.register(['angular2/core', './add-item.component', './edit-item.component'], function(exports_1, context_1) {
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
    var core_1, add_item_component_1, edit_item_component_1;
    var ItemListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (add_item_component_1_1) {
                add_item_component_1 = add_item_component_1_1;
            },
            function (edit_item_component_1_1) {
                edit_item_component_1 = edit_item_component_1_1;
            }],
        execute: function() {
            ItemListComponent = (function () {
                function ItemListComponent() {
                    this.itemList = new Array();
                    this.selectedItem = { name: '', amount: 0 };
                    this.editOpened = false;
                }
                ItemListComponent.prototype.onItemAdded = function (item) {
                    this.itemList.push({
                        name: item.name,
                        amount: item.amount
                    });
                };
                ItemListComponent.prototype.openEdit = function (item, index) {
                    this.editOpened = true;
                    this.selectedItem = item;
                    this.selectedIndex = index;
                };
                ItemListComponent.prototype.deleteItem = function () {
                    this.itemList.splice(this.selectedIndex, 1);
                    this.editOpened = false;
                    this.selectedIndex = null;
                    this.selectedItem = { name: '', amount: 0 };
                };
                ItemListComponent = __decorate([
                    core_1.Component({
                        selector: 'item-list',
                        templateUrl: 'html/item-list.template.html',
                        directives: [add_item_component_1.AddItemComponent, edit_item_component_1.EditItemComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ItemListComponent);
                return ItemListComponent;
            }());
            exports_1("ItemListComponent", ItemListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QvaXRlbS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUFBO29CQUNJLGFBQVEsR0FBRyxJQUFJLEtBQUssRUFBb0MsQ0FBQztvQkFDekQsaUJBQVksR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUV2QyxlQUFVLEdBQUcsS0FBSyxDQUFDO2dCQXFCdkIsQ0FBQztnQkFuQkcsdUNBQVcsR0FBWCxVQUFhLElBQXNDO29CQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7d0JBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO3FCQUN0QixDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCxvQ0FBUSxHQUFSLFVBQVUsSUFBSSxFQUFFLEtBQUs7b0JBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztvQkFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUQsc0NBQVUsR0FBVjtvQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBRSxDQUFDO29CQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztvQkFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7b0JBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFDaEQsQ0FBQztnQkE3Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsV0FBVyxFQUFFLDhCQUE4Qjt3QkFDM0MsVUFBVSxFQUFFLENBQUMscUNBQWdCLEVBQUUsdUNBQWlCLENBQUM7cUJBQ3BELENBQUM7O3FDQUFBO2dCQTBCRix3QkFBQztZQUFELENBekJBLEFBeUJDLElBQUE7WUF6QkQsaURBeUJDLENBQUEiLCJmaWxlIjoibGlzdC9pdGVtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBZGRJdGVtQ29tcG9uZW50fSBmcm9tICcuL2FkZC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge0VkaXRJdGVtQ29tcG9uZW50fSBmcm9tICcuL2VkaXQtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSAnLi4vbGlzdC1pdGVtJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpdGVtLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnaHRtbC9pdGVtLWxpc3QudGVtcGxhdGUuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW0FkZEl0ZW1Db21wb25lbnQsIEVkaXRJdGVtQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtTGlzdENvbXBvbmVudCB7XG4gICAgaXRlbUxpc3QgPSBuZXcgQXJyYXk8eyBuYW1lOiBzdHJpbmcsIGFtb3VudDogbnVtYmVyIH0+KCk7XG4gICAgc2VsZWN0ZWRJdGVtID0geyBuYW1lOiAnJywgYW1vdW50OiAwIH07XG4gICAgc2VsZWN0ZWRJbmRleCA6IG51bWJlcjtcbiAgICBlZGl0T3BlbmVkID0gZmFsc2U7XG5cbiAgICBvbkl0ZW1BZGRlZCggaXRlbTogeyBuYW1lOiBzdHJpbmcsIGFtb3VudDogbnVtYmVyIH0gKSB7XG4gICAgICAgIHRoaXMuaXRlbUxpc3QucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICBhbW91bnQ6IGl0ZW0uYW1vdW50XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9wZW5FZGl0KCBpdGVtLCBpbmRleCApIHtcbiAgICAgICAgdGhpcy5lZGl0T3BlbmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDsgXG4gICAgfVxuXG4gICAgZGVsZXRlSXRlbSgpIHtcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5zcGxpY2UoIHRoaXMuc2VsZWN0ZWRJbmRleCwgMSApO1xuICAgICAgICB0aGlzLmVkaXRPcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB7IG5hbWU6ICcnLCBhbW91bnQ6IDAgfTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
