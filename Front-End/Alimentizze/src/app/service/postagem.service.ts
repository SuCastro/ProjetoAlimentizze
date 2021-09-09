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
  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://projetoalimentizze.herokuapp.com/postagem/${id}`)
  }

  getByTituloPostagem(titulo: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://projetoalimentizze.herokuapp.com/postagem/titulo/${titulo}`)
  }
  
  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>("https://projetoalimentizze.herokuapp.com/postagem", postagem)
  }

putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://projetoalimentizze.herokuapp.com/postagem', postagem)
  }
  deletePostagem(id: number){
    return this.http.delete(`https://projetoalimentizze.herokuapp.com/postagem/${id}`, this.token)
  }



}
