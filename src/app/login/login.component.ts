import { Component, OnInit } from '@angular/core';
import { IdentifiantsVM } from '../model/IndentifiantsVM';
import { BackEndService } from '../back-end.service';


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

  constructor(private backService : BackEndService) { }

  ngOnInit() {
  }

  login()
  {
    this.backService.Login(this.identifiants).subscribe(data => {
      console.log(data.email + " " + data.password)
    });

  }
}
