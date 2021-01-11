import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UserDataService } from '../../../services/user-data.service';

@Component({
  selector: 'app-updatedialog',
  templateUrl: './updatedialog.component.html',
  styleUrls: ['./updatedialog.component.scss']
})
export class UpdatedialogComponent implements OnInit {

  updateForm: FormGroup;

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<UpdatedialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private userService: UserDataService) { }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      name: [this.data.name, Validators.required],
      email: [this.data.email, [Validators.required, Validators.email]],
      password: [this.data.password, Validators.required],
      type: [this.data.type, Validators.required],
      dob: [this.data.dob, Validators.required],
      address: [this.data.address, Validators.required]
    });
  }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  update() {
    this.userService.updateData(this.updateForm.value);
    this.dialogRef.close();
  }

}
