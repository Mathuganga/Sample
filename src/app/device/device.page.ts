import { Component, OnInit } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {
  user: any;

  constructor(public device: Device,
              public commonservice: CommonService,
    ) { }

  ngOnInit() {
    this.user = this.commonservice.userInput;

  }

  ionViewWillEnter(){
    console.log('device', this.device.isVirtual);
  }
}
