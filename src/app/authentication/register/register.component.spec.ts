import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
// import { LoginComponent } from '../login/login.component';

// default testing

describe('RegisterComponent', () => {
  let registerComponent: RegisterComponent;
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // custom testing

  // it("login form should be invalide", async(() => {
  //   registerComponent.registerFormData.controls['email'].setValue("");
  //   registerComponent.registerFormData.controls['password'].setValue("");
  //   registerComponent.registerFormData.controls['passwordRepeated'].setValue("");
  //   expect(registerComponent.registerFormData.valid).toBeFalsy();
  // }))

  // it("login form should be valid", async(() => {
  //   registerComponent.registerFormData.controls['email'].setValue("test@email.com");
  //   registerComponent.registerFormData.controls['password'].setValue("password");
  //   registerComponent.registerFormData.controls['passwordRepeated'].setValue("password");
  //   expect(registerComponent.registerFormData.valid).toBeTruthy();
  // }))
});

