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
    var HighlightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            HighlightDirective = (function () {
                function HighlightDirective(_elRef) {
                    this.defaultColor = 'green';
                    this.elRef = null;
                    this.elRef = _elRef;
                    this.elRef.nativeElement.style.color = this.defaultColor;
                }
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighlight]'
                    }), 
                    __metadata('design:paramtypes', [core_2.ElementRef])
                ], HighlightDirective);
                return HighlightDirective;
            }());
            exports_1("HighlightDirective", HighlightDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBSUksNEJBQWEsTUFBbUI7b0JBSGhDLGlCQUFZLEdBQUcsT0FBTyxDQUFDO29CQUN2QixVQUFLLEdBQWdCLElBQUksQ0FBQztvQkFHdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDN0QsQ0FBQztnQkFWTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3FCQUM1QixDQUFDOztzQ0FBQTtnQkFTRix5QkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsbURBUUMsQ0FBQSIsImZpbGUiOiJoaWdobGlnaHQuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbXlIaWdobGlnaHRdJ1xufSlcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHREaXJlY3RpdmUge1xuICAgIGRlZmF1bHRDb2xvciA9ICdncmVlbic7XG4gICAgZWxSZWYgOiBFbGVtZW50UmVmID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCBfZWxSZWYgOiBFbGVtZW50UmVmICkge1xuICAgICAgICB0aGlzLmVsUmVmID0gX2VsUmVmO1xuICAgICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY29sb3IgPSB0aGlzLmRlZmF1bHRDb2xvcjtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
