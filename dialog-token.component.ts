import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-token',
  templateUrl: './dialog-token.component.html',
  styleUrls: ['./dialog-token.component.scss']
})

export class DialogTokenComponent implements OnInit{
  public minDate = new Date();

  //Importing Api services
  TokenForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private api : ApiService, private dialogRef : MatDialogRef<DialogTokenComponent>) {}

  ngOnInit():void {
    this.TokenForm = this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      location:['',Validators.required],
      preference:['',Validators.required],
      service:['',Validators.required],
      address:['',Validators.required],
      date:['',Validators.required],
      time:['',Validators.required]
    })
  }

  addTokenForm(){
    if(this.TokenForm.valid){
      this.api.postToken(this.TokenForm.value)
      .subscribe({
        next:(res)=>{
          alert("Token added successfully");
        },
        error:(err)=>{
          alert("Error adding token");
        }
      })
    }
    else {
      alert("Fill all the details complusory");
    }
  }
}
