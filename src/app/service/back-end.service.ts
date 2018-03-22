import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IdentifiantsVM } from '../model/IndentifiantsVM';
import { FiltresMultiplesVM } from '../model/FiltresMultiplesVM';
import { Member } from '../model/Member';
import { HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import {MessagesService} from './messages.service';
import { Book } from '../model/Book';
import { Author } from '../model/Author';
import { Editor } from '../model/Editor';
import { Category } from '../model/Category';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
}

@Injectable()
export class BackEndService {

  constructor(private http: HttpClient, private msService: MessagesService) { }


  Login(identifiantsVm: IdentifiantsVM): Observable<any> 
  {
    console.log(identifiantsVm);
    return this.http.post<IdentifiantsVM>("http://localhost:8080/GestionBiblio/member/login", identifiantsVm, httpOptions).pipe(retry(3),catchError(this.handleError));
  } 

  Inscription(member): Observable<any> 
  {
    console.log(member);
    return this.http.post<Member>("http://localhost:8080/GestionBiblio/member/add",member, httpOptions).pipe(retry(3),catchError(this.handleError));
  } 

 Creationlivre(book): Observable<any> 
  {
    console.log(book);
    return this.http.post<Book>("http://localhost:8080/GestionBiblio/book/add",book, httpOptions).pipe(retry(3),catchError(this.handleError));
  } 

  Books(filtresMultiplesVM): Observable<any>
 {
   console.log(filtresMultiplesVM);
   return this.http.post<FiltresMultiplesVM>("http://localhost:8080/GestionBiblio/book/search",filtresMultiplesVM, httpOptions)
   .pipe(      
     retry(3),
     catchError(this.handleError)
   );
 }
 
 GetListAuthor(): Observable<any>
 {
   return this.http.get<Author[]>("http://localhost:8080/GestionBiblio/author/getlist", httpOptions)
   .pipe(      
     retry(3),
     catchError(this.handleError)
   );
 }
 
 GetListEditor(): Observable<any>
 {
   return this.http.get<Editor[]>("http://localhost:8080/GestionBiblio/editor/getlist", httpOptions)
   .pipe(      
     retry(3),
     catchError(this.handleError)
   );
 }

 GetListCategory(): Observable<any>
 {
   return this.http.get<Category[]>("http://localhost:8080/GestionBiblio/category/getlist", httpOptions)
   .pipe(      
     retry(3),
     catchError(this.handleError)
   );
 }

 GetListBookBasketByMember(member:Member): Observable<any>
 {
   return this.http.post<Category[]>("http://localhost:8080/GestionBiblio/bookbasket/getlistbyidmember",member , httpOptions)
   .pipe(      
     retry(3),
     catchError(this.handleError)
   );
 }

  private handleError(error: HttpErrorResponse)
  {
    if(error.error instanceof ErrorEvent)
    {
      console.error('An error occured: ',error.error.message);
    } else
    {
      console.error('Backend return code : ${error.status}, ' + 'body while was: ${error.error}');
    }

    return new ErrorObservable('Une erreur s\'est produite lors du traitement de votre requête');
  };



  handleData(data: any)
  {
    if(data.success)
    {
      console.log(data.message);
      this.msService.displaySuccessfullMessage(data.message);
    }
    else
    {
      console.error(data.message);
      this.msService.displayErrorMessage(data.message);
    }
  }


}
