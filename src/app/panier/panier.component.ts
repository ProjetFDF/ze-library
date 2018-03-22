import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { Book } from '../model/Book';
import { Member } from '../model/Member'

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  bookBasketIds: Array<number> = [];   // null
  books: Array<Book> = [];

  member:Member;

    constructor(
    private backService : BackEndService,
    private messageService: MessagesService,
    private dss: DatashareService
    ) { }

  ngOnInit() {
   //this.arrayBookPanier = new Array<number>(); // []

   
   

    // Récupérer la liste des livres 

  }


  emprunter(idBook: number) {
    this.bookBasketIds.push(idBook); // [1]
    // Je parcours la liste des livres "books" et trouver celui qui correspond à mon identifiant "idBook" transmis à ma fonction 
    // Il faut passer l'object Book avec l'attribut "ilEstEmprunter" à true
  }

  enleverDuPanier(idBook: number) {
    // Je parcours la liste des books
    for(let i = 0; i < this.bookBasketIds.length; i++) {
      // Si mon id transmis est l'ID qui est parcouru dans mon array de Book
      if (idBook === this.bookBasketIds[i]) {
        this.bookBasketIds.splice(i, 1);    // Avant j'avais [1,2] après j'ai [2]            
      }
    }

    // Je parcours la liste des livres "books" et trouver celui qui correspond à mon identifiant "idBook" transmis à ma fonction 
    // Il faut passer l'object Book avec l'attribut "ilEstEmprunter" à false
    
  }

  validerLePanier() {
    // Appel du back avec transmission de la liste des bouquins empruntés "arrayBookPanier"
  }

   getListBookByMembersBasket()
 {
    this.backService.GetListBookBasketByMember(this.member).subscribe(
     data => {
       this.backService.handleData(data);
       if (data.payload) {
         console.log(data.payload);
         //cache the logged member in datashare service
         this.books = data.payload;
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
