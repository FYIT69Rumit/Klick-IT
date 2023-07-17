import { Component, HostListener } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { DialogTokenComponent } from '../dialog-token/dialog-token.component';
import { Router } from '@angular/router';
import { AdminLoginComponent } from '../admin-login/admin-login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title = 'Token';

  constructor(public dialog: MatDialog, private router:Router) {}

  openDialog(): void {
    this.dialog.open(DialogTokenComponent, {
      width: '50%'
    });
  }

  openAdmin(): void {
    this.dialog.open(AdminLoginComponent, {
      width: '50%'
    });
  }

  goto(fragment:any) {
    this.router.navigateByUrl('home#'+fragment);
  }
}
