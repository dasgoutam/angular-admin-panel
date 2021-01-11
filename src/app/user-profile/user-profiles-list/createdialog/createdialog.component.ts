import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UserDataService } from '../../../services/user-data.service';

@Component({
  selector: 'app-createdialog',
  templateUrl: './createdialog.component.html',
  styleUrls: ['./createdialog.component.scss']
})
export class CreatedialogComponent implements OnInit {

  createForm: FormGroup;

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<CreatedialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private userService: UserDataService) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      type: ["", Validators.required],
      dob: ["", Validators.required],
      address: ["", Validators.required]
    });
  }

  create() {
    this.userService.saveData(this.createForm.value);
    this.dialogRef.close();
  }

}
