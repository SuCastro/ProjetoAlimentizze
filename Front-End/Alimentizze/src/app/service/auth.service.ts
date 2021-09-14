import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../modelo/Usuario';
import { UsuarioDTO } from '../modelo/UsuarioDTO';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router

  ) { }
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };


  entrar(usuarioDTO: UsuarioDTO): Observable<UsuarioDTO>{
    return this.http.post<UsuarioDTO>('https://projetoalimentizze.herokuapp.com/usuario/logar',usuarioDTO)


  }


  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://projetoalimentizze.herokuapp.com/usuario/cadastrar',usuario)

  }





  logado(){
    let ok = false // == let ok: boolean = false ---> pode ser escrita com mais tipagem

    if(environment.token != ''){
      ok = true
    }

    return ok
  }


  ong(){
    let ok = false // == let ok: boolean = false ---> pode ser escrita com mais tipagem

    if(environment.tipoDeUsuario == 'ONG'){
      ok = true
    }

    return ok 
  }

}
