import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ButtonRendererComponent } from '../button-renderer/button-renderer.component';

@Component({
  selector: 'myorg-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {

  @Input('columns') columnsProps: Array<string>;
  @Input('rows') rowsProps: Array<string>;

  gridApi: any = null;
  gridColumnApi: any = null;
  gridOptions: any = {};
  columnDefs = [];
  rowData = [];

  frameworkComponents: any;
  rowDataClicked1 = {};


  ngOnChanges(changes: SimpleChanges) {
    console.log(this.rowsProps);
    this.columnDefs = [];
    this.columnsProps.forEach(item => {
      const obj = {
        headerName: item.toUpperCase(),
        field: item,
        cellClass: 'my-class'
      };
      this.columnDefs.push(obj);      
    });

    this.columnDefs.push(
      {
        headerName: 'Button Col 1',
        cellRenderer: 'buttonRenderer',
        cellRendererParams: {
          onClick: this.onBtnClick1.bind(this),
          label: 'Click 1'
        }
      }
    )

    
    if(this.gridApi) {
      this.rowData = [];
      this.gridApi.setColumnDefs(this.columnDefs);
      this.rowData = this.rowsProps;
      this.gridOptions.defaultColDef =  {
        resizable: true
      }
      this.gridApi.sizeColumnsToFit();
      console.log(this.rowData);
    }
    
  }
  

  constructor() { 
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
  }

  ngOnInit(): void {
  }

  onBtnClick1(e) {
    this.rowDataClicked1 = e.rowData;
    console.log(this.rowDataClicked1);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridOptions.rowHeight = 50;
    this.gridOptions.rowClass = 'my-green-class';
    this.gridOptions.defaultColDef =  {
      resizable: true
    }
    this.gridApi.sizeColumnsToFit();
  }

}
