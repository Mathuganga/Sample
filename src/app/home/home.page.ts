import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formGroup;
  constructor(
    public route: Router,
    public commonservice: CommonService,
    public formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
    });
  }

  ionViewWillEnter() {
  }

  onSubmit(value) {
    this.commonservice.userInput = value;
    this.route.navigate(['button', {}]);
    this.formGroup.reset();
  }
  ionViewWillLeave(){


  }
}
