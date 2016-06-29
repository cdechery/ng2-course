import {Component} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {ListItem} from '../../list-item';

@Component({
    selector: 'add-item',
    templateUrl: 'html/add-item.template.html',
    outputs: ['itemAdded']
})
export class AddItemComponent {
    item = { name: '', amount: 0 };
    itemAdded = new EventEmitter<ListItem>();

    addItem() {
        this.itemAdded.emit( this.item );
    }
}