import { Component, OnInit } from '@angular/core';
import { Book } from '../model/Book';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { FiltresMultiplesVM } from '../model/FiltresMultiplesVM';
import { Author } from '../model/Author';
import { Editor } from '../model/Editor';
import { Category } from '../model/Category';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  listeBooks: Book[];
  listeAuthor: Author[];
  listeEditor: Editor[];
  listeCategory: Category[];
  filtresMultiplesVM: FiltresMultiplesVM;


 constructor(
    private backService: BackEndService,
   private messageService: MessagesService,
   private dss: DatashareService
   ) {this.book();}


 ngOnInit() {
   this.backService.GetListAuthor(this.listeAuthor).subscribe(
     data => {
       this.backService.handleData(data);
       if (data.payload) {
         console.log(data.payload);
         //cache the logged member in datashare service
         this.listeAuthor = data.payload;
         
       }
     },
     error => {
       console.error(error.message);
       //messageService.displayFailureMessage(error.message);
     }

   );
this.backService.GetListEditor(this.listeEditor).subscribe(
     data => {
       this.backService.handleData(data);
       if (data.payload) {
         console.log(data.payload);
         //cache the logged member in datashare service
         this.listeEditor = data.payload;
         
       }
     },
     error => {
       console.error(error.message);
       //messageService.displayFailureMessage(error.message);
     }

   );

   this.backService.GetListCategory(this.listeCategory).subscribe(
     data => {
       this.backService.handleData(data);
       if (data.payload) {
         console.log(data.payload);
         //cache the logged member in datashare service
         this.listeCategory = data.payload;
         
       }
     },
     error => {
       console.error(error.message);
       //messageService.displayFailureMessage(error.message);
     }

   );
 
 }

 book() {
   this.backService.Books(this.listeBooks).subscribe(
     data => {
       this.backService.handleData(data);
       if (data.payload) {
         console.log(data.payload);
         //cache the logged member in datashare service
         this.listeBooks = data.payload;
         
       }
     },
     error => {
       console.error(error.message);
       //messageService.displayFailureMessage(error.message);
     }

   );

 }

}
  
  
    
  



 

