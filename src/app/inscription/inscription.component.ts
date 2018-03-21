import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { Router } from '@angular/router';
import { Member } from '../model/Member';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

    member:Member= {
    idMember:0 ,
	  lastname:"" ,
    firstname:"",
	  email:"" ,
	  password:"" ,
    address:"" ,
    city:"" ,
    postalCode:"" ,
    phone:"" ,
	  administrateur:false ,
	  borrows:[] ,
	  bookBaskets:[]
  };

  constructor(
    private backService : BackEndService,
    private messageService: MessagesService,
    private dss: DatashareService,
    private router: Router
    ) { }
  ngOnInit() {
  }

  inscription()
  {
        this.backService.Inscription(this.member).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          //cache the logged member in datashare service
          this.dss.loggedMember = data.payload;
          //navigate to home and display navbar or the hidden tabs
          this.router.navigate(['/inscription']);
        }
      },
      error => {
        console.error(error.message);
        //messageService.displayFailureMessage(error.message);
      }

    );

  }
}
