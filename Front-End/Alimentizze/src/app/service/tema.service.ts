import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../modelo/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient) { }

    token = {
headers: new HttpHeaders().set('Authorization', environment.token)


}
getAllTema(): Observable<Tema[]>{
  return this.http.get<Tema[]>('https://bloggenturma28.herokuapp.com/tema')
    }


postTema(tema : Tema): Observable<Tema>{
  return this.http.post<Tema>('https://bloggenturma28.herokuapp.com/tema', tema)

}
}