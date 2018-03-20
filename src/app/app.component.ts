import { Component } from '@angular/core';
import {MessageService} from'./service/message.service'
import {onchange} from 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements onchange{
  title = 'app';
  isDisplayed = false;


 
}
