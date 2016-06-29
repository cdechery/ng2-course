import {Component} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {AddItemComponent} from './add-item.component';
import {EditItemComponent} from './edit-item.component';
import {ListItem} from '../../list-item';

@Component({
    selector: 'item-list',
    templateUrl: 'html/item-list.template.html',
    directives: [AddItemComponent, EditItemComponent]
})
export class ItemListComponent {
    itemList = new Array<ListItem>();
    selectedItem = new ListItem('', 0);
    selectedIndex : number;
    editOpened = false;

    onItemAdded( item: ListItem ) {
        this.itemList.push({
            name: item.name,
            amount: item.amount
        });
    }

    openEdit( item, index ) {
        this.editOpened = true;
        this.selectedItem = item;
        this.selectedIndex = index; 
    }

    deleteItem() {
        this.itemList.splice( this.selectedIndex, 1 );
        this.editOpened = false;
        this.selectedIndex = null;
        this.selectedItem = new ListItem('', 0);
    }
}