import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormData: FormGroup;
  isLoggedIn = false;

  constructor(private fb: FormBuilder,
              private router: Router
  ) { }

  ngOnInit() {
    this.loginFormData = this.fb.group(
      {
        email: ['', [Validators.required, Validators.minLength(5)]],
        password: ['', Validators.required]
      }
    )
  }

  onSubmitLogin(): void {

    if (this.loginFormData.valid) {
      this.isLoggedIn = true;

      if(this.isLoggedIn) {
        setTimeout(() => {
          this.isLoggedIn = false;
          this.router.navigate(['/expenses-board/view']);
        }, 2000);
        console.log(this.loginFormData, this.isLoggedIn);
      }

    }
  }
}
