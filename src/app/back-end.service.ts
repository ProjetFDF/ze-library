import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IdentifiantsVM } from './model/IndentifiantsVM';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
}

@Injectable()
export class BackEndService {

  


  constructor(private http: HttpClient) { }


  Login(identifiantsVm: IdentifiantsVM): Observable<IdentifiantsVM> 
  {
    return this.http.post<IdentifiantsVM>("http://localhost:8080/GestionBiblio/member/login", identifiantsVm, httpOptions);
 // return this.http.get<IdentifiantsVM>(
    //this.configUrl, { observe: 'response' });

  } 
}
