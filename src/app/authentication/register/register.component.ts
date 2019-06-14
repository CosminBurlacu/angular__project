import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFormData: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router
  ) { }

  ngOnInit() {
    this.registerFormData = this.fb.group(
      {
        email: ['', [Validators.required, Validators.minLength(5)]],
        password: ['', Validators.required],
        passwordRepeated: ['', Validators.required]
      }
    )
  }

  onSubmitRegister(): void {
    // ev.preventDefault();
    console.log(this.registerFormData);

    if (this.registerFormData.valid) {
      this.router.navigate(['/login']);
    }
  }
}
