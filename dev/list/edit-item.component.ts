import {Component} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {ListItem} from '../../list-item';

@Component({
    selector: 'edit-item',
    templateUrl: 'html/edit-item.template.html',
    inputs: ['itemToEdit', 'indexToDelete'],
    outputs: ['itemDeleted']
})
export class EditItemComponent {
    itemToEdit = new ListItem('', 0);
    indexToDelete : number;

    itemDeleted = new EventEmitter();

    deleteItem() {
        this.itemDeleted.emit( null );
    }
}