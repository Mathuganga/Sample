import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { CommonService } from "../common.service";

@Component({
  selector: "app-button",
  templateUrl: "./button.page.html",
  styleUrls: ["./button.page.scss"],
})
export class ButtonPage implements OnInit {
  user: any;
  constructor(
    public commonservice: CommonService,
    public route: Router,
    public alertcontroller: AlertController
  ) {}

  ngOnInit() {
    this.user = this.commonservice.userInput;
  }
}
