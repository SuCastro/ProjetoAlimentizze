import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/Usuario';
import { UsuarioDTO } from '../modelo/UsuarioDTO';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioDTO: UsuarioDTO): Observable<UsuarioDTO>{
    return this.http.post<UsuarioDTO>('https://projetoalimentizze.herokuapp.com/usuario/autenticar',usuarioDTO)


  }


  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://projetoalimentizze.herokuapp.com/usuario/salvar',usuario)

  }





  /*logado(){
    let ok = false // == let ok: boolean = false ---> pode ser escrita com mais tipagem

    if(environment. != ''){
      ok = true
    }

    return ok
  }*/

}
