import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  formGroup;
  name: any;
  password: any;
  constructor(
    public route: Router,
    public commonservice: CommonService,
    public formBuilder: FormBuilder,
  ) {
    this.formGroup = this.formBuilder.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          this.validateConsectiveName,
          this.validateOneNumber,
          this.validateUpper,
          this.validateNumber,
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^[A-Za-z]+$/),
        ]),
      ],
    });

    this.name = this.formGroup.controls.name;
    this.password = this.formGroup.controls.password;
  }

  ionViewWillEnter() {}
 
  onSubmit() {
    console.log('nae', this.name.value);
    const json = {
      user: this.name.value
    };
    this.commonservice.userInput = json;
    this.route.navigate(['button', {}]);
  }
  ionViewWillLeave() {}

  validateConsectiveName(control: FormControl): { [s: string]: boolean } {
    const str = control.value;
    const pattern = '(\\w)\\1+';
    if (str.match(pattern)) {
      return { validateConsectiveName: true };
    }
  }

  validateUpper(control: FormControl): { [s: string]: boolean } {
    const str = control.value;
    if (control.value.length > 0) {
      const pattern = '(?=.*[A-Z])';
      if (!str.match(pattern)) {
        return { validateUpper: true };
      }
    }
  }

  validateNumber(control: FormControl): { [s: string]: boolean } {
    const str = control.value;
    const pattern = '.*[0-9].*';
    if (!str.match(pattern)) {
      return { validateNumber: true };
    }
  }
  validateOneNumber(control: FormControl): { [s: string]: boolean } {
    const str = control.value;
    const pattern = '^\\D*\\d\\D*$';
    if (!str.match(pattern)) {
      return { validateOneNumber: true };
    }
  }
}
