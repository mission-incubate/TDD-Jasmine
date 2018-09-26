import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
	]);

	passwordControl = new FormControl('', [
		Validators.required
	]);

	emailID: string;
  pswrd: string;

  public languageOptions: string[] = [
    'English',
    'French'
	];

  matcher = new MyErrorStateMatcher();
  constructor(
    private router: Router,
    private  apiService:  ApiService
  ) { }

    ngOnInit() {}

	login() {
    //this.apiService.oauthLogin(this.emailFormControl.value, this.passwordControl.value);
    this.router.navigateByUrl('home');
	}
}
