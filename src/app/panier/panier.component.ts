import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { Book } from '../model/Book';
import { Editor } from '../model/Editor';
import { Author } from '../model/Author';
import { Member } from '../model/Member';
import { BookBasket } from '../model/BookBasket';
import { BookBasketFull } from '../model/BookBasketFull';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { BASE_URL } from '../utils/app_constant';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  private books: Array<Book> = [];
  private bookBaskets: Array<BookBasket> = [];  
  private member:Member;

  private bookBasketFulls:Array<BookBasketFull> = [];
  

    constructor(
    private backService : BackEndService,
    private messageService: MessagesService,
    private dss: DatashareService,
    private storage: LocalStorageService,
    private router: Router
    ) { }

  ngOnInit() {
    if(this.storage.retrieve("me"))
    {
    //  console.log("=====================================================OKK");
      this.member=this.storage.retrieve("me");
    //  console.log(this.member.idMember);
      this.getListBookBasketFull(this.member);
    }
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

  getListBookBasketFull(member:Member)
  {
    this.getListBookBasket(member);


    console.log(this.bookBaskets.length);


    if(this.bookBaskets)
    for(let element of this.bookBaskets)
    {
        let book:Book = this.getBookByBookCopy(element.bookCopyId);
        let authors:Array<Author> = this.getListAuthorByBook(book.idBook);
        let editor:Editor = this.getEditorByBook(book.idBook);

        let bookBasketFull: BookBasketFull = {
        bookBasketId:element.idBookBasket,
        bookBasketCreationDate:element.creationDate,
        bookBasketDeliveryDate:element.deliveryDate,
        idBook: book.idBook,
        isbn: book.isbn,
        bookTitre: book.bookTitre,
        bookDescription: book.bookDescription,
        imagePath: book.imagePath,
        popularBook: book.popularBook,
        periodicBook: book.periodicBook,
        bookPrice: book.bookPrice,
        publicationDate: book.publicationDate,
        categoryId: book.categoryId,
        editor: editor,
        authors: authors,
        memberId: member.idMember
      };
      this.bookBasketFulls.push(bookBasketFull);
    }
    console.log("====================================================================================");
    console.log(this.bookBasketFulls.length);
    for(let element of this.bookBasketFulls)
    {
      console.log(element.bookTitre);
    }
 }

getListBookBasket(member:Member):any
{
      this.backService.GetListBookBasketByMember(member).subscribe(
     data => {
      // this.backService.handleData(data);
       if (data.payload) {
      //   console.log(data.payload);
         //cache the logged member in datashare service
         this.bookBaskets = data.payload;
        // console.log("====================================================");
       //  console.log(this.bookBaskets.length);
       //  return this.bookBaskets;
       }
     },
     error => {
       console.error(error.message);
       //messageService.displayFailureMessage(error.message);
      // return null;
     }

   );
   console.log(this.bookBaskets.length);
   return this.bookBaskets;
}

getBookByBookCopy(bookCopyId:number):any
{
      this.backService.GetBookByBookCopy(bookCopyId).subscribe(
     data => {
    //   this.backService.handleData(data);
       if (data.payload) {
         console.log(data.payload);
         //cache the logged member in datashare service
         return data.payload;
       }
     },
     error => {
       console.error(error.message);
       //messageService.displayFailureMessage(error.message);
       return null;
     }

   );
}

getListAuthorByBook(bookId:number):any
{
      this.backService.GetListAuthorByBook(bookId).subscribe(
     data => {
    //   this.backService.handleData(data);
       if (data.payload) {
         console.log(data.payload);
         //cache the logged member in datashare service
         return  data.payload;
       }
     },
     error => {
       console.error(error.message);
       //messageService.displayFailureMessage(error.message);
       return null;
     }

   );
}

getEditorByBook(bookId:number):any
{
      this.backService.GetEditorByBook(bookId).subscribe(
     data => {
  //     this.backService.handleData(data);
       if (data.payload) {
         console.log(data.payload);
         //cache the logged member in datashare service
         return data.payload;
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
