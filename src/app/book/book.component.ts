import { Component, OnInit } from '@angular/core';
import { Book } from '../model/Book';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  listeBooks: Book[];

 constructor(
    private backService: BackEndService,
   private messageService: MessagesService,
   private dss: DatashareService
   ) {this.book();}


 ngOnInit() {
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
  
  
    
  



 

