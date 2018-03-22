import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { Router } from '@angular/router';
import { Book } from '../model/Book';
import { Author } from '../model/Author';
import { Editor } from '../model/Editor';
import { Category } from '../model/Category';

@Component({
  selector: 'app-creationlivre',
  templateUrl: './creationlivre.component.html',
  styleUrls: ['./creationlivre.component.css']
})
export class CreationlivreComponent implements OnInit {

    listeAuthor: any;
  listeEditor: any;
  listeCategory: any;

    book:Book= {
    idBook:0 ,
ISBN:0 ,
bookTitre:"" ,
bookDescription:"" ,
imagePath:"" ,
popularBook:false ,
periodicBook:false ,
bookPrice:0 ,
publicationDate:"" ,
category:0 ,
editor:0 ,
authors:[] ,
ilEstEmprunter:false ,
    };

  

  constructor(
    private backService : BackEndService,
    private messageService: MessagesService,
    private dss: DatashareService,
    private router: Router
    ) { }

  ngOnInit() {
       this.getCategories();
    this.getAuthors();
    this.getEditors(); 
  }

  creationlivre()
  {
      console.log(this.book);
        this.backService.Creationlivre(this.book).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
      //    console.log(data.payload);
          //cache the logged member in datashare service
         // this.dss.loggedMember = data.payload;
          //navigate to home and display navbar or the hidden tabs
          this.router.navigate(['/creationlivre']);
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
