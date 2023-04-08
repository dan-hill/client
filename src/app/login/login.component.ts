import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {AuthService} from "../auth.service";
import {StorageService} from "../storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private storage: StorageService,
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if(this.loginForm.valid) {
      console.log(this._v());
      this.authService.authenticate(this._v().email, this._v().password).subscribe((data: any) => {
        this.storage.setToken(data.access_token)
      });
    }
  }
  _v() {
    return this.loginForm.value;
  }
}
