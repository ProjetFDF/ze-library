import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IdentifiantsVM } from './model/IndentifiantsVM';
import { Member } from './model/Member';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
}

@Injectable()
export class BackEndService {

  constructor(private http: HttpClient) { }


  Login(identifiantsVm: IdentifiantsVM): Observable<any> 
  {
    return this.http.post<IdentifiantsVM>("http://localhost:8080/GestionBiblio/member/login", identifiantsVm, httpOptions).pipe(retry(3),catchError(this.handleError));
  } 

  private handleError(error: HttpErrorResponse)
  {
    if(error.error instanceof ErrorEvent)
    {
      console.error('An error occured: ',error.error.message);
    } else
    {
      console.error('Backend return code : ${error.status}, body while was: ${error.error}');
    }

    return new ErrorObservable('Something bad happened; please retry again later.');
  };

  private handleData(data: any)
  {
    if(data.success)
    {
      console.log(data.message);
    }
    else
    {
      console.error(data.message);
    }
  }


}
