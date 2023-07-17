import { Component, OnInit, ViewChild } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogTokenComponent } from '../dialog-token/dialog-token.component';
import { ApiService } from '../services/api.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  title = 'Token';

  displayedColumns: string[] = ['name', 'email', 'location', 'preference', 'address', 'service', 'date','time','action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private dialog: MatDialog, private api : ApiService) {

  }
  ngOnInit(): void {
    this.getAllToken();
  }

  openDialog() {
    this.dialog.open(DialogTokenComponent, {
      width: '50%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllToken();
      }
    })
  }

  getAllToken() {
    this.api.getToken()
    .subscribe ({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Error while fetching the data!")
      }
    })
  }

  completeToken(data:any, id:number){
    this.api.completeToken(data)
    .subscribe({
      next:(res)=>{
        alert("Token compeleted successfully!");
        this.getAllToken();
        this.api.deleteToken(id)
        .subscribe({
          next:(res)=>{
            alert("Token deleted successfully!");
            this.getAllToken();
          },
          error:()=> {
            alert("Error while deleting the token!")
          }
        })
      },
      error:()=>{
        alert("Error while submiting the token!");
      }
    });
  }

}
