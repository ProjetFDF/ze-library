import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../service/message.service';
@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor(private msService: MessagesService) { }

  ngOnInit() {
    this.msService.displayError
  }

}
