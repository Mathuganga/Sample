import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { ButtonPage } from './button.page';

describe('ButtonPage', () => {
  let component: ButtonPage;
  let fixture: ComponentFixture<ButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonPage ],
      imports: [IonicModule.forRoot(),
      RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
