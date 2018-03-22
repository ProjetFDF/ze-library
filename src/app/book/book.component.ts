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

  listeBooks: any;
  listeAuthor: any;
  listeEditor: any;
  listeCategory: any;
  filtresMultiplesVM: FiltresMultiplesVM = {
	authorIds:[],
	editorsIds:[],
	categoryIds:[],
	recommande:true,
	titre:""
  };


 constructor(
    private backService: BackEndService,
   private messageService: MessagesService,
   private dss: DatashareService
   ) {}


 ngOnInit() {
    this.getCategories();
    this.getAuthors();
    this.getEditors();
    this.book();
    
 }

 book() {
   this.backService.Books(this.filtresMultiplesVM).subscribe(
     data => {
    //   console.log("================================================");
      //   console.log(this.filtresMultiplesVM.authorIds);
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

 getEditors()
 {
    this.backService.GetListEditor().subscribe(
     data => {
       this.backService.handleData(data);
       if (data.payload) {
         console.log(data.payload);
         //cache the logged member in datashare service
         this.listeEditor = data.payload;
         return this.listeEditor;
       }
     },
     error => {
       console.error(error.message);
       //messageService.displayFailureMessage(error.message);
       return null;
     }

   );

 }

 getAuthors()
 {
    this.backService.GetListAuthor().subscribe(
     data => {
       this.backService.handleData(data);
       if (data.payload) {
         console.log(data.payload);
         //cache the logged member in datashare service
         this.listeAuthor = data.payload;
         return this.listeAuthor;
       }
     },
     error => {
       console.error(error.message);
       //messageService.displayFailureMessage(error.message);
       return null;
     }

   );
 }

 getCategories()
 {
    this.backService.GetListCategory().subscribe(
     data => {
       this.backService.handleData(data);
       if (data.payload) {
         console.log(data.payload);
         //cache the logged member in datashare service
         this.listeCategory = data.payload;
         return this.listeCategory;
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
  
  
    
  



 

