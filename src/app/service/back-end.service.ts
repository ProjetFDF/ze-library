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
import { BookBasket } from '../model/BookBasket';
import { BookBasketFull } from '../model/BookBasketFull';
import { BASE_URL } from '../utils/app_constant';

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
    return this.http.post<IdentifiantsVM>(BASE_URL+"/member/login", identifiantsVm, httpOptions).pipe(retry(3),catchError(this.handleError));
  } 

  Logout(): Observable<any> 
  {
    return this.http.post<IdentifiantsVM>(BASE_URL+"/member/logout", httpOptions).pipe(retry(3),catchError(this.handleError));
  } 

  Inscription(member): Observable<any> 
  {
    console.log(member);
    return this.http.post<Member>(BASE_URL+"/member/add",member, httpOptions).pipe(retry(3),catchError(this.handleError));
  } 

 Creationlivre(book): Observable<any> 
  {
    console.log(book);
    return this.http.post<Book>(BASE_URL+"/book/add",book, httpOptions).pipe(retry(3),catchError(this.handleError));
  } 

  Books(filtresMultiplesVM): Observable<any>
 {
   console.log(filtresMultiplesVM);
   return this.http.post<FiltresMultiplesVM>(BASE_URL+"/book/search",filtresMultiplesVM, httpOptions)
   .pipe(      
     retry(3),
     catchError(this.handleError)
   );
 }
 
 GetListAuthor(): Observable<any>
 {
   return this.http.get<Author[]>(BASE_URL+"/author/getlist", httpOptions)
   .pipe(      
     retry(3),
     catchError(this.handleError)
   );
 }
 
 GetListEditor(): Observable<any>
 {
   return this.http.get<Editor[]>(BASE_URL+"/editor/getlist", httpOptions)
   .pipe(      
     retry(3),
     catchError(this.handleError)
   );
 }

 GetListCategory(): Observable<any>
 {
   return this.http.get<Category[]>(BASE_URL+"/category/getlist", httpOptions)
   .pipe(      
     retry(3),
     catchError(this.handleError)
   );
 }

 GetListBookBasketByMember(member:Member): Observable<any>
 {
   return this.http.post<BookBasket[]>(BASE_URL+"/bookbasket/getlistbyidmember",member , httpOptions)
   .pipe(      
     retry(3),
     catchError(this.handleError)
   );
 }

 GetBookByBookCopy(idBookCopy:number): Observable<any>
 {
   return this.http.post<Book>(BASE_URL+"/bookcopy/getlistbookbyidcopy",idBookCopy , httpOptions)
   .pipe(      
     retry(3),
     catchError(this.handleError)
   );
 }


 GetListAuthorByBook(idBook:number): Observable<any>
 {
   return this.http.post<Author[]>(BASE_URL+"/book/getlistauthorbyidbook",idBook , httpOptions)
   .pipe(      
     retry(3),
     catchError(this.handleError)
   );
 }


 GetEditorByBook(idBook:number): Observable<any>
 {
   return this.http.post<Editor>(BASE_URL+"/book/geteditorbyidbook",idBook , httpOptions)
   .pipe(      
     retry(3),
     catchError(this.handleError)
   );
 }


 DeleteBookBasket(idBookBasket:number)
 {
      return this.http.post<any>(BASE_URL+"/bookbasket/delete",idBookBasket , httpOptions)
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
