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
    var EditItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            EditItemComponent = (function () {
                function EditItemComponent() {
                    this.itemToEdit = { name: '', amount: 0 };
                    this.itemDeleted = new core_2.EventEmitter();
                }
                EditItemComponent.prototype.deleteItem = function () {
                    this.itemDeleted.emit(null);
                };
                EditItemComponent = __decorate([
                    core_1.Component({
                        selector: 'edit-item',
                        templateUrl: 'html/edit-item.template.html',
                        inputs: ['itemToEdit', 'indexToDelete'],
                        outputs: ['itemDeleted']
                    }), 
                    __metadata('design:paramtypes', [])
                ], EditItemComponent);
                return EditItemComponent;
            }());
            exports_1("EditItemComponent", EditItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QvZWRpdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFBQTtvQkFDSSxlQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFHckMsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFLckMsQ0FBQztnQkFIRyxzQ0FBVSxHQUFWO29CQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxDQUFDO2dCQUNsQyxDQUFDO2dCQWRMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFdBQVcsRUFBRSw4QkFBOEI7d0JBQzNDLE1BQU0sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7d0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztxQkFDM0IsQ0FBQzs7cUNBQUE7Z0JBVUYsd0JBQUM7WUFBRCxDQVRBLEFBU0MsSUFBQTtZQVRELGlEQVNDLENBQUEiLCJmaWxlIjoibGlzdC9lZGl0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2VkaXQtaXRlbScsXG4gICAgdGVtcGxhdGVVcmw6ICdodG1sL2VkaXQtaXRlbS50ZW1wbGF0ZS5odG1sJyxcbiAgICBpbnB1dHM6IFsnaXRlbVRvRWRpdCcsICdpbmRleFRvRGVsZXRlJ10sXG4gICAgb3V0cHV0czogWydpdGVtRGVsZXRlZCddXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRJdGVtQ29tcG9uZW50IHtcbiAgICBpdGVtVG9FZGl0ID0geyBuYW1lOiAnJywgYW1vdW50OiAwIH07XG4gICAgaW5kZXhUb0RlbGV0ZSA6IG51bWJlcjtcblxuICAgIGl0ZW1EZWxldGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgZGVsZXRlSXRlbSgpIHtcbiAgICAgICAgdGhpcy5pdGVtRGVsZXRlZC5lbWl0KCBudWxsICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
