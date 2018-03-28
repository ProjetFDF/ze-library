import { Component, OnInit } from '@angular/core';
import { IdentifiantsVM } from '../model/IndentifiantsVM';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  identifiants: IdentifiantsVM = {
    email:"",
    password:""
  };

  constructor(
    private backService : BackEndService,
    private messageService: MessagesService,
    private dss: DatashareService,
    private storage: LocalStorageService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  login()
  {
    this.backService.Login(this.identifiants).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          //cache the logged member in datashare service
          this.storage.store('me', data.payload)
          //navigate to home and display navbar or the hidden tabs
          this.router.navigate(['/book']);
        }
      },
      error => {
        console.error(error.message);
        //messageService.displayFailureMessage(error.message);
      }

    );

  }
}
