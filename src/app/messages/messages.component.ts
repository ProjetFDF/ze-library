import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../service/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
alertClass: string ="alert-dismissible fade show";
message: string ="";
isDisplayed = false;

  constructor (private msService: MessagesService) { }

  ngOnInit() {
this.alertClass = this.msService.alertClass+ this.message;
this.message = this.msService.message;
this.isDisplayed = this.msService.isDisplayed;
console.log(this.isDisplayed);
console.log(this.message);
console.log(this.alertClass);
  }

}
