import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../service/messages.service';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor(private msService: MessagesService) { }

  ngOnInit() {
    this.msService.displayErrorMessage("sorry page not found");
    console.log("in pagenot found component init");
  }

}
