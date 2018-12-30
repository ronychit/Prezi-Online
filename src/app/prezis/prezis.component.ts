import { Component, OnInit,ViewChild } from '@angular/core';
import { PreziapiService } from  '../preziapi.service';
import {Prezi}  from '../prezi'
import {MatPaginator, MatSort , MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-prezis',
  templateUrl: './prezis.component.html',
  styleUrls: ['./prezis.component.css']
})
export class PrezisComponent implements OnInit {


	private  prezis: Prezi[] = [];

  displayedColumns: string[] = ['id', 'title', 'thumbnail', 'name', 'profileUrl', 'createdAt'];

  public query : String = "";

  dataSource = new MatTableDataSource([]);

  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


 
  constructor(private  preziapiService:  PreziapiService) {

   }

  ngOnInit() {
  	this.getPrezis()
  }

  /* Function to call API end point with Title */
  public searchByTitle() {
    this.prezis = null;
    /* Get all Prezis for blank title search */
    if (this.query === ''){
      this.getPrezis();
    }
    else{
      this.preziapiService.searchByTitle(this.query).subscribe((data: Prezi[]) => {
      this.setTableDataSource(data);
     });
    }    
  }

  /* Function to call API end point to get all Prezis */
  public  getPrezis(){
    this.preziapiService.getPrezis().subscribe((data: Prezi[]) => {
      this.setTableDataSource(data);
     });
  }

  /* Function to filter the prezi data */
  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /* Function to set the table data source */
  public setTableDataSource(data: Prezi[]){

    if (data === null)
        {
          data = [];
        }
        this.prezis = data;
        this.dataSource = new MatTableDataSource(this.prezis);
        this.dataSource.sort = this.sort; 
        this.dataSource.paginator = this.paginator;

  }

}
