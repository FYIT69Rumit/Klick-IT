import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminComponent } from '../admin/admin.component';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  constructor(private formBuilder: FormBuilder, private dialogRef : MatDialogRef<AdminLoginComponent>, private api : ApiService, private router:Router) {}

  ngOnInit():void {
    this.AdminForm = this.formBuilder.group({
      password:['',Validators.required]
    })
  }

  hide = true;

  AdminForm !: FormGroup;

  AdminDetails(){
    if(this.AdminForm.valid){
      const password = document.getElementById('password') as HTMLInputElement | null;
      const pass = password?.value
      if(pass === 'admin') {
          alert("Admin Logged in successfully");
          this.router.navigate(['admin']);
        }
          else {
          alert("Error logging in admin");
        }
      }
    }
  }