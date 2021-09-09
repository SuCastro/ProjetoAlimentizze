import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../modelo/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>("https://projetoalimentizze.herokuapp.com/postagem")
  }


  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>("https://projetoalimentizze.herokuapp.com/postagem", postagem)
  }

}
