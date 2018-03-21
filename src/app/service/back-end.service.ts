import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IdentifiantsVM } from '../model/IndentifiantsVM';
import { Member } from '../model/Member';
import { HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import {MessagesService} from './messages.service';

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

  Inscription(member:Member): Observable<any> 
  {
    console.log();
    return this.http.post<IdentifiantsVM>("http://localhost:8080/GestionBiblio/member/add",member, httpOptions).pipe(retry(3),catchError(this.handleError));
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
