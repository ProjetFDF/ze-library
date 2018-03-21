import { Component, OnInit, Type,Injectable } from '@angular/core';
import { DatashareService } from '../service/datashare.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
@Injectable()
export class MessagesComponent implements OnInit {
alertClass: string ="alert-dismissible show";
message: string ="";
isDisplayed = false;

  constructor (private dss: DatashareService) { }

  ngOnInit() {
this.alertClass = this.dss.alertMessageClass+ this.alertClass;
this.message = this.dss.message;
this.isDisplayed = this.dss.isMessageDisplayed;
console.log(this.isDisplayed);
console.log(this.message);
console.log(this.alertClass);
  }

}
