import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TijoloService {
  versao = 'v3/';

  constructor(private http: HttpClient) { }

  getRestService(path_api, params): Observable<any> {
    return this.http.get('https://rebrickable.com/api/' + this.versao + path_api + '/?' + params + 'key=cb3816eb4dc2fc10a03e6ea3b855b26c')
    .map((res: Response) => res)  
  }
}