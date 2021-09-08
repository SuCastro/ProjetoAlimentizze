import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioDTO } from '../modelo/UsuarioDTO';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioDTO: UsuarioDTO = new UsuarioDTO()

  constructor(
  private auth: AuthService,
  private router: Router

  ) { }

  ngOnInit()  {
    
    window.scroll(0,0)

    if(environment.token == ''){
      /* alert('Sua sessão expirou, faça login novamente!!!')*/
       this.router.navigate(['/entrar'])  
     }
    

  }

entrar(){
  this.auth.entrar(this.usuarioDTO).subscribe((resp:UsuarioDTO) => {
    console.log(JSON.stringify(this.usuarioDTO))

    this.usuarioDTO = resp
    console.log("~resp foto"+resp.foto)
    environment.token = this.usuarioDTO.token
    environment.nomeCompleto = this.usuarioDTO.nomeCompleto
    environment.foto = resp.foto
    environment.id = this.usuarioDTO.id
    environment.email = this.usuarioDTO.email
    environment.tipoDeUsuario = this.usuarioDTO.tipoDeUsuario

    console.log(environment.token)
    console.log(environment.nomeCompleto)
    console.log(environment.foto)
    console.log(environment.id)
    console.log(environment.email)
    console.log(environment.tipoDeUsuario)

    this.router.navigate(["/home"])

  }, erro => {
    if(erro.status == 500){
      alert("Usuário ou senha estão incorretos!")
    }
    if(erro.status == 400){
      alert("Usuário ou senha estão incorretos!")
    }
  })
} 


}