import { Component, ViewChild } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {MatTableDataSource} from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {UpdatepopupComponent} from "../updatepopup/updatepopup.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private service: AuthService, private dialog:MatDialog) {
    this.loaduser();
  }
  userlist: any;
  dataSource: any;

  @ViewChild( MatPaginator ) paginator !:MatPaginator;
  @ViewChild( MatSort ) sort !: MatSort;

  loaduser(){
    this.service.GetAll().subscribe(res => {
      this.userlist = res;
      this.dataSource = new MatTableDataSource(this.userlist);
      this.dataSource.paginator =  this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  displayedColumns: string[] = ['username', 'name', 'email','role', 'status','action'];
  UpdateUser(code: any){
    this.dialog.open(UpdatepopupComponent,{
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'500ms',
      width: '50%',
      data:{
        usercode:code,
      }
    })
  }

  opendialog(){

  }
}
