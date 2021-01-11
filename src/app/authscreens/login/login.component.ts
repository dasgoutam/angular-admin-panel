import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UserDataService } from '../../services/user-data.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserDataService, private _snackBar: MatSnackBar, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      type: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  submitSignup() {
    // console.log(this.signupForm.value);
    let msg = this.userService.saveData(this.signupForm.value);
    this.openSnackBar(msg + ". Please login to Continue","");
    if (msg == "Signup Successfull") {
      this.signupForm.reset();
    }
  }

  submitLogin() {
    let msg = this.userService.loginCurrentUser(this.loginForm.value);
    this.openSnackBar(msg,"");
    if (msg == "Login Successfull") {
      this.router.navigate(["/"]);
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
