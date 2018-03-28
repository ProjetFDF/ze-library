import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { BackEndService } from '../service/back-end.service';
import { Member } from '../model/Member';
import { BASE_URL } from '../utils/app_constant';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    user : Member;

  constructor(private storage: LocalStorageService, private backService: BackEndService, private router: Router) { }

  ngOnInit() {
    if(this.storage.retrieve('me')){
        this.user = this.storage.retrieve('me');
    }
  }

  logout()
  {
    this.backService.Logout().subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          //cache the logged member in datashare service
          this.storage.clear('me');
          this.user = null;
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
