// import { AppModule } from './../../app.module';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

// describe('Component: Login', () => {

//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [ReactiveFormsModule, FormsModule],
//       declarations: [LoginComponent]
//     });

//     // create component and test fixture
//     fixture = TestBed.createComponent(LoginComponent);

//     // get test component from the fixture
//     component = fixture.componentInstance;
//     component.ngOnInit();
//   });

// });


// describe("test", () => {
  import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
  import { CommonModule } from '@angular/common';

  import { AppModule } from './../../app.module';
  // import { ChildComponent } from './child.component';

  describe('StaticComponent', () => {
      let component: LoginComponent;
      let fixture: ComponentFixture<LoginComponent>;

      // create new instance of FormBuilder
      const formBuilder: FormBuilder = new FormBuilder();

      beforeEach(
          async(() => {
              TestBed.configureTestingModule({
                  declarations: [
                      LoginComponent
                  ],
                  imports: [
                      CommonModule,
                      ReactiveFormsModule,
                      AppModule
                  ],
                  providers: [
                      // reference the new instance of formBuilder from above
                      { provide: FormBuilder, useValue: formBuilder }
                  ]
              }).compileComponents();
          })
      );

      beforeEach(() => {
          fixture = TestBed.createComponent(LoginComponent);
          component = fixture.componentInstance;

          // pass in the form dynamically
          component.loginFormData = formBuilder.group({
              email: null,
              password: null
          });
          fixture.detectChanges();
      });

      it('should be created', () => {
          expect(component).toBeTruthy();
      });
  });
  // let component: LoginComponent;

  // it("login form should be invalide", () => {
  //   component.loginFormData.controls['email'].setValue("");
  //   component.loginFormData.controls['password'].setValue("");
  //   expect(component.loginFormData.valid).toBeFalsy();
  // })
// })

// describe('LoginComponent', () => {
//   // let fixture: ComponentFixture<LoginComponent>;

//   // beforeEach(async(() => {
//   //   TestBed.configureTestingModule({
//   //     declarations: [ LoginComponent ]
//   //   })
//   //   .compileComponents();
//   // }));

//   // beforeEach(() => {
//   //   fixture = TestBed.createComponent(LoginComponent);
//   //   component = fixture.componentInstance;
//   //   fixture.detectChanges();
//   // });

//   // it('should create', () => {
//   //   expect(component).toBeTruthy();
//   // });
//   let component: LoginComponent;
//   it("should return true", () => {
//     return true;
//   })


//   //   it("login form should be invalide", () => {
//   //   component.loginFormData.controls['email'].setValue("");
//   //   component.loginFormData.controls['password'].setValue("");
//   //   expect(component.loginFormData.valid).toBeFalsy();
//   // })

//   // it('form invalid when empty', () => {
//   //   expect(component.loginFormData.valid).toBeFalsy();
//   // });
// });
