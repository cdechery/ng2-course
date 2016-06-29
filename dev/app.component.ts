import {Component} from 'angular2/core';
import {ItemListComponent} from './list/item-list.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Minha Lista</h1>
        <item-list></item-list>
    `,
    directives: [ItemListComponent]
})
export class AppComponent {
}
