import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    // tslint:disable-next-line: no-shadowed-variable
    const fixture = TestBed.createComponent(HomePage);
    const app = fixture.componentInstance;
    expect(app.formGroup.valid).toBeFalsy();
  });
  it('name should contain only one number', async(() => {
    // tslint:disable-next-line: no-shadowed-variable
    const fixture = TestBed.createComponent(HomePage);
    const app = fixture.componentInstance;
    app.formGroup.controls.name.setValue('1234123412345678');
    expect(app.formGroup.controls.name.valid).toBeFalsy();
  }));
  it('name should contain atleast one number one uppercase', async(() => {
    // tslint:disable-next-line: no-shadowed-variable
    const fixture = TestBed.createComponent(HomePage);
    const app = fixture.componentInstance;
    app.formGroup.controls.name.setValue('User1');
    expect(app.formGroup.controls.name.valid).toBeTruthy();
  }));
  it('name  should not have consecutive charecters', async(() => {
    // tslint:disable-next-line: no-shadowed-variable
    const fixture = TestBed.createComponent(HomePage);
    const app = fixture.componentInstance;
    app.formGroup.controls.name.setValue('Userr1');
    expect(app.formGroup.controls.name.valid).toBeFalsy();
  }));
  it('name should not contain more than 10 charecters', async(() => {
    // tslint:disable-next-line: no-shadowed-variable
    const fixture = TestBed.createComponent(HomePage);
    const app = fixture.componentInstance;
    app.formGroup.controls.name.setValue('UserbankinG1');
    expect(app.formGroup.controls.name.valid).toBeFalsy();
  }));

  it('password should equal to or more than contain more than 8 charecters', async(() => {
    // tslint:disable-next-line: no-shadowed-variable
    const fixture = TestBed.createComponent(HomePage);
    const app = fixture.componentInstance;
    app.formGroup.controls.password.setValue('user');
    expect(app.formGroup.controls.password.valid).toBeFalsy();
  }));
  it('password should only have  charecters', async(() => {
    // tslint:disable-next-line: no-shadowed-variable
    const fixture = TestBed.createComponent(HomePage);
    const app = fixture.componentInstance;
    app.formGroup.controls.password.setValue('userbanking');
    expect(app.formGroup.controls.password.valid).toBeTruthy();
  }));
  it('password should only have  charecters', async(() => {
    // tslint:disable-next-line: no-shadowed-variable
    const fixture = TestBed.createComponent(HomePage);
    const app = fixture.componentInstance;
    app.formGroup.controls.password.setValue('user1banking');
    expect(app.formGroup.controls.password.valid).toBeFalsy();
  }));
});
