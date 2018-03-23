import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { Book } from '../model/Book';
import { Member } from '../model/Member';
import { BookBasketFull } from '../model/BookBasketFull';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  bookBasketIds: Array<number> = [];   // null
  books: Array<Book> = [];
  bookBasketFulls: Array<BookBasketFull> = [];  
  memberId=1;

    constructor(
    private backService : BackEndService,
    private messageService: MessagesService,
    private dss: DatashareService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getListBookBasketFull();
  }

  emprunter(idBook: number) {
  }

  enleverDuPanier(idBookbasket: number) 
  {
        this.backService.DeleteBookBasket(idBookbasket).subscribe(
     data => {
       this.backService.handleData(data);
       if (data.payload) {
         console.log(data.payload);
         //cache the logged member in datashare service
         this.books = data.payload;
          this.router.navigate(['/home']);
       }
     },
     error => {
       console.error(error.message);
       //messageService.displayFailureMessage(error.message);
       return null;
     }
   );

  }

  validerLePanier() {
  }

   getListBookBasketFull()
 {
    this.backService.GetListBookBasketByMember(this.memberId).subscribe(
     data => {
       this.backService.handleData(data);
       if (data.payload) {
         console.log(data.payload);
         //cache the logged member in datashare service
         this.bookBasketFulls = data.payload;
         return this.bookBasketIds;
       }
     },
     error => {
       console.error(error.message);
       //messageService.displayFailureMessage(error.message);
       return null;
     }

   );

 }

}
