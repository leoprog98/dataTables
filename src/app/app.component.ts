import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  edit: string;
  delete: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', edit: '', delete: ''},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', edit: '', delete: ''},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', edit: '', delete: ''},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', edit: '', delete: ''},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', edit: '', delete: ''},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', edit: '', delete: ''},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', edit: '', delete: ''},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', edit: '', delete: ''},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', edit: '', delete: ''},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', edit: '', delete: ''},
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
  title='x'
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Array<PeriodicElement>();

  eliminar(i: number){
    ELEMENT_DATA[i-1].position = 0;
    this.dataSource = ELEMENT_DATA;
    this.clickedRows.splice;
  }
}